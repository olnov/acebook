import { TextContentHeading } from ".";

export default {
  title: "Components/TextContentHeading",
  component: TextContentHeading,
  argTypes: {
    align: {
      options: ["center", "start"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    subheading: "Subheading",
    heading: "Heading",
    hasSubheading: true,
    align: "center",
    className: {},
  },
};
