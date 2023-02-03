export default function Todo (props) {
return(
    <>
    {
        props.text.map((todos) =>
        <li>{todos}</li>
        )
    }
    </>
)
}