/* logic.js */
const addItem = () => {
    const input = document.getElementById('input')
    const itemName = input.value

    const newItem = document.createElement('li')
    newItem.innerText = itemName

    const itemsList = document.getElementById('items-list')
    itemsList.appendChild(newItem)
}