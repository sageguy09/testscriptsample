

const initialState = (state) => {

    return state || {

    
    startingArray: [1, 2, 3, 4],

    arrayToPopulate: [],
    
    }
}

const moveNum = (currentState) => {
    let arr1 = currentState.startingArray
    let arr2 = currentState.arrayToPopulate
    arr2.push(arr1.pop());
    let state = {...currentState, startingArray: arr1, arrayToPopulate: arr2}
    return state
}

export {initialState, moveNum }