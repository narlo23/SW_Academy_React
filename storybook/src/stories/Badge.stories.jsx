import Badge from "../components/Badge";
import styled from "@emotion/styled";

const Div = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: blueviolet;
  color: white;
  text-align: center;
  line-height: 40px;
`;
export default {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    count: { defaultValue: 10, control: "number" },
    maxCount: { defaultValue: 100, control: "number" },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    showZero: { defaultValue: false, control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <Badge {...args}>
      <Div>알림</Div>
    </Badge>
  );
};

export const Dot = () => {
  return (
    <Badge dot>
      <Div>알림</Div>
    </Badge>
  );
};
