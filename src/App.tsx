import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import rootReducer, { RootState } from './reducers';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const store = createStore(rootReducer);


function App() {
   
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter);
  const todos: string[] = useSelector((state: RootState) => state.todoReducer);

  const [todoValue, setTodoValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO',text: todoValue});
    setTodoValue('');
  }

 
  return (
    <>
      <ul>
        {todos.map((todo, index) => <li>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type='text' value={todoValue} onChange={handleChange}/>
        <input type='submit'/>
      </form>
    </>
  );
}

export default App;
