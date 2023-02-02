import { Divider } from "../components";

export default {
  title: "Component/Divider",
  component: Divider,
};

export const Horizontal = () => {
  return (
    <>
      <p style={{ display: "inline-block" }}>위</p>
      <Divider type="horizontal" />
      <p style={{ display: "inline-block" }}>아래</p>
    </>
  );
};

export const Vertical = () => {
  return (
    <>
      <p style={{ display: "inline-block" }}>왼쪽</p>
      <Divider type="vertical" />
      <p style={{ display: "inline-block" }}>오른쪽</p>
    </>
  );
};
