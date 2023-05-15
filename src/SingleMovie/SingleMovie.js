import React from 'react';
import '../SingleMovie/SingleMovie.css'

const SingleMovie = ({ movie, switchState }) => {
if(!movie) {
    return null
}
  return (
     <div className='main-movie-container'>
      <article className='image-container'>
        <h1>{movie.title}</h1>
        <img className='single-image' src={movie.poster_path} alt={movie.title} />
        <p>Rating: {movie.average_rating}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>Revenue: ${Intl.NumberFormat().format(movie.revenue)}</p>
        <p>Release Date: {movie.release_date}</p>
        <button className='back-button' onClick={switchState}>
          Back to Movies
        </button>
      </article>
      <article className='description-container'>
        <h3>Movie Overview</h3>
        <p className='overview'>{movie.overview}</p>
        <p className='tagline'>"{movie.tagline}"</p>
      </article>
      </div>
    
  );
};

export default SingleMovie;