import { HeroActions } from ".";

export default {
  title: "Components/HeroActions",
  component: HeroActions,
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
    buttonGroupText: "Button",
  },
};
