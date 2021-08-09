import React from 'react';

import './latest-tasks.style.css';


export const LatestTasks = props => (

  <div className='card'> 
    <h5>Latest created tasks</h5>
      <ul>
      { 
          props.tasks.map(task => (
            
            <li key={task.id} className={task.completed ? 'completedTask' : '' }>{task.title}</li>
          )
        )
      }   
    </ul>
    </div>
  
);