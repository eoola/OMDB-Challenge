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
    this.state = { noResultsFound: false, loading: false, movies: [], page: 1, pageOffset: 1, searchTerm: '', totalResults: 0, resultsPerPage: 10, yearRange: [], filter: false, filteredMovies: [] };
    this.searchOMDB = this.searchOMDB.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this);
    //this.getYearRange = this.getYearRange.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setYearRange = this.setYearRange.bind(this);
    this.generateMoreMovies = this.generateMoreMovies.bind(this);
    this.pageLoading = this.pageLoading.bind(this);
    this.pageDoneLoading = this.pageDoneLoading.bind(this);
  }

  searchOMDB(movieName) {
    this.pageLoading()
    this.setState({noResultsFound: false})
    OMDB.search(movieName, 1)
      .then(result => {
        this.setState({ page: 1 });
        this.setState({ movies: result.movies })
        this.setState({ searchTerm: movieName })
        this.setState({ totalResults: result.totalResults })
        this.setState({ pageOffset: 1 })
        this.pageDoneLoading();
        //this.getYearRange(result.movies);
      }).catch(error => {
        this.setState({noResultsFound: true});
        this.setState({ page: 1 });
        this.setState({ movies: [] })
        this.setState({ searchTerm: movieName })
        this.setState({ totalResults: 0 })
        this.setState({ pageOffset: 1 })
        this.pageDoneLoading();
      })
  }

  pageLoading() {
    this.setState({ loading: true });
  }

  pageDoneLoading() {
    this.setState({ loading: false });
  }

  handlePageChange(event, newPage) {
    this.pageLoading()
    this.setState({ page: newPage })
    OMDB.search(this.state.searchTerm, newPage)
      .then(result => {
        this.setState({ movies: result.movies })
        this.pageDoneLoading();
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
      this.setYearRange(fromYear, toYear);
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
    this.pageLoading()
    let currentMovies = this.state.filteredMovies;
    OMDB.search(this.state.searchTerm, (this.state.page + this.state.pageOffset))
      .then(result => {
        console.log(result);
        let newMovies = result.movies;
        Array.prototype.push.apply(currentMovies, newMovies.filter(movie => {
          console.log(this.state.yearRange);
          return (movie.year >= this.state.yearRange[0]) && (movie.year <= this.state.yearRange[1]);
        }))
        this.setState({ filteredMovies: currentMovies })
        this.pageDoneLoading();
      }).catch(error => {
        this.pageDoneLoading();
        document.getElementById("Button").disabled = true;
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
          {this.state.loading ? <h1>Loading Results...</h1> : <h1></h1>}
          <button id="Button" onClick={this.generateMoreMovies}>Show More</button>
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
          {this.state.loading ? <h1>Loading Results...</h1> : <h1></h1>}
          {this.state.noResultsFound ? <h1>No results found</h1> : <h1></h1>}
          <MovieList movies={this.state.movies}></MovieList>
          <Pagination
            page={this.state.page}
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
