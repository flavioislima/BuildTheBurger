import React from 'react'
import classes from './BuildControls.css'
import Control from './Control/Control'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {
      controls.map(ctrl => <Control key={ctrl.label} label={ctrl.label} added={() => props.added(ctrl.type)} removed={() => props.removed(ctrl.type)} />)
    }
  </div>
)

export default BuildControls