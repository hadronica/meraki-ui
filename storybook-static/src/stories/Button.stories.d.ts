import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ variant, size, label, loading, customClass, fullwidth, typeStyle, iconRight, iconLeft, disabled, ...props }: import('../shared/components/Button/type').ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    args: {
        onClick: import('@vitest/spy').Mock<[event: import('../../node_modules/react').MouseEvent<HTMLButtonElement, MouseEvent>], void>;
    };
    argTypes: {
        variant: {
            type: "string";
            options: string[];
            control: {
                type: "select";
            };
        };
        typeStyle: {
            type: "string";
            options: string[];
            control: {
                type: "select";
            };
        };
        size: {
            type: "string";
            options: string[];
            control: {
                type: "select";
            };
        };
        fullwidth: {
            type: "string";
            options: string[];
            control: {
                type: "select";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const PrimaryBorder: Story;
export declare const Secondary: Story;
export declare const SecondaryBorder: Story;
export declare const WidthIconLeft: Story;
export declare const WidthIconRight: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const Fullwidth: Story;
export declare const Disabled: Story;
