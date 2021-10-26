import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardHeader, CardMeta, CardDescription, Image } from 'semantic-ui-react' 
import PropTypes from 'prop-types';
import axios from 'axios';

export const Demo = (props) => {

    const [title, setState] = useState([]);
    const [overview, setOverview] = useState([]);
    const [release_date, setRelease] = useState([]);
    const [poster_path, setPoster] = useState([])

    useEffect(() => {
        /* fetchData(); */
    }, []);

    
    
    const fetchData = (index) => {
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=0d81b1a4f4007b1880fb5b55f99645fd')
        .then((response) => {
            console.log(response)
            const myCard = response.data;
            setState(response.data.title);
            setOverview(response.data.overview);
            setRelease(response.data.release_date);
            setPoster(response.data.poster_path)
        })
        .catch(error => console.log({error}))
    }; 

    return (
    <div> 
    <Card>
    <Image src={"https://image.tmdb.org/t/p/w342" + props.poster_path} wrapped ui={false} />
    <CardContent>
      <CardHeader>{props.title}</CardHeader>
      <CardMeta>
        <span className='date'>Release Date: {props.release_date}</span>
      </CardMeta>
      <CardDescription>
        {props.overview}
      </CardDescription>
    </CardContent>
    <CardContent extra>
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
    label: PropTypes.string
}



