import React from 'react';

import './task-completed.style.css';

export const TaskCompleted = props => (

  <div className='card'> 
        <h5>Tasks Completed </h5>

        <p><span style={{fontSize:'50px'}}>{props.taskResult.completedTasks}</span>
        <span style={{fontSize:'20px'}}>/ {props.taskResult.totalTasks} </span> </p>

  </div>

);
