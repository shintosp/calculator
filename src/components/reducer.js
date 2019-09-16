
const initialState = {
    value_one: 0,
    value_two: 0,
    result: 0
}


export default function calcApp(state = initialState, action = {}) {
    switch (action.type) {
        case 'ADD': return {
            ...state,
             result: action.valueOne + action.valueTwo
            }
        break

        // case 'SUBSTRACT': return {...state, [action.result]: action.value_one - action.value_two}
        // break

        // case 'DIVIDE': return {...state, [action.result]: action.value_one / action.value_two}
        // break

        default: return state
    }
};