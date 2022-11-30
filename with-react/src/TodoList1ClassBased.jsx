import React from 'react';

export default class TodoList1ClassBased extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <h3>Add Items</h3>
        <span>
          <label htmlFor="input">New Item</label>
          <input id="input" />
          <button>Add</button>
        </span>
        <h3>Current Items</h3>
        <ul>
          <li>Laundry</li>
        </ul>
      </div>
    )
  }
}