import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReduxStoreProviderDecorator } from '../../stories/ReduxStoreProviderDecorator';
import {action} from "@storybook/addon-actions";
import {CountBoard, CountBoardPropsType} from './CountBoard';


export default {
    title: 'Counter/CountBoard',
    component: CountBoard,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator],
} as Meta;


const Template: Story<CountBoardPropsType> = (args) => <CountBoard {...args} />;

export const CountBoardSetText = Template.bind({});
CountBoardSetText.args = {
    text: `enter value and press 'set'`,
    setText: action('text will be changed')
};

export const CountBoardIncorrectText = Template.bind({});
CountBoardIncorrectText.args = {
    text: `Incorrect value!`,
    setText: action('text will be changed')
};
