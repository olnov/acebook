import { HomePageChange } from ".";

export default {
  title: "Components/HomePageChange",
  component: HomePageChange,
  argTypes: {
    property1: {
      options: ["logged-in", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "logged-in",
    className: {},
  },
};
