import React from 'react'

import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredients)
    .map(igkey => {
      return (
        <li key={igkey}><span style={{ textTransform: 'capitalize' }}>{igkey}:</span> {props.ingredients[igkey]}</li>
      )
    })

  return (
    <Aux>
      <h3>Your Order:</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Order: US${props.price}</strong></p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.cancelPurchase} btnType='Danger'>CANCEL</Button>
      <Button btnType='Success' clicked={props.continuePurchase}>CONTINUE</Button>
    </Aux >
  )
}

export default OrderSummary