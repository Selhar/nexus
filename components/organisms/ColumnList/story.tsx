import { Story, Meta } from "@storybook/react";
import { ColumnList, ColumnListProps } from ".";

export default {
  title: "Organisms/ColumnList",
  component: ColumnList,
} as Meta;

const Template: Story<ColumnListProps> = (args) => <ColumnList {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      title: "Coluna 1",
      cards: ["Card 1", "Card 2"],
    },
    {
      title: "Coluna 2",
      cards: ["Card 3", "Card 4"],
    },
  ],
};
