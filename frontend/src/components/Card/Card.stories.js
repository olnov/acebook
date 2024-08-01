import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    assetType: {
      options: ["image", "icon"],
      control: { type: "select" },
    },
    variant: {
      options: ["stroke", "default"],
      control: { type: "select" },
    },
    direction: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    body:
      "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. ",
    heading: "Title",
    button: true,
    asset: true,
    assetType: "image",
    variant: "stroke",
    direction: "vertical",
    className: {},
    imageClassName: {},
  },
};
