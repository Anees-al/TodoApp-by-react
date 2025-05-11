
import React, { useState } from 'react'
import './todo.css'
import {  MdOutlineClose } from "react-icons/md";
import {motion} from 'framer-motion'

const Todos = () => {
    const[todos,setTodos]=useState([]);
    const[input,setInput]=useState("")



    const handlesubmit=()=>{
        setTodos((todos)=>
            todos.concat({text:input,id:Math.random().toString()})
        )
        setInput("")
    }
const removetodo = (id) => {
  setTodos((todos) => todos.filter((t) => t.id !== id));
};

  return (
    <>
    <motion.div className="container" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5,delay:1}}>
      <h3 style={{color:'white',marginLeft:'20px'}}>Enter your todo here</h3>
       <input type="text"  value={input} placeholder='enter the todo here' onChange={(e)=>setInput(e.target.value)} className='textinput'/>
       <button onClick={handlesubmit} className='submit-btn'>submit</button>


       <ul>
        {todos.map(({text,id})=>{
            return( 
            
               <li key={id}>
                <span className='text'>{text}</span>
                <MdOutlineClose  onClick={()=>removetodo(id)} style={{cursor:'pointer',color:'white'}}/>
               </li>
            )
            
        })
        
        }
       </ul>
 
   </motion.div>
        </>
  )
}

export default Todos
