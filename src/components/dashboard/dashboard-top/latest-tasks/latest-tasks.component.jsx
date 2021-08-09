import React ,{useEffect, useState} from "react";

import "./latest-tasks.style.css";

export const LatestTasks =(props) => {
  const [latestTasks, setLatestTasks] = useState([]);
  useEffect(() => {
    const latestTasks = props.tasks.slice(0, 3);
    setLatestTasks(latestTasks);
  }, [props.tasks]);

  return (
    <div className="card">
      <h5>Latest created tasks</h5>
      <ul>
        {latestTasks.length && latestTasks.map((task) => (
          <li key={task.id} className={task.completed ? "completedTask" : ""}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

