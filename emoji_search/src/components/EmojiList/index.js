import styled from "@emotion/styled";
import EmojiListItem from "../EmojiListItem";

const Container = styled.ul`
  width: 100%;
  padding: 0;
`;

const EmojiList = ({ emojis, keyword }) => {
  return (
    <Container>
      {emojis
        .filter(
          (emoji) =>
            emoji.aliases.indexOf(keyword) >= 0 ||
            emoji.description.indexOf(keyword) >= 0
        )
        .slice(0, 10)
        .map((emoji) => (
          <EmojiListItem key={emoji.aliases} emoji={emoji} />
        ))}
    </Container>
  );
};
export default EmojiList;
