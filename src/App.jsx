import { useState } from "react";
import "/App.scss";
import  Form  from "/Form.jsx"

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
      <ul className="list">
        {newTodo.map((todo) => {
          return (
            <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
          );
        })}
    </ul>
  </>
  )
}
