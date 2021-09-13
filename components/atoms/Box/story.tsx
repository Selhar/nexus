import { Story, Meta } from '@storybook/react'
import { Box, boxProps } from '.'

export default {
  title: 'Atoms/Box',
  component: Box
} as Meta

const Template: Story<boxProps> = (args) => <Box {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <span>oi</span>
}
