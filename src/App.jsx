import { useState } from "react";
import "/App.scss";

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [newTodo, setNewTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewTodo(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title:newItem, completed:
        false },
      ]
    });

    setNewItem('');
  }

  function toggleTodo(id, completed) {
    setNewTodo(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed }
        }
      })
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text"  id="item" />
        </div>
        <button className="btn">Add Todo</button>
      </form>
      <h1 className="header">Added Todo's <span>:</span></h1>
      <ul className="list">
        {newTodo.map((todo) => {
          return (
            <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button className="btn btn-danger">Delete</button>
          </li>
          );
        })}
    </ul>
  </>
  )
}
