import { Spinner } from "../components";

export default {
  title: "Component/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 24,
      control: { type: "number" },
    },
    color: {
      control: "color",
    },
    loading: { control: "boolean" },
  },
};
export const Default = (args) => {
  return <Spinner {...args} />;
};
