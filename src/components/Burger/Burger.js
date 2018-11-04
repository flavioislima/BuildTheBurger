import React from 'react'

import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
  const burgerIngredients = Object.keys(props.ingredients)
    .map(igKey =>
      [...Array(props.ingredients[igKey])]
        .map((_, i) =>
          <BurgerIngredient type={igKey} key={igKey + i} />
        )
    )

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {burgerIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger