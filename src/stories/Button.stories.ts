import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../main';
import {Heart} from './assets/PlayButton';

const meta = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      type: "string",
    "options":["primary", "secondary"],
    "control": {
      "type": "select"
    },},
    typeStyle:{
      type: "string",
      options: ["solid", "outline"],
      control: {
        type: "select"
      }
    },
    size:{
      type: "string",
      options: ["small", "medium", "large"],
      control: {
        type: "select"
      }
    },
    fullwidth:{
      type: "string",
      options: ["fullwidth","singular"],
      control: {
        type: "select"
      }
    },
    
    }
  
  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant:'primary',
    label: 'Button',
    typeStyle: "solid"
  },
};
export const PrimaryBorder: Story = {
  args: {
    variant: "primary",
    label: "Button",
    typeStyle: "outline"
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
    typeStyle: "solid"
  },
};
export const SecondaryBorder: Story = {
  args: {
    variant: "secondary",
    typeStyle: "outline",
    label: "Button",
  }
};
export const WidthIconLeft: Story = {
  args: {
    size: "medium",
    label: "Iniciar comunicación",
    fullwidth: 'fullwidth',
    typeStyle: "solid",
    iconLeft: Heart(),
    variant:'primary'
  }
};
export const WidthIconRight: Story = {
  args: {
    size: "medium",
    label: "Iniciar comunicación",
    fullwidth: 'fullwidth',
    typeStyle: "solid",
    iconRight: Heart(),
    variant: 'primary'
  }
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Button',
    typeStyle: "solid"
  },
};
export const Medium: Story = {
  args: {
    variant: 'primary',
    size: "medium",
    label: "Button",
    typeStyle: "solid"
  }
};
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Button',
    typeStyle: "solid"
  },
};
export const Fullwidth: Story = {
  args: {
    variant: 'primary',
    size: "small",
    label: "Button",
    fullwidth: 'fullwidth',
    typeStyle: "solid"
  }
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: "Button",
    typeStyle: "solid",
    disabled: true
  }
};















export const Loading: Story = {
  args: {
    variant: "primary",
    label: "Button",
    typeStyle: "solid",
    isLoading: true
  }
};















