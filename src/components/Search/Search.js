import React from 'react';
import './Search.css'

class Search extends React.Component {
    render() {
        return(
            <form>
                <input placeholder="Enter name of movie">
                </input>
                <button>
                    Submit
                </button>
            </form>
        ) 
    }
}

export default Search;