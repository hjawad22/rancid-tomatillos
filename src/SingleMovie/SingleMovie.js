import React, { Component } from 'react';
import '../SingleMovie/SingleMovie.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.getMovieById();
  }

  getMovieById = () => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movie}/`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to display movie details. Please try again!');
        }
        return res.json();
      })
      .then(filteredMovieData => this.setState({
        movie: filteredMovieData.movie,
        errorMessage: ''
      }))
      .catch(error => {
        console.error('There was a problem with the fetch', error);
        this.setState({
          movie: {},
          errorMessage: `${error.message}`
        });
      });
  };

  render() {
    if (this.state.errorMessage) {
      return (
        <h2 className='error-message'>{this.state.errorMessage}</h2>
      );
    }
    const { movie } = this.state;
    return (
      <div className='main-movie-container'>
        <article className='image-container'>
          <h1>{movie.title}</h1>
          <img className='single-image' src={movie.poster_path} alt={movie.title} />
          <p>Rating: {movie.average_rating}</p>
          <p>Runtime: {movie.runtime}</p>
          <p>Revenue: ${Intl.NumberFormat().format(movie.revenue)}</p>
          <p>Release Date: {movie.release_date}</p>
          <Link to="/">
            <button className='back-button'>
              Back to Movies
            </button>
          </Link>
        </article>
        <article className='description-container'>
          <h3>Movie Overview</h3>
          <p className='overview'>{movie.overview}</p>
          <p className='tagline'>"{movie.tagline}"</p>
        </article>
      </div>
    );
  }
}

export default SingleMovie;

SingleMovie.propTypes = {
  movie: PropTypes.number
};