import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { CardActions } from '@material-ui/core';
import { Collapse } from '@material-ui/core';

import './Movie.css'


class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

    handleExpandClick() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {
        return (
            <Card className="Movie">
                <CardHeader
                    title={this.props.movie.title}
                    subheader={this.props.movie.year} />
                <CardMedia
                    className="Media"
                    image={this.props.movie.img}
                    title={this.props.movie.title} />
                <CardContent>
                    <h5>IMDB Rating: {this.props.movie.imdbRating}</h5>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        className="IconButton"
                        aria-label="show more"
                    >
                        <ExpandMore
                            className={this.state.expanded ? "ExpandOpen" : "Expand"} />
                    </IconButton>
                </CardActions>
                <Collapse
                    in={this.state.expanded}
                    timeout="auto"
                    unmountOnExit>
                    <CardContent className="CollapseContent">
                        <h5>Released: {this.props.movie.releaseDate}</h5>
                        <h5>Runtime: {this.props.movie.runtime}utes</h5>
                        <h5>Director: {this.props.movie.director}</h5>
                        <h5>{this.props.movie.plot}</h5>
                        <h5></h5>
                    </CardContent>
                </Collapse>
            </Card>
        )
    }
}

export default Movie;