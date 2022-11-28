const addItem = () => {
    const input = document.getElementById('input')
    const taskName = input.value

    const newItem = document.createElement('li')
    newItem.innerText = taskName

    const itemsList = document.getElementById('items')
    itemsList.appendChild(newItem)

    input.value = ''
}