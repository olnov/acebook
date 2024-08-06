import { PaginationPage } from ".";

export default {
  title: "Components/PaginationPage",
  component: PaginationPage,
  argTypes: {
    stateProp: {
      options: ["current", "hover", "current-hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    number: "1",
    stateProp: "current",
    className: {},
  },
};
