import { CardGridContent } from ".";

export default {
  title: "Components/CardGridContent",
  component: CardGridContent,
  argTypes: {
    platform: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    platform: "desktop",
    className: {},
    textContentHeadingHeading: "Heading",
    cardImageClassName: {},
    cardImageClassNameOverride: {},
    cardDivClassName: {},
  },
};
