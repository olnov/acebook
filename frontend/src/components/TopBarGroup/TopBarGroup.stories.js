import { TopBarGroup } from ".";

export default {
  title: "Components/TopBarGroup",
  component: TopBarGroup,
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
    headerClassName: {},
    block: "https://c.animaapp.com/M2klh9T2/img/block.svg",
  },
};
