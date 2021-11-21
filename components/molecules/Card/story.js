import { Card, CardProps } from ".";

export default {
  title: "Molecules/Card",
  component: Card,
}

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Teste default",
};