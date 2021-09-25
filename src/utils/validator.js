const valueIsNumber = (value) => {
    return value.match(/^[0-9]*$/)
}

const removeUselessZero = (value) => {
    return value.replace(/^(0)(.+)/, '$2')
}

export { valueIsNumber, removeUselessZero }