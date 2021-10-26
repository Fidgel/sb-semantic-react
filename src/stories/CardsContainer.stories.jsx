import React from 'react';
import {CardsContainer} from './CardsContainer';

export default {
    title: 'CardsContainer',
    component: CardsContainer,
}


const Template = (args) => <CardsContainer {...args} />;

export const MultipleCards = Template.bind({});

MultipleCards.args = {
    label: ""
};
