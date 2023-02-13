import React, {useState} from 'react';
import TodoLists from './TodoLists';
import './App.css';
import NewTodo from './NewTodo';


const Dummy_Todos = [{
  task:'Learn React'
}

];

function App() {
  const [enteredTodo, setEnteredTodos] = useState(Dummy_Todos)
 
  const highestHandler = (taskData) => {

   setEnteredTodos(prevData => {
    return [taskData, ...prevData]
   })
  }
  return (
    <div>
     <NewTodo onAddMore={highestHandler}/>
   <TodoLists text={enteredTodo}/>
    </div>
  );
}

export default App;
