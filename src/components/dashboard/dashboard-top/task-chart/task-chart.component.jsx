import React from 'react';
import './task-chart.style.css';



export const TaskChart = props => (
  <div className='card'> 
       
        <p>
 
          {props.taskResult.completedTasks} /  {props.taskResult.totalTasks}  </p>


  </div>

);
