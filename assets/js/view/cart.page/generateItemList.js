class cartItems {
    constructor() {
        
    }
    listItems(itemsArr) {
        const itemsTable = document.querySelector('.itemsTable')
        itemsArr.forEach(item => {
            //{ item: '', itemPrice: '', itemAmount: '', itemSubprice: '' }
            const newItemTr = document.createElement('tr')
            for (let infoType in item) {
                const infoTd = document.createElement('td')
                infoTd.classList.add(`${infoType}`)
                if (infoType === 'itemAmount') {
                    infoTd.innerHTML = `<input value=${item[infoType]} />`
                    infoTd.addEventListener('change', function() {
                        //add changeItemAmount
                    })
                } else {
                    infoTd.innerHTML = item[infoType]
                }
                newItemTr.appendChild(infoTd)
            }
            itemsTable.appendChild(newItemTr)
        })
    }
    changeItemAmount(newAmount) {
        //change the amount of selected item in the itemsArr
    }
}

export default cartItems