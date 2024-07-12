// TodoInput.js
import React, { useState } from 'react';

const TodoInput = ({ addTodo, taskTypes }) => {
  const [text, setText] = useState('');
  const [selectedTaskType, setSelectedTaskType] = useState(null);

  const btnHandler = () => {
    if (!text || selectedTaskType === null) return;
    addTodo(text, selectedTaskType);
    setText('');
    setSelectedTaskType(null);
  };

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
    <div style={{ position: "relative" }}>
      <div className='inputContainer' style={{ position: "absolute", left: "0", top: "5%", paddingRight: "1rem", margin: "2px 5px" }}>
        {taskTypes.map((t, i) =>
          <button key={i} onClick={() => setSelectedTaskType(i)} style={{ background: "none", border: "none", padding: 0 }} >{getColorDot(i)}</button>
        )}
      </div>
      <input
        style={{ paddingLeft: "5rem", lineHeight: "2rem", width: "60%", borderRadius: "20px" }}
        type="text"
        className="inputField"
        placeholder="Task To Do"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="addButton" onClick={btnHandler} style={{ padding: "8px", borderRadius: "11px" }}>Add</button>
    </div>
  );
};

export default TodoInput;
