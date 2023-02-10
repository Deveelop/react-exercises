import React, {useState} from 'react'; 
import Todo  from './Todo';
import './App.css';

function App() {
  const Dummy_Todos = [
    'Learn React',
    'Practice React',
    'Profit from React'
  ];
  const [enteredValue, setEnteredValue] = useState('')
  const clickHandler= (e)=>{
    setEnteredValue(e.target.value)
  }
  const values = {
    value: enteredValue
  }
  console.log(values);
  return (
    <div>
      <div className='task'>
      <form>
        <label>Todo</label>
        <input onChange={clickHandler}/>
        <button>Create</button>
      </form>
      </div>
     <ul>
      Todo: output todos
      <Todo text={Dummy_Todos} />
     </ul>
    </div>
  );
}

export default App;
