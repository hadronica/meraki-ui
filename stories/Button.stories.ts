import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../src/components/Button';
import {Heart} from './assets/PlayButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Form/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    typeStyle: "solid"
  },
};
export const PrimaryBorder: Story = {
  args: {
    primary: true,
    label: "Button",
    typeStyle: "outline"
  }
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    typeStyle: "solid"
  },
};
export const SecondaryBorder: Story = {
  args: {
    label: "Button",
    typeStyle: "outline"
  }
};
export const WidthIconLeft: Story = {
  args: {
    size: "medium",
    label: "Iniciar comunicación",
    fullwidth: true,
    typeStyle: "solid",
    iconLeft: Heart(),
    primary: true
  }
};
export const WidthIconRight: Story = {
  args: {
    size: "medium",
    label: "Iniciar comunicación",
    fullwidth: true,
    typeStyle: "solid",
    iconRight: Heart(),
    primary: false
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    typeStyle: "solid"
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
    typeStyle: "solid"
  }
};
export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    typeStyle: "solid"
  },
};
export const Fullwidth: Story = {
  args: {
    size: "small",
    label: "Button",
    fullwidth: true,
    typeStyle: "solid"
  }
};















export const Disabled: Story = {
  args: {
    primary: true,
    label: "Button",
    typeStyle: "solid",
    disabled: true
  }
};















