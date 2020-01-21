import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from './reducers/todoReducer.js';

// components
import TodoList from './components/TodoList';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  // console.log(state);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  }

  return (
    <div>
      <h1>Todoer</h1>
      <TodoList items={state} dispatch={dispatch} />
      <div>
        <input
          type="text"
          name="todoItem"
          value={newTodo}
          onChange={handleChanges}
        />
        <button onClick={() => {
          dispatch({ type: "ADD_TODO", payload: newTodo })
          setNewTodo("");
        }}>Add Todo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
