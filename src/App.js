import './App.css';
import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoItem from './components/todoItems';
import Form from './Form';
import Nav from './components/Nav';
import Invoice from './components/Invoices';

function App() {
  const [displayedTodos, setDisplayedTodos] = useState([]);

  // use useMemo Hook when there is a rerender and an expensive function is rerun; 
  // and there is no change caused by the function;
  let memo = useMemo(() => {
    console.log("useMemo is called")
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(result => setDisplayedTodos(result))
    // }, []);
  },
    // ["memoized data" /// can be a state]);
    []);


  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Todo App</h1>} />
        <Route
        path="invoices/:val"
        element={<Invoice />}
      />
        <Route path='/todos' element={
          <>
            <Form setDisplayedTodos={setDisplayedTodos} />
            <ul className='ul'>{displayedTodos.map(todoObject =>
              <>
                <TodoItem
                  todoObject={todoObject}
                  setDisplayedTodos={setDisplayedTodos}
                  key={todoObject.id} />
              </>
            )}
            </ul>
            <Route path='/:id' element={<h1>Nested</h1>} />
          </>} />

      </Routes>
    </div >
  );
}

export default App;
