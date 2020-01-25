import React from 'react'
import {useStyles} from './DrinksPanelStyle'
import Button from '@material-ui/core/Button'
import DrinkCard from '../DrinkCard/DrinkCard'


export default function({drinks, loading}) {
  const classes = useStyles();
  console.log(drinks)
  let Drinks = drinks.map(item => <DrinkCard image={item.image_url} name={item.name} key={item.id}/>)
  return (
    <>
      <div className={classes.root}>
        <Button className={classes.customButton}>ALL</Button>
        <Button className={`${classes.buttonActive} ${classes.customButton}`}>PIZZA</Button>
        <Button className={classes.customButton}>STEAK</Button>
      </div>
      <div className={classes.drinksWrapper}>
        {Drinks}
      </div>
    </>
  )
}
