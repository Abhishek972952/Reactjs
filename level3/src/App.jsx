
import { useState } from "react";
import Clock from "./Clock.jsx";

function App() {

  const [color, setColor] = useState("red");

  return (
    <div>

      <h1>Digital Clock Time in React JS</h1>

      <Clock color={color} />

      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>

    </div>
  );
}



export default App
