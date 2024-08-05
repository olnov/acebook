import { Avatar } from ".";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    type: {
      options: ["image", "initial"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    shape: {
      options: ["circle", "square"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    initials: "F",
    type: "image",
    size: "large",
    shape: "circle",
    className: {},
  },
};
