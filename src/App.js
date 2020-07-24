import React,{useState, useEffect, useCallback} from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList'
const LOCAL_STORAGE_KEY="react-todo-list-todos";

function App(){
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    const storageTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos]);
  function addTodo(todo){
    setTodos([todo,...todos]);
  }
  function toggleComplete(Id){
    setTodos(
      todos.map(todo=>{
        if(todo.Id===Id){
          return{
            ...todo,Completed: !todo.Completed
          };
        }
        return todo;
      })
    );
  }
  function removeTodo(Id) {
    setTodos(todos.filter(todo=>todo.Id!==Id));
  }
  return(
    <div className="App-header" align="center">
      <header >
        <p>@Kshitij2020</p>
        <p>My ToDo List.</p>
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </header>
    </div>
  )
}
export default App;  