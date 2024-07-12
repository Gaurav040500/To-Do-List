import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Sidebar from './components/sideBar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';



const taskTypes = ["personal", "work", "freelance", "sports"];

function TodoListContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, type) => {
    const newEntry = { type, text, editing: false };
    setTodos([newEntry, ...todos]);
  };

  const removeTodo = (index) => {
    const filteredItem = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(filteredItem);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], text: newText };
    setTodos(updatedTodos);
  };

  const updateTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], editing: false };
    setTodos(updatedTodos);
  };

  const toggleEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], editing: !updatedTodos[index].editing };
    setTodos(updatedTodos);
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", }}>
      <Sidebar taskTypes={taskTypes} selectTaskType={(type) => addTodo('', type)} />

      <div className="container" style={{ width: "70%" }}>
        <Header />

        <TodoInput addTodo={addTodo} taskTypes={taskTypes} />

        <TodoList
          todos={todos}
          editTodo={toggleEdit}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
          taskTypes={taskTypes}
        />
      </div>
    </div>
  );
}

export default TodoListContainer;
