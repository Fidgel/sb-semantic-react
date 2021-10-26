import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Demo } from './SemanticCard';
//3

export const CardsContainer = () => {
  
  const [list, setList] = useState([]);


  useEffect(() => {
    getMovieData();
}, []);

  const getMovieData = () => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0d81b1a4f4007b1880fb5b55f99645fd')
    .then((response) => {
        console.log(response)
        setList(response.data.results);
  })
  .catch(error => console.log({error}))
};


  return (
    <div>
      {list.map((movie) => (<Demo title={movie.title} overview={movie.overview} poster_path={movie.poster_path} release_date={movie.release_date}/>))}
    </div>
  )
};


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

CardsContainer.propTypes = {
   
}
