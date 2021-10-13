import React from 'react';
import {Card, CardContent, CardHeader, CardMeta, CardDescription, Icon, Image } from 'semantic-ui-react' 
import PropTypes from 'prop-types';
import DaveImg from '../images/Dave.jpeg'

export const SemanticCard = () => {
    return (
    <div> 
    <Card>
    <Image src={DaveImg} wrapped ui={false} />
    <CardContent>
      <CardHeader>David</CardHeader>
      <CardMeta>
        <span className='date'>Joined in 2021</span>
      </CardMeta>
      <CardDescription>
        Dave is a Dog enthusiast.
        <div>"Who needs friends, when you have a dog!"</div>
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name='user' />
        2 Friends
      </a>
    </CardContent>
  </Card>
  </div>
  );
}
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

SemanticCard.propTypes = {
    primary: PropTypes.bool,
}



