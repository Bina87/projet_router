import React from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';



const MovieCard = ({feelm}) => {
    
    return (
        <div className="movie-card">
        <Link  to={`/films/${feelm.name}`} >
            <p>{feelm.name}</p>
            <StarRating rating={feelm.rating}/>
            <img src={feelm.image} alt=""/>
            <p>{feelm.date}</p>
        </Link>
        </div>
    )
}

export default MovieCard
