import React from "react";

function ToggleTodo({ id, completed, toggleTodo }) {
  const handleToggle = () => {
    toggleTodo(id, !completed);
  };

  return (
    <div>
      <input type="checkbox" checked={completed} onChange={handleToggle} />
    </div>
  );
}

export default ToggleTodo;
