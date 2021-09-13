import { Story, Meta } from '@storybook/react'
import { CardList, CardListProps } from '.'

export default {
  title: 'Molecules/CardList',
  component: CardList
} as Meta

const Template: Story<CardListProps> = (args) => <CardList {...args} />

export const Default = Template.bind({})
Default.args = {
  texts: ['Card 1', 'Card 2']
}
