import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer>{this.props.title} {this.props.children}</footer>
        )
    }
}


export default Footer;