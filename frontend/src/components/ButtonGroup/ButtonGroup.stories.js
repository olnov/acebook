import { ButtonGroup } from ".";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    align: {
      options: ["start", "center", "justify", "stack", "end"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    buttonEnd: true,
    buttonStart: true,
    align: "start",
    className: {},
    buttonClassName: {},
    divClassName: {},
    text: "Button",
  },
};
