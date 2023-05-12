import React from 'react';
import '../Movie/Movie.css';

const Movie = ({id, title, rating, image, releaseDate, imageBackdrop, getMovieById}) => {
// console.log(id,getMovieById)
    return (
        <div className='movie-card'>
            <h3>{title}</h3>
            {/* <img className='image-backdrop' src= {imageBackdrop} alt= {title}/> */}
            <img className='movie-image' src= {image} alt= {title}/>
            <p>Release Date: {releaseDate}</p>
            <p>Rating: {Math.round(rating)}</p>
            <button onClick={() => getMovieById(id)}>View Details</button>
        </div>
    )
}



export default Movie;