import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 8px 6px;
  width: 100%;

  &:hover {
    background-color: #111;
  }

  &:active {
    background-color: #222;
  }

  &:disabled {
    background-color: #888;
  }
`;

export default Button;
