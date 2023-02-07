import "./App.css";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import TodoApp from "./components/TodoApp";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("Todo")) || [];
  const [input, setInput] = useState("");
  const [Todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(()=>{
    localStorage.setItem("Todo", JSON.stringify(Todo));
  },[Todo]);
  
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
          <div>
            <Form
              input={input}
              setInput={setInput}
              Todo  ={Todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
            />
          </div>
          <div>
            <TodoApp Todo={Todo}
            setTodo={setTodo} 
            setEditTodo={setEditTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
