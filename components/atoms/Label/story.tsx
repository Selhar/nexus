
import { Story, Meta } from '@storybook/react'
import { Label, labelProps } from '.'

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta

const Template: Story<labelProps> = args => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Teste default",
}
