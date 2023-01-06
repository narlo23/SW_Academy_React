import { useState } from "react";
import Board from "./Components/Board";
function App() {
  const [visible, setVisible] = useState(false);

  const articles = [
    {
      id: 1,
      title: "안녕",
      author: "narlo",
    },
    {
      id: 2,
      title: "ㅎㅇ",
      author: "narlo",
    },
    {
      id: 3,
      title: "hi",
      author: "narlo",
    },
    {
      id: 4,
      title: "hello",
      author: "narlo",
    },
  ];
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible ? (
        <h1>논리곱 연산자를 통해 쉽게 JSX 렌더링 여부를 결정할 수 있습니다.</h1>
      ) : null}
      {visible ? (
        <Board articles={articles} />
      ) : (
        <p>게시판을 보려면 Toggle 버튼을 클릭해주세요.</p>
      )}
    </div>
  );
}

export default App;
