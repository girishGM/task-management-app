import { decorate, observable, action } from "mobx";
import { persist } from 'mobx-persist';
class TaskStore {
    taskList = [];
    totalTask = 0;
    completedTask = 0;

    updateTask(tasks){
        this.taskList = tasks;
    }

    updateTaskCount(totalTask, completedtask){
        this.totalTask = totalTask;
        this.completedTask = completedtask;
    }

    clearData(){
        this.taskList = [];
        this.totalTask = 0;
        this.completedTask = 0;
    }
}


decorate(TaskStore, {
    taskList: [persist('object'), observable],
    totalTask: [persist, observable],
    completedTask: [persist, observable],
    updateTask: action,
    updateTaskCount: action
})



var taskStore = new TaskStore();
export default taskStore;

