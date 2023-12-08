import React, { useState } from "react";
import '/App.scss';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import DeleteTodo from "./DeleteTodo";
// import ToggleTodo from "../ToggleTodo";



export default function App() {
  const [todos, setTodos] = useState([]);

  function AddTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }   
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
    <TodoForm mainTodo={AddTodo} />
    <h1>Added Todo's: </h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
   </>
  )
}
