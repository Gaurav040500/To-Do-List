// Sidebar.js
import React from 'react';

const Sidebar = ({ taskTypes, selectTaskType }) => {
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
    <div className="sidebar" style={{ width: "30%", background: "#A18AFF", borderRadius: "10px", }}>
      <div style={{ padding: "1rem" }}>
        {taskTypes.map((t, i) => (
          <button key={i} onClick={() => selectTaskType(i)} style={{ background: "none", border: "none", padding: 0, margin: "2px 5px" }}>
            {getColorDot(i)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
