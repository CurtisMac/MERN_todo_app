import React, { Component } from 'react'
import '../globalStyles.css'
import TodoList from './TodoList'
import AddTask from './AddTask'
import DeleteTasks from './DeleteTasks'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  addTask = (newTask) => {
    axios.post('http://localhost:8080/create', {
      todo: newTask,
    })
      .then((response) => {
        let updatedTasks = this.state.tasks
        updatedTasks.push(response.data)
        this.setState({
          tasks: updatedTasks
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  complete = (index) => {
    let updatedTasks = this.state.tasks
    axios.put('http://localhost:8080/update', {
      id: this.state.tasks[index]._id,
      bool: !this.state.tasks[index].complete
    })
      .then(() => {
        updatedTasks[index].complete = !updatedTasks[index].complete
        this.setState({
          tasks: updatedTasks
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  deleteTasks = (updatedTasks) => {
    axios.delete('http://localhost:8080/del_complete', {
      confirm: true,
    })
      .then(() => {
        this.setState({
          tasks: updatedTasks
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  componentDidMount() {
    axios.get('http://localhost:8080/read')
      .then((response) => {
        this.setState({
          tasks: response.data
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Time to <em>DO</em> some things!</h1>
        </header>
        <TodoList 
          tasks={this.state.tasks} 
          complete={this.complete}
        />
        <AddTask addTask={this.addTask} />
        <DeleteTasks 
          deleteTasks={this.deleteTasks} 
          tasks={this.state.tasks} 
        />
      </div>
    );
  }
}

export default App;
