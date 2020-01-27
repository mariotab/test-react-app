import React  from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {useStyles} from './DrinksDetailsStyle'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {addCardItem} from '../../actions/cardActions'

const DrinkDetail = props => {
  const classes = useStyles();
  const { onClose, open, drinkDetail } = props;

  return (
    <Dialog
      onClose={onClose}
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
              Price: {drinkDetail.abv}
            </Typography>
            <Typography className={classes.detailsText}>
              {drinkDetail.description.length > 100 ? `${drinkDetail.description.slice(0,100)}...`:drinkDetail.description}
            </Typography>
            <Typography className={classes.detailsText}>
              {drinkDetail.food_pairing.length > 2 ? `${drinkDetail.food_pairing.slice(0,2).join(', ')}`:drinkDetail.food_pairing.join(', ') }
            </Typography>
          </CardContent>
        </div>
        <div className={classes.imgWrapper}>
          <CardMedia
            className={classes.cover}
            image={drinkDetail.image_url}
          />
          <Button className={classes.addButton} onClick={()=> addCardItem([drinkDetail.name, drinkDetail.id])}>Add to card</Button>
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


export default connect(null, {addCardItem})(DrinkDetail)
