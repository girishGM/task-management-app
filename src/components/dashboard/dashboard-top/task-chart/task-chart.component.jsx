import React, { useState } from "react";
import "./task-chart.style.css";
import { PieChart } from "react-minimal-pie-chart";


export const TaskChart = (props) => {

  let data=[
    {
      color: "#C13C37",
      title: "",
      value: props.taskResult.totalTasks,
      },
      {
        color: "#E38627",
        title: "completed task",
        value: props.taskResult.completedTasks,
        },
    ];

return(
  <div className="card">
  <div className="chart-container">
            <PieChart
              animate
              animationDuration={500}
              animationEasing="ease-out"
              center={[100, 120]}
              data={data}
              lengthAngle={360}
              lineWidth={15}
              paddingAngle={0}
              radius={75}
              rounded
              startAngle={0}
              viewBoxSize={[250, 250]}
              label={(data) => data.dataEntry.title}
              labelPosition={125}
              labelStyle={{
                fontSize: "10px",
                fontColor: "FFFFFA",
                fontWeight: "500",
              }}
            />
          </div>
      </div>
  );
}

export default TaskChart;
