class CartItems {
    constructor() {
        
    }
    static changeItemAmount(newAmount) {
        //change the amount of selected item in the itemsArr
        console.log(newAmount)
    }
    listItems(itemsArr) {
        const itemsTable = document.querySelector('.itemsTable')
        console.log(itemsArr)
        itemsArr.forEach(item => {
            //{ item: '', itemPrice: '', itemAmount: '', itemSubprice: '' }
            const newItemTr = document.createElement('tr')
            for (let infoType in item) {
                const infoTd = document.createElement('td')
                infoTd.classList.add(`${infoType}`)
                if (infoType === 'itemAmount') {
                    const amountInput = document.createElement('input')
                    amountInput.value = item[infoType]
                    amountInput.addEventListener('input', function(e) {
                        return CartItems.changeItemAmount(e.target.value)   
                    })
                    infoTd.appendChild(amountInput)
                } else {
                    infoTd.innerHTML = item[infoType]
                }
                newItemTr.appendChild(infoTd)
            }
            itemsTable.appendChild(newItemTr)
        })
    }
    caculateItemSubtotal(amount, unitPrice) {
        return amount * unitPrice
    }
    addItem(itemsArray) {
        
    }
    deleteItem(itemsArray) {
        
    }
}

export default CartItems