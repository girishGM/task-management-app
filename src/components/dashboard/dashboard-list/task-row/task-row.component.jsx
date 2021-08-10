import React from 'react';

import './task-row.style.css';


export const TaskRow = props => {

  return <tr key={props.key}>
           <td> {props.task.title}</td>
           <td>{ props.task.title }</td>
         </tr>  

};
