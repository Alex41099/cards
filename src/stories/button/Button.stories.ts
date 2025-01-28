import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {
    disabled: false,
    // onClick: fn()
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    disabled: false,
    children: 'text',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'text',
  },
};

export const Active: Story = {
  args: {
    children: 'click me)',
  },
};

export const Exit: Story = {
  args: {
    children: 'text',
    exitIcon: true
  },
};

export const Secondary: Story = {
  args: {
    children: 'text',
    variant: 'secondary'
  },
};
