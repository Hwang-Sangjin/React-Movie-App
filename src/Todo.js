import { useState, useEffect } from "react";

function Clean() {
    const [todo,setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const onChange = (event) =>{
        return setTodo(event.target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault()
        if(todo === "") return
        
        setTodos((prevArr)=>[todo,...prevArr])
        setTodo("")
    }
    console.log(todos)

    return(
        <div>
        <h1>My To Dos {todos.length}</h1>
        <form onSubmit={onSubmit}>
            <input
                value = {todo}
                onChange={onChange}
                type="string"
                placeholder="Write your to do"
            >

            </input>
            <button>
                Add To Do
            </button>
        </form>
        <hr/>
        <ul>
            {todos.map((item,index)=>{
                return(
                    <li key={index}>{item}</li>
                )
            })}
        </ul>
        
        </div>
        
    )
}

export default Clean;
