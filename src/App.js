import { useState, useEffect } from "react";
import Button from "./Button"
import Input from "./Input"

function App() {
  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("")

  function onClick(){
    setValue(counter+1)
  }

  function onChange(event){
    setKeyword(event.target.value)
  }
  
  useEffect(()=>{
    if(keyword.length >3){
      console.log("search for ", keyword)
    }

  },[keyword])

  return (
    <div>
      <Input value={keyword} onChange={onChange} type = "text" placeholder="Search here"></Input>
      <h1>{counter}</h1>
      <Button onClick={onClick} text="HI"></Button>
      <h1>{keyword}</h1>
    </div>
  );
}

export default App;
