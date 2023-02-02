import React from 'react';
import StyledLink from './index';

export default {
    title: 'Atoms/StyledLink',
    component: <StyledLink />,
    // argTypes: {
    //     variant: {
    //         type: 'string',
    //         description: 'Вариант кнопки',
    //         defaultValue: 'primary',
    //         options: ['primary', 'none'],
    //         control: {
    //             type: 'radio'
    //         }
    //     },
    //     form: {
    //         type: 'string',
    //         description: 'Форма кнопки',
    //         defaultValue: 'regular',
    //         options: ['round', 'regular'],
    //         control: {
    //             type: 'radio'
    //         }
    //     },
    //     size: {
    //         type: 'string',
    //         description: 'Вариант размера кнопки',
    //         defaultValue: 'regular',
    //         options: ['regular', 'big'],
    //         control: {
    //             type: 'radio'
    //         }
    //     },
    //     font: {
    //         type: 'string',
    //         description: 'Вариант шрифта кнопки',
    //         defaultValue: 'thin',
    //         options: ['regular', 'bold', 'thin'],
    //         control: {
    //             type: 'radio'
    //         }
    //     },
    // }
}

const Template = (args) => <StyledLink {...args} />

export const Default = Template.bind({})

Default.args = {
    text: 'Hello!',
}