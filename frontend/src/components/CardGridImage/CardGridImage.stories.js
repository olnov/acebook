import { CardGridImage } from ".";

export default {
  title: "Components/CardGridImage",
  component: CardGridImage,
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
    imageClassName: {},
    imageClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
    imageClassName1: {},
    imageClassName2: {},
  },
};
