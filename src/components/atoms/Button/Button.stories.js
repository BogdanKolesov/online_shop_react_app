import React from 'react';
import Button from './index';

export default {
    title: 'Atoms/Button',
    component: <Button />,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант кнопки',
            defaultValue: 'primary',
            options: ['primary', 'square', 'link'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: 'string',
            description: 'Вариант размера кнопки',
            defaultValue: 'regular',
            options: ['regular', 'small', 'big'],
            control: {
                type: 'radio'
            }
        },
    }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
    text: 'Hello!',

}

export const Large = Template.bind({})
Large.arg = {
    text: 'Large button',
    size: 'large'
}