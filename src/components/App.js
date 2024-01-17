
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName]=useState("");

  function handleInput(e){
    setName(e.target.value);
  }
  return (
    <div>
        <p>Enter your Name:</p>
        <input type="text" placeholder="Name" onChange={handleInput}></input>
        <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  )
}

export default App
