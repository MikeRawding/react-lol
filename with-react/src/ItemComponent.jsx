import { useState } from 'react';

const doneTaskStyles = { 
  textDecoration: 'line-through',
  opacity: 0.5
}

function ItemComponent(props) {
  const [done, setDone] = useState(false)

  const completeTask = () => {
    setDone(true)
  }

  return (
    <li style={done ? doneTaskStyles : {}}>
      <span>{props.children}</span>
      {!done && <button onClick={completeTask}>✓</button>}
    </li>
  )
}

export default ItemComponent
