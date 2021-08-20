import { Story, Meta } from '@storybook/react'
import { EditableInput, editableInputProps } from '.'

export default {
  title: 'Molecules/EditableInput',
  component: EditableInput,
} as Meta

const Template: Story<editableInputProps> = args => <EditableInput {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Teste default",
}
