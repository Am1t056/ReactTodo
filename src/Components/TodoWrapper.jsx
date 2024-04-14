import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();


const TodoWrapper = () => {

    const [todos,setTodos]=useState([])
    

    const addTodo= (todo)=>{
        setTodos([...todos, {id:uuidv4(),task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete= id=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }

    const deleteTodo= id => {
        setTodos(todos.filter(todo=> todo.id !== id))
    }

    const updateTodo= id=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    const updateTask=(task,id)=>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing: !todo.isEditing}: todo))
    }


  return (
    <div className='flex justify-center items-center flex-col gap-3 p-10 bg-slate-800 w-[550px] mx-auto my-5 rounded-md todo-wrapper'>
       
       <h1 className='text-[24px] font-bold text-[#fff]'>Get things Done!</h1>
        <TodoForm addTodo={addTodo}/>

         {todos.map((todo,index)=>(

            todo.isEditing ? (
                <EditTodoForm updateTodo={updateTask} task={todo}/>
            ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
            )   
          ))}

       

    </div>
  )
}

export default TodoWrapper