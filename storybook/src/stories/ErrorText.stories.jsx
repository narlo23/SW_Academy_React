import { ErrorText } from "../components";

export default {
  title: "Component/ErrorText",
  component: ErrorText,
};

export const Default = (args) => {
  return <ErrorText {...args}>Error Text</ErrorText>;
};
