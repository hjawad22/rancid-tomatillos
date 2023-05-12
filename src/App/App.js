import movieData from '../movieData';
import React, {Component} from 'react';
import Movies from '../Movies/Movies';
import Nav from '../Nav/Nav';
import '../App/App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieData.movies
        }
        console.log(this.state.movies)
    }

render() {
    return (
        <>
        <Nav/>
        <main className='App'> 
        <Movies movies={this.state.movies}/>
        </main>
        </>
    )}
}

export default App;