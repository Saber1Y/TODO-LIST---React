import React, { useState }  from "react";

export default function TodoForm({ mainTodo }) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return
           
        mainTodo(newItem)
        setNewItem('')
    }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item" className="item-li">LISTED TODO'S: </label>
        <input type="text" id="text" value={newItem} onChange={(e) => {
          setNewItem(e.target.value);
    }} />
    </div>
    <button className="btn">Add Todo</button>
   </form>
  )
}


