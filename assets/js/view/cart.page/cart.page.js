import CartItems from './CartItems.js'
import stubData from '../../utils/stub.data.js'

const cartItems = new CartItems(stubData.cartItems)
console.log(cartItems)

cartItems.listItems(stubData.cartItems)
cartItems.displayOrderTotal()

const addItemBtn = document.querySelector('.add-item-btn')
addItemBtn.addEventListener('click', function() {
    const newItem = { item: 'new item', itemPrice: 3, itemAmount: 1, itemSubtotal: 3, id:3 }
    return cartItems.addItem(newItem)
})