import type { Meta, StoryObj } from '@storybook/react';
import  {TextField}  from '../main';
import {HeartBlack} from './assets/PlayButton';

const meta = {
  title: 'Form/Textfield',
  component: TextField,
  
  parameters: {
  layout: 'centered',


  },
  
  tags: ['autodocs'],

  
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text"
  },
};
export const Small: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text",
    size: "small"
  },
};
export const Medium: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text",
    size: "medium"
  },
};
export const Large: Story = {
  args: {
    value:'',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text",
    size: "large"
  },
};
export const WithText: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text"
  },
};
export const WithNumber: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "number"
  },
};
export const WithOnlyLetters: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "onlyLetters"
  },
};
export const Password: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    password: true
  },
};
export const WithCustom: Story = {
  args: {
    value:"luis.morales@usil.pe",
    pattern: "^[a-zA-Z0-9]+\\.[a-zA-Z0-9]+@usil.pe",
    placeholder: "Ingrese su correo USIL",
    label: "Correo USIL",
    type: "custom",
    iconLeft: HeartBlack(),
    customMessageError: "El correo debe ser de usil"
  },
  
};
export const WithIcon: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text",
    iconLeft: HeartBlack()
  },
};
export const WithIconRight: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text",
    iconRight: HeartBlack()
  },
};

export const WithError: Story = {
  args: {
    value:'Luis Morales',
    placeholder: 'Ingresa tu nombre y apellido',
    label: 'Nombres Completos',
    type: "text",
    error:'Este campo es requerido',
    iconLeft: HeartBlack()
  },
  
};















export const Disabled: Story = {
  args: {
    value: "",
    placeholder: "Ingresa tu nombre y apellido",
    label: "Nombres Completos",
    type: "text",
    size: "small",
    readonly: true
  }
};















