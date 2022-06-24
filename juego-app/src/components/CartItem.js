import React from 'react'

const CartItem = ({product}) => {

    const {title, price} = product

  return (
    <div><h4>{title}</h4></div>
  )
}

export default CartItem