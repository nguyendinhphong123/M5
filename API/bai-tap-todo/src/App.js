import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Gọi API để lấy danh sách todo
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Gọi API để thêm mới todo
    axios.post('https://jsonplaceholder.typicode.com/todos', { title: newTodo , compoleted: false})
      .then(response => {
        // Hiển thị alert thông báo status của response
        alert(`Status: ${response.status}`);
        // Cập nhật danh sách todo sau khi thêm mới
        setTodos([...todos, response.data]);
        setNewTodo('');
      })
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={newTodo} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;