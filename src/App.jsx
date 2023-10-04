import { useState } from "react";
import "/App.scss";
import  Form  from "/Form.jsx"
import TodoList from "./TodoList";

export default function App() {
  const [newTodo, setNewTodo] = useState([]);

  function addTodo(title) { 
    setNewTodo(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed:
        false },
      ]
    });
  }

  function toggleTodo(id, completed) {
    setNewTodo(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed }
        }

        return todo; 
      })
    })
  }

  function deleteTodo(id) {
    setNewItem(currentTodos => {
      return currentTodos.filter(todo => todo.id === id)
    })
  }

  return (
    <>
     <Form onSubmit={addTodo} />
      <h1 className="header">Added Todo's <span>:</span></h1>
     <TodoList todos={todos}/>
  </>
  )
}
