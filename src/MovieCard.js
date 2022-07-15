import React from 'react';

const MovieCard = ( {movie} ) => {
    //Possible function for displaying more information (more info not available from API)
    /* 
    function displayMore() {
        console.log(movie);
    }
    */
    return (
        <div className="card">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="moviePoster"></img>
            <p>{movie.Title} ({movie.Year})</p>
        </div>
    );   
}

export default MovieCard;