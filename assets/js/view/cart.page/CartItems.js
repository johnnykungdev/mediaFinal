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
            itemsTable.appendChild(newItemTr)
        })
    }
    addItem(itemsArray) {
        
    }
    deleteItem(itemsArray) {
        
    }
}

export default CartItems