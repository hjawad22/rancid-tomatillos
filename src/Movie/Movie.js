import React from 'react';
import '../Movie/Movie.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Movie = ({id, title, rating, image, releaseDate, imageBackdrop, getMovieById}) => {
// console.log(id,getMovieById)
return (
    <div className='movie-card'>
            {console.log(id, 'in Moive-card')}
            <h3>{title}</h3>
            {/* <img className='image-backdrop' src= {imageBackdrop} alt= {title}/> */}
            <img className='movie-image' src= {image} alt= {title}/>
            <p>Release Date: {releaseDate}</p>
            <p>Rating: {Math.round(rating)}</p>
            <Link to={`/${id}`}>
            <button className='view-button'>View Details</button>
            </Link>
        </div>
    )
}



export default Movie;

Movie.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    releaseDate: PropTypes.string,
    getMovieById: PropTypes.func,
}