import "/App.scss";

export default function App() {
  return (
    <>
  <form className="new-item-form">
    <div className="form-row">
    <label htmlFor="item">New Item</label>
    <input type="text"  id="item" />
    </div>
    <button className="btn">Add Todo</button>
  </form>
  <h1 className="header">Added Todo's <span>:</span> </h1>
  </>
  )
}
