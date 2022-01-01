import { useState, useEffect } from "react";

function Clean() {

    function Hello(){
        useEffect(()=>{
            console.log("created :)")
            return ()=> console.log("destroyed :(")
        },[])
        return (
            <h1>Hello</h1>
        )
    }

    const [showing,setShowing] = useState(false);

    function onClick(){
        setShowing(!showing)
    }

    return(
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default Clean;
