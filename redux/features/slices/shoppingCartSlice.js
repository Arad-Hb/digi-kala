import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={items:[],totalCount:0,totalAmount:0,totalPrices:0}

const refreshState=(state)=>{
    state.totalAmount=0
    state.totalCount=0
    state.totalPrices=0
    state.items.map(item=>{
        state.totalPrices+=item.price*item.count
        state.totalCount+=item.count
        state.totalAmount+=item.priceWithDiscount!==0?item.priceWithDiscount*item.count:item.price*item.count
    })
        return state
}
const shoppingCartSlice=createSlice({
    name:"shoppingCartSlice",
    initialState:INITIAL_STATE,
    reducers:{
        addItem:(state,action)=>{
            state.items.push({...action.payload,count:1})
            return refreshState(state)
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter(item => item.id != action.payload)
            // state = { items: state.items.filter(item => item.id != action.payload) }
            return refreshState(state)
        },
        increaseItem:(state, action)=> {

            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count++;
                }
            })
            return refreshState(state)
        }
        ,

        decreaseItem:(state, action)=> {

            state.items.map(item => {
                if (item.id === action.payload) {
                    item.count--;
                }
            })
            return refreshState(state)
        }
        
    }
})
export const { addItem,removeItem,increaseItem,decreaseItem } = shoppingCartSlice.actions
export default shoppingCartSlice.reducer