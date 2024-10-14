import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/slices/counter/counterSlice";

function App() {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <button onClick={() => dispatch(decrement())}>- 1</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+ 1</button>
      </div>
    </>
  );
}

export default App;
