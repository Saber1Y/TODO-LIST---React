import React, { useState }  from "react";
import '/App.scss'


export default function App() {

   const [newItem, setNewItem] = useState("");
   const [todos, setTodos] = useState([]);

   function handleSubmit(e) {
    e.preventDefault();


    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title: newItem, completed:
           false },
      ]
    })
  }


  return (
    <>
   <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
        <input type="text" id="text" value={newItem} onChange={(e) => {
          setNewItem(e.target.value);
        }} />
    </div>
    <button className="btn">Add Todo</button>
   </form>
   <h1>Added Todo's: </h1>
   <ul className="list">
    {todos.map(todo => {
      return (
    <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} />
        {todo.title}
      </label>
        <button className="btn btn-danger">Delete</button>
    </li>
      )
    })}
   </ul>
   </>
  )
}