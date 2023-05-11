import movieData from '../movieData';
import React, {Component} from 'react';
import Movies from '../Movies/Movies'
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
        <main className='App'> 
        <h1>Hello</h1>
        <Movies movies={this.state.movies}/>
        </main>
    )
}
}
export default App;