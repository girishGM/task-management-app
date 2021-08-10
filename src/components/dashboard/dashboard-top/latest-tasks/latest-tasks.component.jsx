import React ,{useEffect, useState} from "react";
import Skeleton from 'react-loading-skeleton';
import "./latest-tasks.style.css";


export const LatestTasks =(props) => {
  const [latestTasks, setLatestTasks] = useState([]);
  useEffect(() => {
    if(props.tasks){
    const latestTasks = props.tasks.slice(0, 3);
    setLatestTasks(latestTasks);
    }
  }, [props.tasks]);


  return (
      <>{ latestTasks.length ?
        <div className="card-top">
          <h5>Latest created tasks</h5>
          <ul>
            {
              latestTasks.map((task) => (
              <li key={task.id} className={task.completed ? "completedTask" : ""}>
                {task.title}
              </li>
            ))
            }
          </ul>
        </div>
        : <div className="card-top"> <Skeleton count='4'/></div>}</>
    );
}

