import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  Select  from '../src/components/Select';
import {HeartBlack} from './assets/PlayButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Select',
  component: Select,
  
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  layout: 'centered',


  },
  
  tags: ['autodocs'],

  
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;
const options = [
  {
    value: "Voluntariado",
    label: "Voluntariado"
  },
  {
    value: "Donaciones",
    label: "Donaciones"
  },
  {
    value: "Ayuda a personas mayores",
    label: "Ayuda a personas mayores"
  }
]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    options: options,
    label: '¿Qué tipo de acción hiciste?',
    onChange: (e:any)=>console.log(e),
    value:{label: "Voluntariado", value: "Voluntariado"},
    name: "typeAction"
  },
};


export const Error: Story = {
  args: {
    options: [{
      "value": "Voluntariado",
      "label": "Voluntariado"
    }, {
      "value": "Donaciones",
      "label": "Donaciones"
    }, {
      "value": "Ayuda a personas mayores",
      "label": "Ayuda a personas mayores"
    }],

    label: "¿Qué tipo de acción hiciste?",

    value: {
      "label": "Voluntariado",
      "value": "Voluntariado"
    },

    name: "typeAction",
    error: "Completa este campo"
  }
};


export const Disabled: Story = {
  args: {
    options: [{
      "value": "Voluntariado",
      "label": "Voluntariado"
    }, {
      "value": "Donaciones",
      "label": "Donaciones"
    }, {
      "value": "Ayuda a personas mayores",
      "label": "Ayuda a personas mayores"
    }],

    label: "¿Qué tipo de acción hiciste?",

    value: {
      "label": "Voluntariado",
      "value": "Voluntariado"
    },

    name: "typeAction",
    readonly: true
  }
};


