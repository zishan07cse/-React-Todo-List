import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// You don't need to import ReactDOM here

function App() {
  const [todos, setTodos] = useState([]); // Initialize todos as an empty array
  const [todoName, setTodoName] = useState(''); // Initialize todoName as an empty string

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoName.trim() !== '') {
      setTodos([...todos, todoName]); // Add the new todo to the todos array
      setTodoName(''); // Clear the input field after adding todo
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='todo'>
      <h1 className='App-header mt-100'>Todo List</h1>
      <div className='form'>
        <form onSubmit={handleAddTodo}>
          <label>
             Enter todo name:<br/>
            <input type='text' className='mt-10' value={todoName} onChange={(e) => setTodoName(e.target.value)}/><br/>
          </label>
          <input type="submit" value="Add Todo" className='mt-10'/>
        </form>
        </div>
        <div className='todo-list'>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className='todo-item'>
             <span className='item'>{capitalizeFirstLetter(todo)}</span> 
              <button className='delete-button' onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
