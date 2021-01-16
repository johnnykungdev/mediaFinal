class CartItems {
    constructor(itemsArray) {
        this.itemsArray = itemsArray
        this.tableBody = document.querySelector('.items-table-body')
    }
    changeItemAmount(itemId, newAmount) {
        //change the amount of selected item in the itemsArr
        const changedItem = this.itemsArray.find(item => item.id === itemId)
        changedItem.itemAmount = newAmount
        changedItem.itemSubtotal = changedItem.itemPrice * changedItem.itemAmount
        const newItemSubTotal = document.getElementById(`amountInput-${itemId}`)
        newItemSubTotal.innerHTML = changedItem.itemSubtotal
    }
    //item is a object containing: item, itemPrice, itemAmount, itemSubtotal
    buildItemTr(item) {
        const newItemTr = document.createElement('tr')
        newItemTr.id = `item-${item.id}`
        const _this = this
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
        removeButton.addEventListener('click', function() {
            return _this.deleteItem(item.id)
        })
        const removeButtonColumn = document.createElement('td')
        removeButtonColumn.appendChild(removeButton)
        newItemTr.appendChild(removeButtonColumn)
        console.log(this)
        this.tableBody.appendChild(newItemTr)
        console.log(this.tableElement)
    }
    listItems() {
        const itemsTable = document.querySelector('.itemsTable')
        this.itemsArray.forEach(item => {
            //{ item: '', itemPrice: '', itemAmount: '', itemSubprice: '' }
            this.buildItemTr(item)
        })
    }
    displayOrderTotal() {
        const orderTotal = document.getElementById('orderTotal')
        //number to be fixed
        orderTotal.innerHTML = '1000'
    }
    addItem(newItem) {
        this.itemsArray.push(newItem)
        return this.buildItemTr(newItem)
    }
    deleteItem(itemId) {
        console.log(itemId)
        const deletedItemIndex = this.itemsArray.findIndex(item => item.id === itemId)
        this.itemsArray.splice(deletedItemIndex, 1)
        console.log(this.itemsArray)
        return this.deleteItemTr(itemId)
    }
    deleteItemTr(itemId) {
        const deletedItemTr = document.getElementById(`item-${itemId}`)
        deletedItemTr.remove()
    }
}

export default CartItems