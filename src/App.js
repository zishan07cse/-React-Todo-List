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

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label>
          Enter todo name:
          <input type='text' value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
        </label>
        <input type="submit" value="Add Todo" />
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
