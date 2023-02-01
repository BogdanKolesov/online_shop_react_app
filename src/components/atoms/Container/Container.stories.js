import React from 'react';
import Container from './Container';

export default {
    title: 'Atoms/Container',
    component: <Container />,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант ширины контейнера',
            defaultValue: 'full',
            options: ['full', 'half', 'container'],
            control: {
                type: 'radio'
            }
        },
        direction: {
            type: 'string',
            description: 'Вариант направления контейнера',
            defaultValue: 'col',
            options: ['col', 'row'],
            control: {
                type: 'radio'
            }
        },
    }
}

const Template = (args) => <Container {...args} />

export const Default = Template.bind({})

Default.args = {
    bg: 'red',
    justyfy: 'center',
    align: 'center'
}