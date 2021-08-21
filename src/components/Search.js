import React,{useState} from 'react'
import StarRating from './StarRating'

const Search = ({search,handesearch,handrating,searchRating}) => {
    
    return (
        <div className="header-container">
            <h1>Our movie App</h1>
            <div className="search-container"><input className="inp" type="text"
             value={search} onChange={handesearch}/>
            <StarRating  rating={searchRating}  functrating={handrating}/>
            </div>
          
        </div>
    )
}

export default Search
