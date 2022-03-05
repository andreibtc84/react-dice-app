import "./App.css";
import { Dice } from "./components/Dice";
import { useState } from "react";
import { RollLog } from "./components/RollLog";

function App() {
  const [rollLog, setRollLog] = useState(["Not rolled yet"]);
  const [rollsNumber, setRollCount] = useState(0);
  return (
    <div className="App">
      <h1>Dice App</h1>
      <Dice
        rollLog={rollLog}
        setRollLog={setRollLog}
        side={"1d6"}
        max={6}
        setRollCount={setRollCount}
        rollsNumber={rollsNumber}
      />
      <Dice
        rollLog={rollLog}
        setRollLog={setRollLog}
        side={"1d10"}
        max={10}
        setRollCount={setRollCount}
        rollsNumber={rollsNumber}
      />
      <Dice
        rollLog={rollLog}
        setRollLog={setRollLog}
        side={"1d20"}
        max={20}
        setRollCount={setRollCount}
        rollsNumber={rollsNumber}
      />
      <h1>You Rolled:</h1>
      <RollLog rollLog={rollLog} />
    </div>
  );
}

export default App;
