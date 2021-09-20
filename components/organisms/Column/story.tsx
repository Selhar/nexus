import { Story, Meta } from "@storybook/react";
import { Column, ColumnProps } from ".";

export default {
  title: "Organisms/Column",
  component: Column,
} as Meta;

const Template: Story<ColumnProps> = (args) => <Column {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Teste default",
  cards: ["first card", "second card"],
};
