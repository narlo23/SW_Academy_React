import styled from "@emotion/styled";

const Div = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ffb02e;
  margin-bottom: 30px;
  display: flex;
`;
const Heading = styled.h1`
  font-size: 32px;
  text-align: center;
  width: 100%;
  height: 100%;
`;
const Header = () => {
  return (
    <Div>
      <Heading>Emoji Search</Heading>
    </Div>
  );
};
export default Header;
