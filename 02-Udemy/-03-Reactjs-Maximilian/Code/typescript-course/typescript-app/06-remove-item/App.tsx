import React, { useState } from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Todo from "./models/todo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeHandler = (itemId: string) => {
    setTodos((prevState) => {
      return prevState.filter((item) => item.id !== itemId);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={onAddHandler} />
      <Todos items={todos} onRemove={removeHandler} />
    </div>
  );
};

export default App;
