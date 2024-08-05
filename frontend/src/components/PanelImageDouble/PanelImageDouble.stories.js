import { PanelImageDouble } from ".";

export default {
  title: "Components/PanelImageDouble",
  component: PanelImageDouble,
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
  },
};
