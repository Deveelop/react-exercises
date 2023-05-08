import React,{useReducer} from "react";

const reducer = (state, action) => {
    if(action.type === 'fetchout'){
        return{
            name: state.name,
            age: state.age++
        }
    }

}
export default function Counter(){
    const [state, depatch] = useReducer(reducer, {name: 'Vicson',age: 27})
const clickDetails = () =>{
    depatch({type: 'fetchout'})
}
    return(
        <>
        <button onClick={clickDetails}>Add age</button>
        <p>you {state.name} are {state.age}</p>
        </>
    )
}

