import { TextContentTitle } from ".";

export default {
  title: "Components/TextContentTitle",
  component: TextContentTitle,
  argTypes: {
    align: {
      options: ["center", "start"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: "Title",
    hasSubtitle: true,
    subtitle: "Subtitle",
    align: "center",
    className: {},
    divClassName: {},
  },
};
