import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({films}) => {
   console.log(films.id);
    return (
        <div className="movie-list">
            {films.map((el,i)=>(
  
            <MovieCard key={i} feelm={el}/>
            ))}
        </div>
    )
}

export default MovieList
