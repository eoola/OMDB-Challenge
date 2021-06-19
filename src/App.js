import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import MovieList from './components/MovieList/MovieList.js';
import Search from './components/Search/Search.js';
import Footer from './components/Footer/Footer.js';
import { Pagination } from '@material-ui/lab';
import OMDB from './util/OMDB.js'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], page: 1, searchTerm: '', totalResults: 0, resultsPerPage: 10, yearRange: [], filter: false };
    this.searchOMDB = this.searchOMDB.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getYearRange = this.getYearRange.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  searchOMDB(movieName) {
    OMDB.search(movieName, this.state.page)
      .then(result => {
        this.setState({ movies: result.movies })
        this.setState({ searchTerm: movieName })
        this.setState({ totalResults: result.totalResults })
      })
  }

  handlePageChange(event, newPage) {
    this.setState({ page: newPage })
    console.log(this.state.movies);
    OMDB.search(this.state.searchTerm, newPage)
      .then(result => {
        this.setState({ movies: result.movies })
      })
    document.documentElement.scrollTop = 0;
  }

  getYearRange() {
    if (this.state.movies.length != 0) {
      const movies = this.state.movies.slice(0).sort((a, b) => {
        return a.year < b.year;
      })
      return [movies[0].year, movies[movies.length - 1].year];
    }
    return [2020, 2021]
  }

  toggleFilter() {
  }

  render() {
    return (
      <div>
        <Header title="Movie Search App"></Header>
        <Search
          yearRange={this.getYearRange}
          searchOMDB={this.searchOMDB}></Search>
        <MovieList movies={this.state.movies}></MovieList>
        <Pagination
          count={Math.ceil(this.state.totalResults / this.state.resultsPerPage)}
          onChange={this.handlePageChange} />
        <h1>{this.state.page}</h1>
        <Footer title="Made By Demi">
          <a href="https://github.com/eoola">Github</a>
        </Footer>
      </div>
    );
  }
}

export default App;
