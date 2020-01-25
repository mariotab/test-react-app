import React from 'react'
import {useStyles} from './HeaderStyle'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.header} >
      <h3 className={classes.headerTitle}>Demo App</h3>
    </div>
  )
}

export default Header
