import React from 'react'

const TodoList = ({ todos,  }) => {
  return (
    <ul className="list">
    {todos.length === 0 && <li>Please Add todos</li>}
    {todos.map(todo => {
      return (
    <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} 
        onChange={(e) => {toggleTodo(todo.id, e.target.
            checked);
        }}/>
        {todo.title}
      </label>
        <button className="btn btn-danger" 
         onClick={deleteTodo}>Delete</button> 
    </li>
      )
    })}
   </ul>
  )
}

export default TodoList
