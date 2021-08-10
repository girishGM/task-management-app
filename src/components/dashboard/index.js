import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../header/header.component";
import DashboardList from "./dashboard-list";
import DashboardTop from "./dashboard-top";
import taskStore from "../../store/task-store";
import { observer } from "mobx-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastStore from "../../store/toast-store";

const Dashboard = observer((props) => {
  const router = useHistory();
  const [page, setPage] = useState(1)  ;
  const [isLoading, setIsLoading] = useState(true)  ;

  const loadMoreCommit = () =>{
    setPage(page+1);
  }
  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      router.push('/');
    }
    getTasks();
    getDashboardData();
  },[page]);

  useEffect(() => {
       
        if(toastStore.toastMessageType === 'error'){
                toastStore.toastMessage && 
                toast.error(toastStore.toastMessage, {
                position: toast.POSITION.TOP_CENTER
              });  
        }else{
                toastStore.toastMessage && 
                toast.success(toastStore.toastMessage, {
                position: toast.POSITION.TOP_CENTER
              });
        }        
  }, [toastStore.toastMessageId])

  const getTasks = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("access-token"),
      },
      body: null,
    };

    fetch(process.env.REACT_APP_TASK_SERVICE_API_URL+'/tasks', requestOptions)
      .then((response) => response.json())
      .then((res) => {
        let result = res.result || [];
        taskStore.updateTask(result);
      });
  };

  const getDashboardData = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("access-token"),
      },
      body: null,
    };
    fetch(
      process.env.REACT_APP_TASK_SERVICE_API_URL+"/dashboard",
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        let result = res.result || { totalTasks: 0, completedTasks: 0 };
        taskStore.updateTaskCount(result.totalTasks, result.completedTasks);
          setIsLoading(false);
      });
  };

  return (
    <>
        {toastStore.toastMessage && <ToastContainer/> }
      <Header />
      <DashboardTop tasks={JSON.parse(JSON.stringify(taskStore.taskList))} taskResult={{totalTasks: taskStore.totalTask, completedTasks: taskStore.completedTask}} />
      <DashboardList tasks={JSON.parse(JSON.stringify(taskStore.taskList))} taskResult={{totalTasks: taskStore.totalTask, completedTasks: taskStore.completedTask}} />
    </>
  );
});

export default Dashboard;
