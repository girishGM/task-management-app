import React, { Component } from 'react';
import { DashboardTop } from './components/dashboard/dashboard-top/index'; 
import { DashboardList } from './components/dashboard/dashboard-list/index';
import { Header } from './components/header/header.component';
import './App.css';
import { SearchBox } from './components/shared/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      tasks: [ ],
      taskResult:'',
      searchField:''
    };

    // this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount(){
    fetch('https://task-management-service.herokuapp.com/tasks').then(response => response.json())
    .then(res => this.setState({ tasks: res.result }));

    fetch('https://task-management-service.herokuapp.com/dashboard').then(response => response.json())
    .then(res => this.setState({ taskResult: res.result }));
    

  }


 handleChange = (e) =>{
      this.setState({ searchField: e.target.value}, () => console.log(this.state));
 }




  render() {

    const { tasks, taskResult, searchField } = this.state;

    const filteredTasks = tasks.filter( task => 
      task.title.toLowerCase().includes(searchField.toLowerCase())
      );

      return(
          <div className="App">
          <Header/>
            <DashboardTop tasks={filteredTasks} taskResult={taskResult}/>
            <DashboardList tasks={filteredTasks} taskResult={taskResult}/>
          </div>
      );
  }
}
export default App;


