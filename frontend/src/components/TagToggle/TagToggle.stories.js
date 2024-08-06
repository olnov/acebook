import { TagToggle } from ".";

export default {
  title: "Components/TagToggle",
  component: TagToggle,
  argTypes: {
    state: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    showIcon: true,
    state: "off",
    className: {},
  },
};
