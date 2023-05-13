import movieData from '../movieData';
import React, {Component} from 'react';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import '../App/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieData.movies,
            movie: null
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
        })
    }

    getMovieById = (id) => {
        const filteredMovie = this.state.movies.find(movie => movie.id === id)

        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2//movies/${filteredMovie.id}/`)
        .then(res => {
           if(!res.ok) {
               throw new Error('Failed to fetch the movie')
           }
           return res.json()})
        .then(filteredMovieData => this.setState({
           movie: filteredMovieData
        }))
        .catch(error => {
           console.error("There was a problem with the fetch", error)
        })
    }

    switchState = () => {
        this.setState({movie: null})
    }

render() {
    if(this.state.movie) {
        return (
        <>
        <Nav/>
        <main className='movie-container'>
        <article className='image-container'>
        <h1>{this.state.movie.movie.title}</h1>
        <img className='single-image' src={this.state.movie.movie.poster_path} alt={this.state.movie.movie.title}/>
        <p>Rating: {this.state.movie.movie.average_rating}</p>
        <p>Runtime: {this.state.movie.movie.runtime}</p>
        <p>Revenue: ${this.state.movie.movie.revenue}</p>
        <p>Release Date: {this.state.movie.movie.release_date}</p>
        <button className='back-button' onClick={() => this.switchState()}>Back to Movies</button>
        </article>
        <article className='description-container'>
        <h3>Movie Overview</h3>
        <p>{this.state.movie.movie.overview}</p>
        <p>"{this.state.movie.movie.tagline}"</p>
        </article>
        </main>
        </>
        )
    }
    return (
        <>
        <Nav/>
        <main className='App'>
        <Movies movies={this.state.movies} getMovieById={this.getMovieById}/>
        </main>
        </>
    )}
}

export default App;