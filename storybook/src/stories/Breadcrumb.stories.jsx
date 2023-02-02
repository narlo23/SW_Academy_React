import { Breadcrumb } from "../components";

export default {
  title: "Component/Breadcrumb",
  component: Breadcrumb,
};

export const Default = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Level 1</Breadcrumb.Item>
      <Breadcrumb.Item>Level 2</Breadcrumb.Item>
    </Breadcrumb>
  );
};
