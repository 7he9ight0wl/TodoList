"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [MainTask, setMainTask] = useState([]);

const submitHandler = (e) => {
  e.preventDefault();
  setMainTask([...MainTask,{title,desc}]);
  settitle("");
  setdesc("");
} 
const deleteHandler =(i) =>{
  let copytask = [...MainTask]
  copytask.splice(i,1)  
  setMainTask(copytask)
  }
let renderTask = <h2>No Task Available</h2>;
if(MainTask.length>0){
  renderTask = MainTask.map((t,i)=> {
    return (
    <li key={i} className=' flex items-centre justify-between mb-5'>
  <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'> {t.title} </h5>
      <p className='text-lg font-medium'> {t.desc} </p>
    </div>
    <button onClick={()=> {
      deleteHandler(i)
      }}
      className='bg-red-400 text-white font-bold rounded px-4 py-2'>Delete</button>
    </li>


    );
});
}
  return (
    <>
       <h1 className='bg-black  text-5xl font-bold text-white p-5 text-center '>My Todolist</h1>
<form on onSubmit={submitHandler}>

  <input type="text" className= '  text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
    placeholder="Enter task here"
    value={title}
    onChange={(e)=> {
      settitle(e.target.value)
    }}
  />
  <input type="text" className= '  text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
    placeholder="Enter Description here"
    value={desc}
    onChange={(e)=> {
      setdesc(e.target.value)
    }}
  />
<button className=' bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
</form>
<hr/>
<div className='p-8 bg-slate-200'>
<ul>
{renderTask}
</ul>
</div>
    
    </>
  )
}

export default page
