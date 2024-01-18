import React, { useState } from 'react'

const data = [
    {
        fruit: "orange",
        id: 1
    },
    {
        fruit: "mango",
        id: 2
    },
    {
        fruit: "watermelon",
        id: 3
    }
]
function Todo() {
    const [user, setUser] = useState(data)
    const [input2, setInput2] = useState("")
    const [edit, setEdit] = useState("")
    const[edit1,setEdit1]=useState("")

    const handleClick = () => {
        const add = [...user, { id: user.length + 1, fruit: input2 }]
        setUser(add)
        setInput2('')
    }

    const handleDelete = (id) => {
        console.log(id)
        const Delete = user.filter((heena) => (heena.id !== id))
        setUser(Delete)
    }

    const handleEdit = (id,fruit) => {
        setEdit(id)
        setEdit1(fruit)
    }
    // const handleSave=(id)=>{
    //     const updatedData=user.map((item)=>item.id==id?{...user,fruit:edit1} : item)
    //     setUser(updatedData)
    //     setEdit(null)
    // }

    const handleSave = (id) => {
        const updatedData = user.map((item) =>
          item.id === id ? { ...item, fruit: edit1 } : item
        );
        setUser(updatedData);
        setEdit(null);
      };
      
    return (
        <div>
            <input type='text' value={input2} onChange={(e) => { setInput2(e.target.value) }}></input>
            <button onClick={handleClick}>Add button(+)</button>
            {user.map((item) => (
                <ul>
                    <li>
                        {edit == item.id ?
                            (<div>
                                <input type='text' value={edit1} onChange={(e)=>{setEdit1(e.target.value)}} />
                                <button onClick={()=>handleSave(item.id)}>Save</button>
                            </div>) : 
                            (<div>{item.fruit}
                                <button onClick={() => handleEdit(item.id,item.fruit)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>)}
                    </li>

                </ul>
            ))}
        </div>
    )
}

export default Todo
