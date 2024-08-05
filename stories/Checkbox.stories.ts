import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Checkbox  from '../src/components/Checkbox';
import { TextLegal } from './assets/PlayButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  layout: 'centered',


  },
  
  tags: ['autodocs'],

  
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;



      


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    checked: false,
    children: TextLegal(),
    onClick: (e:any)=>console.log(e)
  },
};

export const Active: Story = {
  args: {
    checked: true,
    children: TextLegal(),
    onClick: (e:any)=>console.log(e)
  },
};






























