import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENTS_PRICE = 0
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0
    },
    price: 4
  }

  addIngredient = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] + 1
    const price = INGREDIENTS_PRICE[type] + this.state.price
    this.setState({ price, ingredients: updatedIngredients })
  }

  removeIngredient = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] - 1
    const price = INGREDIENTS_PRICE[type] - this.state.price
    if (updatedIngredients[type] >= 0) {
      this.setState({ price, ingredients: updatedIngredients })
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls added={this.addIngredient} removed={this.removeIngredient} />
      </Aux>
    )
  }
}
