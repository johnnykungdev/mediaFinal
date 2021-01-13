import CartItems from './CartItems.js'
import stubData from '../../utils/stub.data.js'

const cartItems = new CartItems()
console.log(stubData.cartItems)

cartItems.listItems(stubData.cartItems)