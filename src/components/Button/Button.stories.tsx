import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {Button, ButtonPropsType} from "./Button";
import { ReduxStoreProviderDecorator } from '../../stories/ReduxStoreProviderDecorator';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Counter/Button',
    component: Button,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator],
} as Meta;


const Template: Story<ButtonPropsType> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
    title: 'button',
    buttonFunction: action('you clicked on button'),
    disabledButton: () => false
};

export const BasicDisabledButton = Template.bind({});
BasicDisabledButton.args = {
    title: 'button',
    buttonFunction: action('you clicked on button'),
    disabledButton: () => true
};

