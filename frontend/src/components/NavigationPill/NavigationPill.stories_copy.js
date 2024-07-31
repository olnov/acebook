import { NavigationPill } from ".";

export default {
  title: "Components/NavigationPill",
  component: NavigationPill,
  argTypes: {
    state: {
      options: ["hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Link",
    state: "hover",
    className: {},
  },
};
