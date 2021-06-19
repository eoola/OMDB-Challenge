import React from 'react';
import Movie from '../Movie/Movie.js'
import './MovieList.css'

class MovieList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentPage: 1}
    }

    render() {
        return (
            <div >
                <ul className="MovieList">
                    {this.props.movies.map(movie => {
                        return <Movie key={movie.id} movie={movie} />
                    })} </ul>
            </div>)
    }
}

export default MovieList;