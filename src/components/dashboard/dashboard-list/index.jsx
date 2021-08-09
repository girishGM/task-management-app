import React from "react";
import {TaskList} from "./task-list/task-list.component";

export const DashboardList = props => {

    return <div className="container">
            <TaskList tasks={props.tasks}/>
            </div>
    
    };
