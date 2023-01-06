import { useState } from "react";
import Board from "./Components/Board";
import Pagination from "./Components/Pagination";

function App() {
  const [page, setPage] = useState(0);
  const articles = new Array(100).fill().map((_, i) => ({
    id: i,
    title: `${i}번 게시물`,
  }));

  const limit = 6;
  const offset = page * limit;
  return (
    <div>
      <Pagination
        defaultPage={0}
        limit={limit}
        total={articles.length}
        onChange={setPage}
      />
      <Board articles={articles.slice(offset, offset + limit)} />
    </div>
  );
}
export default App;
