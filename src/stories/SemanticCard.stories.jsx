import React from 'react';
import { SemanticCard } from './SemanticCard';

export default {
    title: 'SemanticCard',
    component: SemanticCard,
}


const Template = (args) => <SemanticCard {...args} />;

export const Demo = Template.bind({});

Demo.args = {
    primary: true
};
