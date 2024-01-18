import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';
import Todo1 from './Todo1';
import Todolist2 from './Todolist2';
import Assignment from './React-Assessment';

// const data=[{
//   fruit:"orange",
//   id:1,
// },
// {
//   fruit:"mango",
//   id:2
// },
// {
//   fruit:"watermelon",
//   id:3
// }
// ]
function App() {
//   const[user,setUser]=useState(data)
//   const[input1,setInput1]=useState("")

//   const handleClick=()=>{
//     const add=[...user,{id:user.length+1,fruit:input1}]
//     setUser(add)
//   }
  return (
    <div className="App">
     {/* <input type='text' value={input1} onChange={(e)=>{setInput1(e.target.value)}}></input>
     <button onClick={handleClick}>Add new(+)</button>
     {user.map((item)=>(
      <ul>
        <li>{item.fruit}</li>
      </ul>
     ))} */}

     {/* <Todo/> */}
{/* 
     <Todo1/> */}
      {/* <Todolist2/> */}
      <Assignment/>
    </div>
  );
}

export default App;
