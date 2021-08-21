
import './App.css';
import { moviesData } from './Data';
import {useState} from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';

function App() {
  const [movies,setMovies] = useState(moviesData) ;
  const [search, setSearch] = useState("");
  const [searchRating, setSearchRating] = useState('');

  const handeladd=(newcard)=>setMovies([...movies,newcard]) ;
  const handesearch=(e)=>setSearch(e.target.value) ;
  const handrating=(rating)=>setSearchRating(rating);
  return (
    <div className="App">
     <Search serach={search} handesearch={handesearch} handrating={handrating} searchRating={searchRating}/>
     <MovieList films={movies.filter(el=>el.name.toLowerCase().includes(search.toLowerCase()) && el.rating >= searchRating)}/>
     <AddMovie handeladd={handeladd}/>
    </div>
  );
}

export default App;
