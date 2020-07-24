import React from 'react';

function ToDo({todo,toggleComplete,removeTodo}){
    function handleCheckboxClick(){
        toggleComplete(todo.Id);
    }
    function handleRemoveClick() {
        removeTodo(todo.Id)
        
    }
    return(
        <div style={{display:"flex"}}  justify-content="center">
        <input type="checkbox" onClick={handleCheckboxClick} />
        <li 
        style={{
            color:"white",
            textDecoration: todo.Completed? "line-through":null
        }}>
            {todo.Task}
        </li>
        <button onClick={handleRemoveClick}>X</button>
        </div>
    )
}
export default ToDo;