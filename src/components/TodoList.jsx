// TodoList.js
import React from 'react';

const TodoList = ({ todos, editTodo, updateTodo, removeTodo }) => {
  const getColorDot = (type) => {
    switch (type) {
      case 0:
        return '🔴';
      case 1:
        return '🔵';
      case 2:
        return '🟡';
      case 3:
        return '🟣';
      default:
        return '';
    }
  };

  return (
    <>
      {todos.map((item, index) => (
        <div key={index} className="todoItem">
          {item.editing ? (
            <input
              type="text"
              className="editInputField"
              value={item.text}
              onChange={(e) => editTodo(index, e.target.value)}
            />
          ) : (
            <span>{getColorDot(item.type)} {item.text}</span>
          )}
          <div>
            {item.editing ? (
              <button className="updateButton" onClick={() => updateTodo(index)}>Update</button>
            ) : (
              <>
                <button className="editButton" onClick={() => editTodo(index)}>Edit</button>
                <button className="deleteButton" onClick={() => removeTodo(index)}>Delete</button>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
