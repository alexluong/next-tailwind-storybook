import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Greeting } from "./Greeting";

export default {
  title: "Components/Greeting",
  component: Greeting,
} as ComponentMeta<typeof Greeting>;

const Template: ComponentStory<typeof Greeting> = (args) => (
  <Greeting {...args} />
);

export const Example = Template.bind({});
Example.args = {
  children: "Hi, World!",
};
