import React, { useRef } from "react";

import classes from "./NewTodo.module.css";
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputTodoRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = inputTodoRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an Error
      return;
    } else {
      props.onAddTodo(enteredText);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputTodoRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
