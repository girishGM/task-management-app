import React from "react";
import {TaskCompleted} from "./task-completed/task-completed.component";
import {TaskChart} from "./task-chart/task-chart.component";
import {LatestTasks} from './latest-tasks/latest-tasks.component';

const DashboardTop = props => {

    return <div className="container">
                <div className="row">
                <div className="col-md-4">
                        <TaskCompleted taskResult={props.taskResult}/>
                </div>
                <div className="col-md-4">
                        <LatestTasks tasks={props.tasks}/>
                </div>
                <div className="col-md-4">
                        <TaskChart taskResult={props.taskResult}/>
                </div>
                </div>
                </div> 
    
    };

export default DashboardTop;    
