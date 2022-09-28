import React from "react";

const NewTodo = () => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
