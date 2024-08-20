import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ checked, onClick, children }: import('../shared/components/Checkbox/type').CheckboxProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Active: Story;
