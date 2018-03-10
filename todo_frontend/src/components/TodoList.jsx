import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
  
    render() {
        let taskJSX = this.props.tasks.map((task, i) => {
            return (
                <Todo 
                    task={task} 
                    index={i} 
                    complete={this.props.complete} 
                    key={task._id} 
                />
            )
        })
        return (
            <div>
                {taskJSX}
            </div>
        )
    }
}

export default TodoList