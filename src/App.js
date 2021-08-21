
import './App.css';
import { moviesData } from './Data';
import {useState} from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import FilmDesc from './components/FilmDesc';


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
     
     <BrowserRouter>
     <Switch>
      <Route path='/' exact render={()=>
      <MovieList films={movies.filter(el=>el.name.toLowerCase().includes(search.toLowerCase()) && el.rating >= searchRating)}/>
      } />
      <Route path='/films/:name' 
       render={(props=><FilmDesc  films={movies} {...props}/>)}  />
     <AddMovie handeladd={handeladd}/>

     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
