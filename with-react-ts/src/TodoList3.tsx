// @ts-nocheck

import { useState } from 'react';
import ItemComponent from './ItemComponent';

function TodoList3(props) {
  const [items, setItems] =  useState(props.initialItems)
  const [inputValue, setInputValue] = useState('')
  const addItem = () => {
    setItems(items => [...items, inputValue])
  }

  return (
    <div>
      <h1>Todo List</h1>
      <h2>Add Items</h2>
      <span>
        <label htmlFor="input">New Item</label>
        <input id="input" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button onClick={addItem}>Add</button>
      </span>
      <h2>Current Items</h2>
      <ul>
        {items.map(item => <ItemComponent>{item}</ItemComponent>)}
      </ul>
    </div>
  )
}

export default TodoList3
