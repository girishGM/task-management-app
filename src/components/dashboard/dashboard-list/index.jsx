import React from "react";
import {TaskList} from "./task-list/task-list.component";

const DashboardList = props => {

    return <div className="container">
            <TaskList tasks={props.tasks}/>
            </div>
    
    };
export default DashboardList;