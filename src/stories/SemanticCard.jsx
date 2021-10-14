import React, {useEffect, useState} from 'react';
import {Button, ButtonContent, Card, CardContent, CardHeader, CardMeta, CardDescription, Icon, Image } from 'semantic-ui-react' 
import PropTypes from 'prop-types';
import DaveImg from '../images/Dave.jpeg';
import axios from 'axios';

export const Demo = ({Title}) => {

    const [title, setState] = useState([]);


    useEffect(() => {
        fetchData();
    }, []);

    
    
    const fetchData = (index) => {
        axios.get('http://localhost:3000/cards')
        .then((response) => {
            console.log(response)
            const myCard = response.data;
            setState(response.data[index].title);
        })
        .catch(error => console.log({error}))
    }; 

    return (
    <div> 
    <Card>
    <Image src={DaveImg} wrapped ui={false} />
    <CardContent>
      <CardHeader>{title}</CardHeader>
      <CardMeta>
        <span className='date'>Joined in 2021</span>
      </CardMeta>
      <CardDescription>
        Dave is a Dog enthusiast.
        <div>"Who needs friends, when you have a dog!"</div>
      </CardDescription>
    </CardContent>
    <div>
    <Button animated onClick  = {() => fetchData(2)}>
      <ButtonContent visible>Add friend</ButtonContent>
      <ButtonContent hidden>
        <Icon name='arrow right' />
      </ButtonContent>
    </Button>
    </div>
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

Demo.propTypes = {
    primary: PropTypes.bool,
}



