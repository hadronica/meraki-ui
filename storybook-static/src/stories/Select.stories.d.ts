import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ options, value, onChange, label, readonly, name, error }: import('../shared/components/Select/type').SelectProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Disabled: Story;
