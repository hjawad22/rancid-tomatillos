import React from "react";
import Movie from'../Movie/Movie';
import '../Movies/Movies.css'

const Movies = ({movies}) => {
    const movieCards = movies.map(movie => {
        return (
            <Movie
             title={movie.title}
             image={movie.poster_path}
             imageBackdrop={movie.backdrop_path}
             rating={movie.average_rating}
             releaseDate={movie.release_date}
             id={movie.id}
             key={movie.id}
             />
        )
    })


    return(
        <div className="movies-container">
            {movieCards}
        </div>
    )
}




export default Movies;