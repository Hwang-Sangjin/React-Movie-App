import { useState, useEffect } from "react";

function Clean() {
    const[todo, setToDo] = useState("")
    const [todos, setToDos] = useState([])

    function onChange(event){
        setToDo(event.target.value)
    }

    function onSubmit(event){
        event.preventDefault()
        if(todo ==="") return
        setToDos(currentArray =>[ todo, ...currentArray])
        setToDo("")
    }
    console.log(todos)

    return(
        <div>
            <h1>My To Dos {todos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={todo} type="text" placeholder="Write your to do"></input>
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {todos.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Clean;
