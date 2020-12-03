import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ReduxStoreProviderDecorator } from '../../stories/ReduxStoreProviderDecorator';
import {action} from "@storybook/addon-actions";
import {SetBoard, SetBoardPropsType} from "./SetBoard";

export default {
    title: 'Counter/SetBoard',
    component: SetBoard,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator],
} as Meta;


const Template: Story<SetBoardPropsType> = (args) => <SetBoard {...args} />;

export const SetBoardBasic = Template.bind({});
SetBoardBasic.args = {
    disabledSetButton: () => false,
    text: '2',
    setText: action('Information text will be controlled')
};

