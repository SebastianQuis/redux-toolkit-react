import React from "react";
import { useGetTodosQuery } from "./store/slices/todos/api/todosApi";

export const TodoApp = () => {
  const { data = [], isLoading } = useGetTodosQuery();

  console.log(data);

  return (
    <>
      <h1>Todo APP</h1>
      <hr />

      <pre>isLoading: {isLoading ? "true" : "false"}</pre>

      <button>Next todo</button>

      <ul></ul>
      {data.map((item) => (
        <li key={item.id}>
          <strong>{item.completed ? "DONE - " : "PENDING - "}</strong>
          {item.title}
        </li>
      ))}
    </>
  );
};
