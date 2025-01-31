import type { Meta, StoryObj } from '@storybook/react';

import { TabSwitcher } from './TabSwitcher.tsx';
import {fn} from "@storybook/test";

const meta = {
    title: 'Example/TabSwitcher',
    component: TabSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    args: {
        values: ['Switcher'],
    },
} satisfies Meta<typeof TabSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};

export const Active: Story = {
    args: {
        values: ['Click me)']
    },
};

export const Disable: Story = {
    args: {
        disabled: true
    },
};


export const Switcher: Story = {
    args: {
        values: ['Switcher', 'Switcher2', 'Switcher3' ],
        defaultValue: 1,
        getValue: fn()
    },
};
