import TodoForm from './TodoForm'

export default function NewTodo(props) {
    const todoHandler = (todos) => {
    
        const taskData = {
            ...todos
        }
    
        props.onAddMore(taskData)
    }
    return(
        <div>
    <TodoForm onPassingData={todoHandler}/>
        </div>
    )
}