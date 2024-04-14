import React, { useState } from 'react'

const EditTodoForm = ({updateTodo, task}) => {
  
  const [value,setValue]=useState(task.task)
   
  const handleSubmit=  (e)=>{
    e.preventDefault();

    updateTodo(value, task.id);

    setValue("")

  }
   
  return (
    <form className='Todo-form' onSubmit={handleSubmit}>
       <input type="text" className='todo-input' value={value} placeholder="Update Task" onChange={(e)=> setValue(e.target.value)} />
       <button type='submit' className='todo-btn'>Update Task</button>

    </form>
  )
}

export default EditTodoForm