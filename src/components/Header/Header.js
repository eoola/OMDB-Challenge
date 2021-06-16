import React from 'react';
import ReactDom from 'react-dom';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header>{this.props.title}</header>
        )
    }
}

export default Header;