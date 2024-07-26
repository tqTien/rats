/* eslint-disable react/react-in-jsx-scope */
import TButton from '.';

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: 'tset/TButton',
  component: TButton,
} as ComponentMeta<typeof TButton>;

const Template: ComponentStory<typeof TButton> = (args) => <TButton {...args} />;

export const Square = Template.bind({});
Square.args = {
  label: 'nothing',
  shape: 'square2',
  onclick: action("clicked")
};

export const Circle = Template.bind({});
Circle.args = {
  label: 'nothing - circle',
  shape: 'circle'
};
