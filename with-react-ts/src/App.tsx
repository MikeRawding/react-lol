import TodoList1 from './TodoList1';
import TodoList1ClassBased from './TodoList1ClassBased';
import TodoList2 from './TodoList2';
import TodoList3 from './TodoList3';

function App() {
  return (
    <>
      <h1>My App</h1>
      {/* <TodoList1 /> */}
      {/* <TodoList1ClassBased /> */}
      {/* <TodoList2 initialItems={['Call Dentist', 'Replace Car Battery', 'Learn Over Lunch']}/> */}
      <TodoList3 initialItems={['Call Dentist', 'Replace Car Battery', 'Learn Over Lunch']}/>
    </>
  )
}

export default App;
