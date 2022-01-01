import { useState } from "react";
import Button from "./Button"

function App() {
  const [counter,setValue] = useState(0);

  const onClick = () => setValue((prev)=>prev+1)
  console.log("call api")
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={onClick} text="HI"></Button>
    </div>
  );
}

export default App;
