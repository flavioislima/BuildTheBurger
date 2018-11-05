import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 1,
  cheese: 1.5,
  meat: 2.5,
  bacon: 2
}
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0
    },
    price: 3.5
  }

  addIngredient = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] + 1
    const price = INGREDIENT_PRICES[type] + this.state.price
    this.setState({ price, ingredients: updatedIngredients })
  }

  removeIngredient = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] - 1
    const price = this.state.price - INGREDIENT_PRICES[type]
    this.setState({ price, ingredients: updatedIngredients })
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredient}
          removed={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.price}
        />
      </Aux>
    )
  }
}
