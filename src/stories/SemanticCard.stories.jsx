import React from 'react';
import { Demo } from './SemanticCard';

export default {
    title: 'Demo',
    component: Demo,
}


const Template = (args) => <Demo {...args} />;

export const SemanticCard = Template.bind({});

SemanticCard.args = {
    primary: true
};



