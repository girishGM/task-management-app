import React, { useState, useEffect} from 'react';
import Icon from "react-crud-icons";
import './task-list.style.css';
import {SearchBar} from '../search-bar/search-bar.component';


export const TaskList = props => {

const [tasks,setTasks] = useState(props.tasks)  ;
const [filteredTasks,setFilteredTasks] = useState(props.tasks)  ;
const [taskResult,setTaskResult] = useState(props.taskResult)  ;
const [searchField,setSearchField] = useState('')  ;


useEffect(() => {
  setTasks(props.tasks)
}, [props.tasks])


useEffect(() => {
  setFilteredTasks(props.tasks)
}, [props.tasks])



const deleteTask = (id) => {
  fetch('https://task-management-service.herokuapp.com/tasks/'+id, { method: 'DELETE' }).then(response => response.json())
  .then(res => alert(JSON.stringify(res)));

  //elements.splice(id,1);
  //setState([...elements]);
}

const handleChange = (e) =>{
  setSearchField(e.target.value);
  setFilteredTasks([...tasks]);
  const filteredTaskVal = filteredTasks.filter( task => 
    task.title.toLowerCase().includes(searchField.toLowerCase())
    );

    setFilteredTasks([...filteredTaskVal]);
}


  return <div className='container'>
   <SearchBar onClickMethod={handleChange} /> 
  <div className='card'>
  <table className='table'> 
      { 
       filteredTasks.map(task => (
        <tr key={task.id}>
          <td className='text-left'> 
          <input type='checkbox' style={{marginRight:'10px'}}  ></input>
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
                onClick = {()=>deleteTask(task.id) } 
              />
           </div> 
            
          </td>
       </tr>
      )
      )
    }  </table>
  </div>
  </div>
  };