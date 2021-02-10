import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HW12 from "./HW12";
import ReduxStoreProviderDecorator from "./decorator/ReduxStoreProviderDecorator";

export default {
    title: 'REACT-HOMEWORK/HW13',
    component: HW12,
    decorators: [ReduxStoreProviderDecorator],
} as Meta;

const Template: Story = () =>{
    return <HW12/>
}

export const HW12StoryExample = Template.bind({});
