import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";

function App() {
  // const [count, setCount] = useState(0);

  const { counter } = useSelector((state) => state.counter);
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
        <p>{counter}</p>
        <button onClick={() => dispatch(increment())}>+ 1</button>
      </div>
      <button onClick={() => dispatch(incrementByAmount(5))}>+ 5</button>
    </>
  );
}

export default App;
