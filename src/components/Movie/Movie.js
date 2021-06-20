import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { CardActions } from '@material-ui/core';

import './Movie.css'

class Movie extends React.Component {
    render() {
        return (
            <Card className="Movie">
                <CardHeader
                    title={this.props.movie.title}
                    subheader={this.props.movie.year + ', ' + this.props.movie.director} />
                <CardMedia
                    className="Media"
                    image={this.props.movie.img}
                    title={this.props.movie.title} />
                <CardContent>
                    <h4>{this.props.movie.plot}</h4>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton
                        //aria-expanded={expanded}
                        className="IconButton"
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
            </Card>
        )
    }
}

export default Movie;