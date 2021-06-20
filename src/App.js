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
    this.state = { movies: [], page: 1, pageOffset: 1, searchTerm: '', totalResults: 0, resultsPerPage: 10, yearRange: [], filter: false, filteredMovies: [] };
    this.searchOMDB = this.searchOMDB.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this);
    //this.getYearRange = this.getYearRange.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setYearRange = this.setYearRange.bind(this);
    this.generateMoreMovies = this.generateMoreMovies.bind(this);
  }

  searchOMDB(movieName) {
    OMDB.search(movieName, this.state.page)
      .then(result => {
        this.setState({ movies: result.movies })
        this.setState({ searchTerm: movieName })
        this.setState({ totalResults: result.totalResults })
        //this.getYearRange(result.movies);
      })
  }

  handlePageChange(event, newPage) {
    this.setState({ page: newPage })
    OMDB.search(this.state.searchTerm, newPage)
      .then(result => {
        this.setState({ movies: result.movies })
      })
    document.documentElement.scrollTop = 0;
  }

  /*
  getYearRange(movies) {
    if (movies.length > 1) {
      const newMovies = movies.slice(0).sort((a, b) => {
        return a.year < b.year;
      })
      this.setState({ yearRange: [newMovies[newMovies.length - 1].year, newMovies[0].year] });
    } else {
      this.setState({ yearRange: [2020, 2021] })
    }
  }
  */

  setFilter(filterState, fromYear, toYear) {
    this.setState({ filter: filterState })
    if (filterState) {
      let currentMovies = this.state.movies;
      this.setState({
        filteredMovies: currentMovies.filter(movie => {
          return (movie.year >= fromYear) && (movie.year <= toYear);
        })
      })
    }
  }

  setYearRange(minYear, maxYear) {
    this.setState({ yearRange: [minYear, maxYear] })
    console.log('year range set')
  }

  generateMoreMovies() {
    let currentMovies = this.state.filteredMovies;
    OMDB.search(this.state.searchTerm, (this.state.page + this.state.pageOffset))
      .then(result => {
        let newMovies = result.movies;
        Array.prototype.push.apply(currentMovies, newMovies.filter(movie => {
          return (movie.year >= this.state.yearRange[0]) && (movie.year <= this.state.yearRange[1]);
        }))
        this.setState({ filteredMovies: currentMovies })
      })
    const currentPageOffset = this.state.pageOffset
    this.setState({ pageOffset: currentPageOffset + 1 });
  }

  render() {
    if (this.state.filter) {
      return (
        <div className="App">
          <Header title="Movie Search App"></Header>
          <Search
            setYearRange={this.setYearRange}
            setFilter={this.setFilter}
            searchOMDB={this.searchOMDB}></Search>
          <MovieList movies={this.state.filteredMovies}></MovieList>
          <ol>{this.state.filteredMovies.map(movie => {
            return <li>{movie.year}</li>
          })}</ol>
          <button onClick={this.generateMoreMovies}>Show More</button>
          <Footer title="Made By Demi">
            <a href="https://github.com/eoola">Github</a>
          </Footer>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Header title="Movie Search App"></Header>
          <Search
            setYearRange={this.setYearRange}
            setFilter={this.setFilter}
            yearRange={this.state.yearRange}
            searchOMDB={this.searchOMDB}></Search>
          <MovieList movies={this.state.movies}></MovieList>
          <Pagination
            className="Pagination"
            count={Math.ceil(this.state.totalResults / this.state.resultsPerPage)}
            onChange={this.handlePageChange} />
          <Footer title="Made By Demi">
            <a href="https://github.com/eoola">Github</a>
          </Footer>
        </div>
      );
    }
  }
}

export default App;
