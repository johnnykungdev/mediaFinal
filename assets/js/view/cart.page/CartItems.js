class CartItems {
    constructor(itemsArray) {
        this.itemsArray = itemsArray
    }
    changeItemAmount(itemId, newAmount) {
        //change the amount of selected item in the itemsArr
        console.log(newAmount)
        console.log(this.itemsArray)
        const changedItem = this.itemsArray.find(item => item.id === itemId)
        console.log(changedItem)
        changedItem.itemAmount = newAmount
        changedItem.itemSubtotal = changedItem.itemPrice * changedItem.itemAmount
        const newItemSubTotal = document.getElementById(`amountInput-${itemId}`)
        console.log(newItemSubTotal)
        newItemSubTotal.innerHTML = changedItem.itemSubtotal
    }
    listItems() {
        const itemsTable = document.querySelector('.itemsTable')
        console.log(this)
        const _this = this
        this.itemsArray.forEach(item => {
            //{ item: '', itemPrice: '', itemAmount: '', itemSubprice: '' }
            const newItemTr = document.createElement('tr')

            //**fix item object to class later**
            for (let infoType in item) {
                const infoTd = document.createElement('td')
                infoTd.classList.add(`${infoType}`)
                if (infoType === 'itemAmount') {
                    const amountInput = document.createElement('input')
                    amountInput.value = item[infoType]
                    amountInput.addEventListener('input', function(e) {
                        return _this.changeItemAmount(item.id, e.target.value)
                    })
                    infoTd.appendChild(amountInput)
                } else if (infoType === 'itemSubtotal') {
                    infoTd.innerHTML = item[infoType]
                    infoTd.id = `amountInput-${item.id}`
                } else if (infoType !== 'id') {
                    infoTd.innerHTML = item[infoType]
                }
                newItemTr.appendChild(infoTd)
            }
            const removeButton = document.createElement('div')
            removeButton.innerHTML = '<u>remove</u>'
            removeButton.classList.add('removeButton')
            const removeButtonColumn = document.createElement('td')
            removeButtonColumn.appendChild(removeButton)
            newItemTr.appendChild(removeButtonColumn)

            itemsTable.appendChild(newItemTr)
        })
    }
    displayOrderTotal() {
        const orderTotal = document.getElementById('orderTotal')
        //number to be fixed
        orderTotal.innerHTML = '1000'
    }
    addItem(newItem) {
        this.itemsArray.push(newItem)
    }
    deleteItem(itemId) {
        const deletedItemIndex = this.itemsArray.findIndex(item => item.id === itemId)
        this.itemsArray.splice(deletedItemIndex, 1)
        console.log(deletedItemIndex)
    }
}

export default CartItems