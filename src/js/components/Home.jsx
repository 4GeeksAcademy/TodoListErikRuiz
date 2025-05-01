import React, { useState } from 'react';
import '/workspaces/TodoListErikRuiz/src/styles/index.css';
import ThemeToggle from './tema';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-app">
      <h1>Lista de tareas a realizar Erik Ruiz</h1>
      <div className="todo-box">
        <input
          type="text"
          className="todo-input"
          placeholder="¿Qué tienes que hacer?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        {tasks.length === 0 ? (
          <div className="todo-empty">No hay tareas, añade alguna</div>
        ) : (
          tasks.map((task, index) => (
            <div className="todo-item" key={index}>
              <span>{task}</span>
              <span className="delete-btn" onClick={() => removeTask(index)}>🗑</span>
            </div>
          ))
        )}
        <div className="todo-footer">{tasks.length} tarea{tasks.length !== 1 && 's'} pendiente{tasks.length !== 1 && 's'}</div>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Home;