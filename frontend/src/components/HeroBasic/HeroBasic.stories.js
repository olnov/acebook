import { HeroBasic } from ".";

export default {
  title: "Components/HeroBasic",
  component: HeroBasic,
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
    textContentTitleTitle: "Title",
    textContentTitleSubtitle: "Subtitle",
  },
};
