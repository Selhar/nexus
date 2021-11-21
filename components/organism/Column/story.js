import { Column } from ".";

export default {
  title: "Organisms/Column",
  component: Column,
}

const Template = (args) => <Column {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Teste default",
  cards: ["first card", "second card"],
};