import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input.tsx';

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        // onClick: fn()
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        labelValue: 'text'
    },
};
export const Active: Story = {
    args: {
        labelValue: 'click me)'
    },
};

export const Disabled: Story = {
    args: {
        labelValue: 'text',
        disabled: true
    },
};

export const Error: Story = {
    args: {
        labelValue: 'text',
        error: 'Error!'
    },
};

export const PasswordMode: Story = {
    args: {
        labelValue: 'text',
        inputPassword: true,
    },
};

export const SearchMode: Story = {
    args: {
        labelValue: 'text',
        inputSearch: true,
    },
};