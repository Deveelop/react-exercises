import Todo  from './Todo';
import './App.css';

function App() {
  const Dummy_Todos = [
    'Learn React',
    'Practice React',
    'Profit from React'
  ];
  return (
    <div>
     <ul>
      Todo: output todos
      <Todo text={Dummy_Todos} />
     </ul>
    </div>
  );
}

export default App;
