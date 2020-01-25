import React from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {useStyles} from './DrinkCardStyles'

export default function MediaCard({image, name}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.labelWrapper}>
          <h2 className={classes.label}>
            {name}
          </h2>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
