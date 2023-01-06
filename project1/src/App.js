import { useState, useEffect } from "react";
import Counter from "./Components/Counter";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Clicked ${count} times.`);
  }, [count]);

  useEffect(() => {
    console.log("Component Loaded");
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    //컴포넌트가 제거될 때 실행
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div>You clicked {count} times</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div style={{ height: 10000 }}></div>
    </div>
  );
}
export default App;
