import React from "react";
import {DashboardTop} from "./dashboard/dashboard-top/index";
import {DashboardBottom} from "./dashboard/dashboard-bottom/index";

export const DashboardTop = props =>{
    return <><DashboardTop tasks={tasks} taskResult={taskResult}/>

            <DashboardBottom tasks={tasks} taskResult={taskResult}/>
    </>
    
    };


