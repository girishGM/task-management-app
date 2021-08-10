import React from "react";
import "./task-chart.style.css";
import { AgChartsReact } from 'ag-charts-react'
import Skeleton from 'react-loading-skeleton';

export const TaskChart = (props) => {

let options = {};

var myTheme = {
  baseTheme: 'ag-pastel',
  palette: {
      fills: [
          '#f4f4f6',
          '#0076C5',
      ],
      strokes: ['black']
  },
  overrides: {
          pie: {
          title: {
              fontSize: 20
          },
          series: {
              column: {
                  label: {
                      enabled: true,
                      color: 'black'
                  }
              }
          }
      }
  }
};
if(props.taskResult){
 const dataPointTotal = props.taskResult.totalTasks - props.taskResult.completedTasks;
 const dataPointCompleted = props.taskResult.completedTasks;

 options =
  {
    theme: myTheme,
    data: [
        {
          label: 'Remaining Task',
          value: dataPointTotal,
        },
        {
          label: 'Completed Task',
          value: dataPointCompleted,
        },
      ],
      series: [
        {
          type: 'pie',
          angleKey: 'value',
          labelKey: 'label',
        },
      ],
      legend: {
        enabled: false
    }
  };
}

return(
  <>{
    props.taskResult.totalTasks !== 0 ?
      <div className="card-top">
      <div className="chart-container" >         
          <AgChartsReact options={options} />
      </div>
      </div>
      : <div className="card-top"><Skeleton count={4} /></div>
}</>
);

}

export default TaskChart;
