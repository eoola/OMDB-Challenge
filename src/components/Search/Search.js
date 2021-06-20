import React from 'react';
import './Search.css'
import { FormControlLabel } from '@material-ui/core';
import { Switch } from '@material-ui/core';

const currentDate = new Date();

class Search extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.yearRange);
        this.state = { term: '', fromYear: 1900, toYear: 1900, filter: false, disableFromFilter: true, disableToFilter: true }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.generateFromYears = this.generateFromYears.bind(this);
        this.handleFromYear = this.handleFromYear.bind(this);
        this.handleToYear = this.handleToYear.bind(this);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleSearch(event) {
        this.props.searchOMDB(this.state.term, 1);
    }

    handleFromYear(event) {
        this.setState({ fromYear: event.target.value })
        this.setState({ disableFromFilter: false });
    }

    handleToYear(event) {
        this.setState({ toYear: event.target.value })
        this.setState({ disableToFilter: false})
    }

    generateFromYears() {
        let years = []
        for (let index = 1900; index <= currentDate.getFullYear(); index++) {
            years.push(index);
        }
        return years
    }

    generateToYears(minYear) {
        let years = []
        for (let index = 1900; index <= currentDate.getFullYear(); index++) {
            years.push(index);
        }
        return years
    }

    handleFilterClick() {
        console.log(this.state.fromYear + ' ' + this.state.toYear);
        const nextFilterState = !this.state.filter;
        this.props.setYearRange(this.state.fromYear, this.state.toYear);
        this.setState({ filter: nextFilterState })
        this.props.setFilter(nextFilterState, this.state.fromYear, this.state.toYear);
    }

    render() {
        return (
            <div className="Search">
                <form action="javascript:void(0);" onSubmit={this.handleSearch}>
                    <input
                        placeholder="Enter name of movie..."
                        onChange={this.handleTermChange}>
                    </input>
                    <button >
                        Search
                    </button>
                </form>
                <select onChange={this.handleFromYear}>
                    {this.generateFromYears().map(year => {
                        return <option>{year}</option>
                    })}
                </select>
                <select onChange={this.handleToYear}>
                    {this.generateToYears().map(year => {
                        return <option>{year}</option>
                    })}
                </select>
                <FormControlLabel
                    control={
                        <Switch
                            disabled={(this.state.disableFromFilter || this.state.disableToFilter) || (this.state.toYear < this.state.fromYear)}
                            checked={this.state.filter}
                            onChange={this.handleFilterClick}
                            name="filter"
                            color="secondary"
                        />
                    }
                    label="Filter"
                />
            </div>
        )
    }
}

export default Search;