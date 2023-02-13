import './TodoForm.css'
import React, {useState} from 'react'
export default function TodoForm(props) {
    const [enteredTask, setTask] = useState('');
    const clickHandler = (e) => {
        setTask(e.target.value)
    
    }
    const submitHandler = (e) => {
        e.preventDefault();
       
        const tasks ={
            task: enteredTask
    }

        props.onPassingData(tasks);
        setTask('')
    }
    return (
        <div className='task'>
        <form onSubmit={submitHandler}>
          <label>Todo</label>
          <input value={enteredTask} onChange={clickHandler}/>
          <button>Create</button>
        </form>
        </div>
    )
}