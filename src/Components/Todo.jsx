import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({task, toggleComplete, deleteTodo, updateTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={()=>toggleComplete(task.id)} className={`${task.completed ? "completed " : ""}`}>{task.task}</p>
        <div>
              <FontAwesomeIcon icon={faPenToSquare} onClick={()=>updateTodo(task.id)}/>
              <FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/>

        </div>
    </div>
  )
}

export default Todo
