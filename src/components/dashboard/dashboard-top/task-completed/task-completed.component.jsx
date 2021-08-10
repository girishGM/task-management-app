import React from 'react';
import './task-completed.style.css';
import Skeleton from 'react-loading-skeleton';

export const TaskCompleted = props => { 
  return(<>{
    props.taskResult.totalTasks !== 0 ?
      <div className='card-top'> 
        <h4>Tasks Completed </h4>

        <p><span style={{fontSize:'45px'}}>{props.taskResult.completedTasks}</span>
        <span style={{fontSize:'20px'}}>/ {props.taskResult.totalTasks} </span> </p>
  </div>
  : <div className='card-top'> <Skeleton count='4'/> </div>
  } 
  </>
  )
};

export default TaskCompleted;