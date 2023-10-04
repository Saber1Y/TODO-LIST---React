import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ newTodo }) {
  return (
    <ul className="list">
    {newTodo.map((todo) => {
      return (
       <TodoItem id={todo.id}
        completed={todo.completed}
         title={todo.title} 
         key={todo.id} />
      )
    })}
</ul>
  )
}
