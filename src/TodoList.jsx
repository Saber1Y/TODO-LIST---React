import React from 'react'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
    {todos.length === 0 && <li>Please Add todos</li>}
    {todos.map(todo => {
      return (
        <li key={todo.id}>
          <label>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              // className='todo-title'
              onChange={(e) => toggleTodo(todo.id, e.target.checked)}
            />
            <div className='li--input_title'>
            {todo.title}
            </div>
          </label>
          <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button> 
        </li>
      )
    })}
   </ul>
  )
}
