import CartItems from './CartItems.js'
import stubData from '../../utils/stub.data.js'

const cartItems = new CartItems(stubData.cartItems)
console.log(cartItems)

cartItems.listItems(stubData.cartItems)