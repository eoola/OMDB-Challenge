import React from 'react';
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '', fromYear: 0 }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.generateFromYears = this.generateFromYears.bind(this);
        this.handleFromYear = this.handleFromYear.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleSearch(event) {
        this.props.searchOMDB(this.state.term, 1)
        this.setState({fromYear: 0})
    }

    handleFromYear(event) {
        this.setState({ fromYear: event.target.value })
    }

    generateFromYears() {
        let years = []
        for (let index = this.props.yearRange()[1]; index <= this.props.yearRange()[0]; index++) {
            years.push(index);
        }
        return years
    }

    generateToYears(minYear) {
        let years = []
        if (this.state.fromYear != 0) {
            for (let index = this.state.fromYear; index <= this.props.yearRange()[0]; index++) {
                years.push(index);
            }
            return years;
        }
        return [2021];
    }

    handleFilterClick() {
        this.props.toggleFilter();
    }

    render() {
        return (
            <div>
                <form action="javascript:void(0);" onSubmit={this.handleSearch}>
                    <input placeholder="Enter name of movie" onChange={this.handleTermChange}></input>
                    <button>
                        Submit
                    </button>
                </form>
                <select onChange={this.handleFromYear}>
                    {this.generateFromYears().map(year => {
                        return <option>{year}</option>
                    })}
                </select>
                <select>
                    {this.generateToYears().map(year => {
                        return <option>{year}</option>
                    })}
                </select>
                <button onClick={this.handleFilterClick}>Filter</button>
            </div>
        )
    }
}

export default Search;