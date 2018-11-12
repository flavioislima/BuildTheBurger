import React, { Component } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    price: 3.5,
    isPurchasable: false,
    showModal: false
  }

  setPurchasable = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => {
        return sum + el
      }, 0)

    this.setState({
      isPurchasable: sum > 0
    })
  }

  addIngredient = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] + 1
    const price = INGREDIENT_PRICES[type] + this.state.price
    this.setState({ price, ingredients: updatedIngredients })
    this.setPurchasable(updatedIngredients)
  }

  removeIngredient = (type) => {
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = this.state.ingredients[type] - 1
    const price = this.state.price - INGREDIENT_PRICES[type]
    this.setState({ price, ingredients: updatedIngredients })
    this.setPurchasable(updatedIngredients)
  }

  showOrderSummary = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  continuePurchase = () => {
    alert("continue!")
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
        {
          this.state.showModal &&
          <Modal
            show={this.state.showModal}
            hideModal={this.showOrderSummary}
          >
            <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.price}
              cancelPurchase={this.showOrderSummary}
              continuePurchase={this.continuePurchase}
            />
          </Modal>
        }
        <BuildControls
          added={this.addIngredient}
          removed={this.removeIngredient}
          disabled={disabledInfo}
          price={this.state.price}
          isPurchasable={this.state.isPurchasable}
          showSummary={this.showOrderSummary}
        />
      </Aux>
    )
  }
}
