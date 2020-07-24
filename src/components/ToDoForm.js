import React,{useState} from 'react';
import * as uuid from 'uuid/v4';
function ToDoForm({addTodo}){
    const [todo,setTodo]=useState({
        Id:"",
        Task:"",
        Completed: false
    });

    function handleTaskInputChange(e){
        setTodo({...todo,Task:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        if(todo.Task.trim()){
            addTodo({...todo, Id:uuid()});
            setTodo({...todo,Task:""});
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Your New Task"
              name="Task" type="text" value={todo.Task}
              onChange={handleTaskInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default ToDoForm;