import React, {Component} from 'react';
import '../globalStyles.css';

class Todo extends Component {
    render() {
        let { task } = this.props
        let lineThrough
        if (task.complete) {
            lineThrough = { textDecoration: 'line-through' }
        } else if (!task.complete) {
            lineThrough = { textDecoration: 'none' }
        }

        return (
            <div 
                style={lineThrough} 
                className='todo'
            >
                <input  
                    type='checkbox' 
                    checked={task.complete} 
                    id={this.props.index} 
                    onChange={()=>{this.props.complete(this.props.index)}}>
                </input>
                <label 
                    htmlFor={this.props.index}
                    >{task.text}
                </label>
            </div>
        )
    }
}

export default Todo