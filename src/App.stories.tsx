import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {App} from "./App";
import { ReduxStoreProviderDecorator } from './stories/ReduxStoreProviderDecorator';

export default {
    title: 'Counter/App',
    component: App,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator],
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const AppBasic = Template.bind({});
AppBasic.args = {};

