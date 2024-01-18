import React, { useState } from 'react'

const data=[
    {
        name:"Heena",
        id:1
    },
    {
        name:"Chirag",
        id:2
    },
    {
        name:"Komal",
        id:3
    }
]
function Todo1() {
    const [user,setUser]=useState(data)
    const [input1,setInput1]=useState("")
    const [edit,setEdit]=useState("")
    const [edit1,setEdit1]=useState("")

    const handleClick=()=>{
        const add=[...user,{id:user.length+1,name:input1}]
        setUser(add)
        setInput1('')
    }

    const handleDelete=(id)=>{
        const Delete = user.filter((heena) => (heena.id !== id))
        setUser(Delete)
    }

    const handleEdit=(id,name)=>{
        setEdit(id)
        setEdit1(name)
    }
    const handleSave=(id)=>{
        const updatedData=user.map((item)=>
        item.id==id ? {...item,name:edit1}:item)
        setUser(updatedData)
        setEdit(null)
    }
  return (
    <div>
      <h1>Heena Tank Toodo List</h1>
      <input type='text' value={input1} onChange={(e)=>{setInput1(e.target.value)}}/>
      <button onClick={handleClick}>Add new(+)</button>
      {user.map((item)=>(
        <ul key={item.id}>
            <li>
                {edit == item.id ?
                (
                    <div>
                        <input type='text' value={edit1} onChange={(e)=>{setEdit1(e.target.value)}}/>
                        <button onClick={()=>handleSave(item.id)}>Save</button>
                    </div>
                ):(
                    <div>
                        {item.name} 
                        <button onClick={()=>handleEdit(item.id,item.name)}>Edit</button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                )    
            }
            </li>
        </ul>
      ))}
    </div>
  )
}

export default Todo1
