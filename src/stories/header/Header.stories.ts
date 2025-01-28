import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Example/Header',
    component: Header,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
        // onClick: fn()
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        isLogged: false,
        userHref: 'https://www.google.com/search?q=image&oq=ima&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgoIARAuGLEDGIAEMgYIAhBFGDkyBwgDEAAYgAQyBggEEEUYPTIGCAUQRRg8MgYIBhBFGEEyBggHEEUYPNIBBzg4MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8',
        userName: 'Ivan',
        userPhoto: 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg'
    },
};

export const Secondary: Story = {
    args: {
        isLogged: true,
        userHref: 'https://www.google.com/search?q=image&oq=ima&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgoIARAuGLEDGIAEMgYIAhBFGDkyBwgDEAAYgAQyBggEEEUYPTIGCAUQRRg8MgYIBhBFGEEyBggHEEUYPNIBBzg4MWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8',
        userName: 'Ivan',
        userPhoto: 'https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg'
    },
};