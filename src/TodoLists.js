

export default function TodoLists(props) {
    return(
        <div>
        <ul>
        Todo: output todos
        {
        props.text.map((todos) =>
        <li>{todos.task}</li>
        )
    }
       </ul>
       </div>
    )
}