import React, {useState, useEffect} from 'react'
import './App.css'
import From from './Components/From'
import TodoList from './Components/TodoList'

const App = () => {
  
  //state stafe
  const [inputText, setInputText] =useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] =useState([]);
  //use effect
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() =>{
   filterHandler();
  }, [todos, status]);

  const filterHandler = () =>{
    switch(status) {
      case "completed" :
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted' :
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
          setFilteredTodos(todos);
          break;

    }
  }
  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify('todos'))
  };
  const getLocalTodos =() =>{
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
    let todoLocal = JSON.parse(localStorage.getItem('todos'))
    setTodos(todoLocal);
  };
}

  return (
    <div className='App'>
      <header>
        <h1>Ed,s Todo List</h1>
      </header>
     <From 
     todos={ todos}
     setTodos ={setTodos}
     inputText= {inputText}
     setInputText={setInputText}
     status ={status}
     setStatus={setStatus}
    
     
     />
     <TodoList 
     filteredTodos={filteredTodos}
     setTodos={setTodos} 
     todos={todos}/>
    </div>
  )
  }
export default App;