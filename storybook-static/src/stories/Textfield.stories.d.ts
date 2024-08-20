import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, value, placeholder, iconLeft, size, iconRight, type, password, onChange, error, readonly, pattern, customMessageError, customClass }: import('../shared/components/TextField/type').TextFieldProps) => JSX.Element;
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
export declare const Large: Story;
export declare const WithText: Story;
export declare const WithNumber: Story;
export declare const WithOnlyLetters: Story;
export declare const Password: Story;
export declare const WithCustom: Story;
export declare const WithIcon: Story;
export declare const WithIconRight: Story;
export declare const WithError: Story;
export declare const Disabled: Story;
