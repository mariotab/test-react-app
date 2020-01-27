import React from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import DrinkDetail from '../DrinkDetail/DrinkDetail'
import {useStyles} from './DrinkCardStyles'

export default function MediaCard({drinkDetail}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const classes = useStyles();
  if (drinkDetail.image_url === null) return null
  return (
    <Card className={classes.card}  >
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={drinkDetail.image_url}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.labelWrapper}>
          <h2 className={classes.label}>
            {drinkDetail.name}
          </h2>
        </CardContent>
      </CardActionArea>
      <DrinkDetail open={open} onClose={handleClose} drinkDetail={drinkDetail}/>
    </Card>
  );
}

MediaCard.propTypes = {
  drinkDetail: PropTypes.object.isRequired
}
