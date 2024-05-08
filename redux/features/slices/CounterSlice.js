const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = { num: 0 }
const counterSlice = createSlice({
    name: "counterSlice",
    initialState: INITIAL_STATE,
    reducers: {
        increment: state =>{state.num += 1},
        decrement: state =>{state.num -= 1},
        reset:state =>{state.num = 0},
        customIncrement:(state , action)=>{state.num += action.payload}
    }
})



export const { increment, decrement ,reset , customIncrement } = counterSlice.actions
export default counterSlice.reducer