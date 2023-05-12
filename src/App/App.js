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

    getMovieById = (id) => {
        const filteredMovie = this.state.movies.find(movie => movie.id === id)
        this.setState({movie: filteredMovie})
        console.log("filteredMovies", filteredMovie)
    }

    switchState = () => {
        this.setState({movie: null})
    }

render() {
    if(this.state.movie) {
        return (
        <>
        <Nav/>
        <main className='movie-description'>
            {console.log(this.state.movie)}
        <h1>{this.state.movie.title}</h1>
        <img className='single-image' src={this.state.movie.poster_path} alt={this.state.movie.title}/>
        <button className='back-button' onClick={() => this.switchState()}>Back to Movies</button>
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