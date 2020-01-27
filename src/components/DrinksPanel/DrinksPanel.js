import React from 'react'
import {useStyles} from './DrinksPanelStyle'
import DrinkCard from '../DrinkCard/DrinkCard'


export default function({drinks, loading}) {
  const classes = useStyles();
  console.log(drinks)
  let Drinks = drinks.map(item => <DrinkCard drinkDetail={item} key={item.id}/>)
  return (
    <>
      <div className={classes.drinksWrapper}>
        {Drinks}
      </div>
    </>
  )
}
