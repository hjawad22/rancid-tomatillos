import React, { Component } from 'react';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import SingleMovie from '../SingleMovie/SingleMovie';
import '../App/App.css';
import { Route } from 'react-router-dom';
import Errors from '../handleErrors/Errors';


class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            errorMessage: ''
        };
    }

    componentDidMount = () => {
        fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Oops! We seem to be having some technical issues, please try again later!');
                }
                return res.json();
            })
            .then(moviesData => this.setState({
                movies: moviesData.movies,
                errorMessage: ''
            }))
            .catch(error => {
                this.setState({
                    errorMessage: `${error.message}`
                });
            });
    };

    render() {
        return (
            <>
                <Nav />
                <main className='App'>
                    <Route exact path='/' render={() => (<Movies movies={this.state.movies} getMovieById={this.getMovieById} />)} />
                    <Route path="/:movieId" render={({ match }) => (<SingleMovie movie={parseInt(match.params.movieId)} />)} />
                    <Route path="/*" render={() => (<Errors errorMessage={this.state.errorMessage} />)} />
                </main>
            </>
        );
    }
}

export default App;