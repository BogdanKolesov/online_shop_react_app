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
            options: ['primary', 'none'],
            control: {
                type: 'radio'
            }
        },
        form: {
            type: 'string',
            description: 'Форма кнопки',
            defaultValue: 'regular',
            options: ['round', 'regular'],
            control: {
                type: 'radio'
            }
        },
        size: {
            type: 'string',
            description: 'Вариант размера кнопки',
            defaultValue: 'regular',
            options: ['regular', 'big'],
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