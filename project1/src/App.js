import { useState } from "react";
import ShowSum from "./Components/ShowSum";

function App() {
  const [label, setLabel] = useState("Result");
  return (
    <div>
      <button onClick={() => setLabel(label + ":")}>Change Label</button>
      <ShowSum label={label} n={10000000000} />
    </div>
  );
}
export default App;
