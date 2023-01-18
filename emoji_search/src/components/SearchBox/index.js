import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  box-sizing: border-box;
  height: 40px;
  font-size: 15px;
`;
const SearchBox = ({ onSearch, placeholder }) => {
  return (
    <Input
      onChange={(e) => onSearch(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
