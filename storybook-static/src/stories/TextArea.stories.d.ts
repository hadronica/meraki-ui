import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, value, placeholder, size, onChange, error, readonly, customMessageError }: import('../shared/components/TextArea/type').TextAreaProps) => JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Error: Story;
export declare const Disabled: Story;
