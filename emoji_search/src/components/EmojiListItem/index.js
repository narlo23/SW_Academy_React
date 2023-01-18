import styled from "@emotion/styled";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid black;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

const Symbol = styled.div`
  font-size: 24px;
  margin-right: 16px;
`;

const Title = styled.div`
  width: 350px;
`;

const Keywords = styled.div`
  flex: 1;
`;
const EmojiListItem = ({ emoji }) => {
  return (
    <ListItem onClick={() => navigator.clipboard.writeText(emoji.emoji)}>
      <Symbol>{emoji.emoji}</Symbol>
      <Title>{emoji.aliases}</Title>
      <Keywords>{emoji.description}</Keywords>
    </ListItem>
  );
};

export default EmojiListItem;
