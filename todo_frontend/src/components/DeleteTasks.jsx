import React, { Component } from 'react'
import '../globalStyles.css'

class DeleteTasks extends Component {
    updateTasks = ()=>{
        let updatedTasks = this.props.tasks.filter((task)=>{
            return !task.complete
        })
        this.props.deleteTasks(updatedTasks)
    }

    render() {
        return (
            <div className = 'deleteBtn'>
                <a onClick={this.updateTasks}>
                    <i className="far fa-trash-alt"></i>
                </a>
            </div>
        )
    }
}

export default DeleteTasks