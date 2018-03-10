import React, { Component } from 'react';
import '../globalStyles.css'

class AddTask extends Component {
    submit = (e) => {
        e.preventDefault()
        let text = this.newText.value
        this.newText.value = ''
        if(text===''){
            alert(`You didn't enter a task!`)
        }else{
            this.props.addTask(text)
        }
    }

    render() {
        return (
            <form className='addTaskForm'>
                <label htmlFor='newTask'>New Task: </label>
                <input 
                    type='text' 
                    id='newTask' 
                    ref={(input) => { this.newText = input }}>
                </input>
                <button 
                    type='submit' 
                    onClick={this.submit}
                    >Add
                </button>
            </form>
        )
    }
}

export default AddTask