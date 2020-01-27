import React  from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './DrinksDetailsStyle'

export default function DrinkDetail(props) {
  const classes = useStyles();
  const { onClose, open, drinkDetail } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      classes={{
        root: classes.customRoot,
        paper: classes.paperRoot
      }}
    >
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content} >
            <Typography component="h5" variant="h5" className={classes.detailsName}>
              {drinkDetail.name}
            </Typography>
            <Typography className={classes.detailsText}>
              {drinkDetail.tagline}
            </Typography>
            <Typography className={classes.detailsText}>
              abv: {drinkDetail.abv}
            </Typography>
            <Typography className={classes.detailsText}>
              {drinkDetail.description.length > 100 ? `${drinkDetail.description.slice(0,100)}...`:drinkDetail.description}
            </Typography>
          </CardContent>
        </div>
        <div className={classes.imgWrapper}>
          <CardMedia
            className={classes.cover}
            image={drinkDetail.image_url}
          />
        </div>
      </Card>
    </Dialog>
  );
}

DrinkDetail.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  drinkDetail: PropTypes.object.isRequired
};
