import { Story, Meta } from "@storybook/react";
import { Card, CardProps } from ".";

export default {
  title: "Molecules/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Teste default",
};
