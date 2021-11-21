import React from 'react';
import { Label } from './index';

export default {
  component: Label,
  title: 'Components/Label',
}

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Teste default",
};