/*
  요구사항
  1. 이모지 리스트를 보여준다.
  2. 검색을 통해 필터링한다.
  3. 이모지를 클릭하면 복사한다.
*/

import { useState } from "react";
import EmojiList from "./components/EmojiList";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import emojiJson from "./data/emoji.json";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <div>
      <Header />
      <SearchBox
        onSearch={setKeyword}
        placeholder="검색할 이모지 이름 또는 키워드를 입력해주세요."
      />
      <EmojiList emojis={emojiJson} keyword={keyword} />
    </div>
  );
}

export default App;
