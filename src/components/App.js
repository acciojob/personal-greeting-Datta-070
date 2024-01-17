
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName]=useState("");

  function handleInput(e){
    setName(e.target.value);
  }
  return (
    <div>
        <input type="text" placeholder="Name" onChange={handleInput}></input>
        <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  )
}

export default App
