import { Story, Meta } from '@storybook/react'
import { EditableLabel, EditableLabelProps } from '.'

export default {
  title: 'Molecules/EditableLabel',
  component: EditableLabel,
} as Meta

const Template: Story<EditableLabelProps> = args => <EditableLabel {...args} />

export const Default = Template.bind({})
Default.args = {
  initialText: "Teste default",
}
