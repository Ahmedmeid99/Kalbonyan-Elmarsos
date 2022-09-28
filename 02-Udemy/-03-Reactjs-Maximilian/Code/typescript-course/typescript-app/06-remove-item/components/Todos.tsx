import React from "react";

import Todo from "../models/todo";
import TodoItem from "../components/TodoItem";

import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={props.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
