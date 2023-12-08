import React from "react";

function DeleteTodo({ id, deleteTodo }) {
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteTodo;
