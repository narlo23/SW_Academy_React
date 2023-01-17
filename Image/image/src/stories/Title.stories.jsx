import Title from "../components/LoginForm/Title";

export default {
  title: "Component/Title",
  component: Title,
};

export const Default = (args) => {
  return <Title {...args}>Title</Title>;
};
