import React from 'react';
import Home from './index';

export default {
    title: 'Views/Home',
    component: <Home />,
}

const Template = (args) => <Home {...args} />

export const Default = Template.bind({})

