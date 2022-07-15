 import './App.css';
 import { useState, useEffect } from 'react';
 import React from 'react';
 import { BsSearch } from 'react-icons/bs';
 import MovieCard from './MovieCard';
 

 const OMDB_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=45ee9669';

const App = () => {

  const [movies, setMovies] = useState([]);

  //movie title is what the user will enter into the search box
  const searchMovies = async (movieTitle) => {
    const response = await fetch(`${OMDB_URL}&s=${movieTitle}`);
    const data = await response.json();
    if(!data) {
      const emptyArray = [];
      setMovies(emptyArray);
    }
    else {
      setMovies(data.Search);
    }  
  }

  useEffect(() => {
    searchMovies('Spider-man');
  }, []); 

  return (
    <>
      <div className="App">
      <header>
        <h1>Movie Finder</h1> 
        <div className="search-bar">
          <input className="search-input" placeholder="Search for movies" onChange={event => searchMovies(event.target.value)}></input>
          <BsSearch className="search-icon" color='gray'/>
        </div>
      </header>
        <div className="movieContainer">
          {
            <div>
              {
                movies ? (movies.map((movie) => (
                  <MovieCard movie={movie}/>
                ))) : ("No Movies Found")
              }
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
