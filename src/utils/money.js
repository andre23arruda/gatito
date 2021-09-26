function formatMoney(value) {
    return `R$ ${ value.toFixed(2) }`
}

function calculateTotal(items) {
    const total = items.reduce((accum, item) => accum + (item.preco * item.quantidade) , 0)
    return total
}

export { formatMoney, calculateTotal }