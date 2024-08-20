import type { Meta, StoryObj } from '@storybook/react';
import  {DatePicker}  from '../main';
import {HeartBlack} from './assets/PlayButton';

const meta = {
  title: 'Form/DatePicker',
  component: DatePicker,
  
  parameters: {
  layout: 'centered',


  },
  
  tags: ['autodocs'],

  
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
  },
};
export const Small: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    size: "small"
  },
};
export const Medium: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    size: "medium"
  },
};
export const Large: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    size: "large"
  },
};
export const WithText: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
  },
};
export const WithNumber: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
  },
};
export const WithOnlyLetters: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
  },
};

export const WithIcon: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    iconLeft: HeartBlack()
  },
};
export const WithIconRight: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    iconRight: HeartBlack()
  },
};

export const WithError: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    error:'Este campo es requerido',
    iconLeft: HeartBlack()
  },
  
};


export const Disabled: Story = {
  args: {
    value: "",
    placeholder: "Ingresa tu nombre y apellido",
    label: "Nombres Completos",
    size: "small",
    readonly: true
  }
};















