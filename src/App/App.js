import React, {Component} from 'react';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import '../App/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            movie: null,
            errorMessage: ''
        }
        console.log(this.state.movies)
    }

    componentDidMount = () => {
        fetch("https://rancid-tomatillos.herokuapp.com/api/v2//movies/")
        .then(res => {
           if(!res.ok) {
               throw new Error('Failed to fetch movies')
           }
           return res.json()})
        .then(moviesData => this.setState({
           movies: moviesData.movies
        }))
        .catch(error => {
           console.error("There was a problem with the fetch", error)
           this.setState({
            errorMessage: `Error: ${error.message}`
           })
        })
    }

    getMovieById = (id) => {
        const filteredMovie = this.state.movies.find(movie => movie.id === id)

        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${filteredMovie.id}/`)
        .then(res => {
           if(!res.ok) {
               throw new Error('Failed to display movie details please try again!')
           }
           return res.json()})
        .then(filteredMovieData => this.setState({
           movie: filteredMovieData
        }))
        .catch(error => {
           console.error("There was a problem with the fetch", error)
           this.setState({
            errorMessage: `Error: ${error.message}`
           })
        })
    }

    switchState = () => {
        this.setState({movie: null})
    }

render() {
    if(this.state.movie) {
        const {movie} = this.state.movie
        return (
        <>
        <Nav/>
        <main className='movie-container'>
        <article className='image-container'>
        <h1>{movie.title}</h1>
        <img className='single-image' src={movie.poster_path} alt={movie.title}/>
        <p>Rating: {movie.average_rating}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>Revenue: ${Intl.NumberFormat().format(movie.revenue)}</p>
        <p>Release Date: {movie.release_date}</p>
        <button className='back-button' onClick={() => this.switchState()}>Back to Movies</button>
        </article>
        <article className='description-container'>
        <h3>Movie Overview</h3>
        <p className='overview'>{movie.overview}</p>
        <p className='tagline'>"{movie.tagline}"</p>
        </article>
        </main>
        </>
        )
    }
    return (
        <>
        <Nav/>
        <span className="error">{this.state.errorMessage}</span>
        <main className='App'>
        <Movies movies={this.state.movies} getMovieById={this.getMovieById}/>
        </main>
        </>
    )}
}

export default App;