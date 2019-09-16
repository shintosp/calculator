export function addition(valueOne, valueTwo, result) {
    return {
        type: 'ADD',
        valueOne,
        valueTwo,
        result
    }
}

export function substraction(valueOne, valueTwo, result) {
    return {
        type: 'SUBSTRACT',
        valueOne,
        valueTwo,
        result
    }
}

export function divition(valueOne, valueTwo, result) {
    return {
        type: 'DIVIDE',
        valueOne,
        valueTwo,
        result
    }
}