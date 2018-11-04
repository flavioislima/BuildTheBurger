import React from 'react'
import classes from './Control.css'

const Control = (props) => (
  <div className={classes.Control}>
    <div className={classes.Label}>
      {props.label}
    </div>
    <button className={classes.Less}>Less</button>
    <button className={classes.More}>More</button>
  </div>
)

export default Control