// import logo from './logo.svg';
import './App.css';
import { actions, useStore } from './store';

function App() {
  
  const [state, dispatch] = useStore();

  const {todos, todoInput} = state;

  const handleAdd = () => {
    console.log('reducer', todoInput);
    dispatch(actions.addTodo(todoInput));
  };

  console.log(state);

  return (
    <div className="App"> 
      <input
        type="text"
        value={todoInput}
        placeholder="Enter to do..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <button
        onClick={handleAdd}
      >
        Add
      </button>
      <ul>
        {
          todos.map((td, idx) => {
            return <li key={idx}>
              {td}
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
