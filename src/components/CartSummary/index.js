import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let sum = 0
      cartList.forEach(each => {
        sum += each.price * each.quantity
      })

      return (
        <div className="summary-card">
          <h1 className="total">
            Order Total: <span className="price-sum">Rs {sum}</span>
          </h1>
          <p className="count-cart">{cartList.length}items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
