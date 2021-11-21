import { EditableLabel } from ".";

export default {
  title: "Molecules/EditableLabel",
  component: EditableLabel,
}

const Template = (args) => (
  <EditableLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialText: "Teste default",
};