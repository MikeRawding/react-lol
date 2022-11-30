function TodoList2(props) {
  return (
    <div>
      <h1>Todo List</h1>
      <h2>Add Items</h2>
      <span>
        <label htmlFor="input">New Item</label>
        <input id="input" />
        <button >Add</button>
      </span>
      <h2>Current Items</h2>
      <ul>
        {props.initialItems.map(itemName => <li>{itemName}</li>)}
      </ul>
    </div>
  )
}

export default TodoList2;
