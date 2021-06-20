import React from 'react';
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardHeader } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
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
            </Card>
        )
    }
}

export default Movie;