import React, {Component} from 'react';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import SingleMovie from '../SingleMovie/SingleMovie';
import '../App/App.css';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
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
           movie: filteredMovieData.movie
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
        return (
            <>
            {console.log(this.state.movies)}
            {console.log(this.state.movie)}
            <Nav />
            <span className="error">{this.state.errorMessage}</span>
            <main className='App'>
              <Route exact path='/' render={() => (<Movies movies={this.state.movies} getMovieById={this.getMovieById} />)} />
              <Route path="/:movieId" render={({ match }) => (<SingleMovie movie={match.params.movieId}/>)} />
            </main>
          </>
        );
      }
}

export default App;