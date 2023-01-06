import { useRef } from "react";
import AutoCounter from "./Components/AutoCounter";
import Input from "./Components/Input";
function App() {
  const inputRef = useRef();
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>

      <AutoCounter />
    </div>
  );
}

export default App;
