import type { Meta, StoryObj } from '@storybook/react';
import  {TextArea}  from '../main';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/TextArea',
  component: TextArea,
  
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  layout: 'centered',


  },
  
  tags: ['autodocs'],

  
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    value:'',
    placeholder: 'Detalle la acción que realizó',
    label: 'Describe brevemente la acción',
    size: "large"
  },
};
export const Small: Story = {
  args: {
    value: "",
    placeholder: "Detalle la acción que realizó",
    label: "Describe brevemente la acción",
    size: "small"
  }
};
export const Medium: Story = {
  args: {
    value: "",
    placeholder: "Detalle la acción que realizó",
    label: "Describe brevemente la acción",
    size: "medium"
  }
};



export const Error: Story = {
  args: {
    value: "",
    placeholder: "Detalle la acción que realizó",
    label: "Describe brevemente la acción",
    error: "Complete este campo"
  }
};

export const Disabled: Story = {
  args: {
    value: "",
    placeholder: "Detalle la acción que realizó",
    label: "Describe brevemente la acción",
    readonly: true
  }
};

