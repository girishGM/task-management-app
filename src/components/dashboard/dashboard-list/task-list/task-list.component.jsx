import React, { useState, useEffect} from 'react';
import Icon from "react-crud-icons";
import './task-list.style.css';
import {SearchBar} from '../search-bar/search-bar.component';
import taskStore from '../../../../store/task-store';
import toastStore from '../../../../store/toast-store';


export const TaskList = props => {

const [tasks,setTasks] = useState(props.tasks)  ;
const [filteredTasks,setFilteredTasks] = useState(props.tasks)  ;
const [taskResult,setTaskResult] = useState(props.taskResult)  ;
const [searchField,setSearchField] = useState('')  ;


useEffect(() => {
  setTasks(JSON.parse(JSON.stringify(props.tasks)))
}, [props.tasks])


useEffect(() => {
  setFilteredTasks(JSON.parse(JSON.stringify(props.tasks)))
}, [props.tasks])


const deleteTask = (id, taskStatus) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("access-token"),
    },
    body: null,
  };

  fetch("https://task-management-service.herokuapp.com/tasks/"+id, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if(res._status.code === 9000){
            let taskList = taskStore.taskList;
            let filteredTaskList  = taskList.filter((task)=> task.id !== id)
            taskStore.updateTask(filteredTaskList);
            let totalTask = taskStore.totalTask;
            let completedTask = taskStore.completedTask ;
            if(taskStatus){
              --completedTask;
            }
            taskStore.updateTaskCount(--totalTask, completedTask );
            toastStore.showToastMessage(res._status.message,'success', Date.now());
      }else{
            toastStore.showToastMessage(res._status.message,'error', Date.now());
      }
    });
};


const completedTask = (id, taskStatus) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("access-token"),
    },
    body: JSON.stringify({ completed: !taskStatus})
  };

  fetch("https://task-management-service.herokuapp.com/tasks/"+id, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if(res._status.code === 8004){
            let taskList = taskStore.taskList;
            
            let filteredTaskList  = taskList.map((task)=> {
              if(task.id === id) {
                return {
                  ...task,
                  completed: !task.completed
                }
              }else{
                return task
              }
            });
            console.log('filteredTaskList--'+filteredTaskList );
           taskStore.updateTask(filteredTaskList);
            let totalTask = taskStore.totalTask;
            let completedTask = taskStore.completedTask ;
            if(taskStatus){
              --completedTask;
            }else{  ++completedTask; }
 
            taskStore.updateTaskCount(totalTask, completedTask );
            toastStore.showToastMessage(res._status.message,'success', Date.now());
      }else{
          toastStore.showToastMessage(res._status.message,'error', Date.now());
      }
    });
};



const handleChange = (e) =>{

  const filteredTaskVal = tasks.filter( task => 
    task.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTasks(filteredTaskVal);
}


  return <div className='container'>
   <SearchBar onClickMethod={handleChange} /> 
  <div className='card'>
  <table className='table'> 
  <tbody>
      { 
       filteredTasks.map(task => (
        <tr key={task.id}>
          <td className='text-left'> 
          <input type='checkbox'  checked={task.completed} onChange={()=>completedTask(task.id, task.completed) }  style={{marginRight:'10px'}}  ></input>
          <span className={task.completed ? 'completedTask' : '' }>{task.title}</span>
          </td>
          <td className='text-right'>
            <div>
              <Icon
                name = "edit"
                tooltip = "Edit"
                theme = "light"
                size = "small"
              />
              <Icon
                name = "delete"
                tooltip = "Delete"
                theme = "light"
                size = "small"
                onClick = {()=>deleteTask(task.id, task.completed) } 
              />
           </div> 
            
          </td>
       </tr>
      )
      )
    }  </tbody></table>
  </div>
  </div>
  };