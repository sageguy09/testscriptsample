
import {initialState, moveNum} from './main'


let mockState =  {
    startingArray: [1, 2, 3, 4],
    arrayToPopulate: [],
}

test('moving from one array to another', () => {
    let state_1 = initialState(mockState)
    //console.log(state_1)
    expect(state_1.startingArray.length).toEqual(4)
    let state_2 = moveNum(mockState)
    //console.log(state_2)
    expect(state_2.startingArray.length).toEqual(3)
    expect(state_2.arrayToPopulate.length).toEqual(1)
})