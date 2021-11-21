import { CardList } from ".";

export default {
  title: "Molecules/CardList",
  component: CardList,
}

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {
  texts: ["Card 1", "Card 2"],
};