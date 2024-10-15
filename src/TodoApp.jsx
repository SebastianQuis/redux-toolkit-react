import React, { useState } from "react";
import {
  useGetTodoByIdQuery,
  useGetTodosQuery,
} from "./store/slices/todos/api/todosApi";

export const TodoApp = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetTodoByIdQuery(page);
  // const { data = [], isLoading } = useGetTodosQuery();

  console.log(data);

  return (
    <>
      <h1>Todo APP</h1>
      <hr />

      <pre>isLoading: {isLoading ? "true" : "false"}</pre>

      <button
        disabled={isLoading}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next todo - {isLoading ? "Loading..." : "Ready"}
      </button>

      <pre>{JSON.stringify(data)}</pre>

      {/* <ul>
        {data.map((item) => (
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "start",
            }}
            key={item.id}
          >
            <strong style={{ width: "120px" }}>
              {item.completed ? "DONE" : "PENDING"}
            </strong>
            : {item.title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
