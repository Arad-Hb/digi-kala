import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={id:0}


const menuSlice=createSlice({
    name:"menuSlice",
    initialState:INITIAL_STATE,
    reducers:{

        addId: (state,action) =>{state.id =action.payload}
        
    }
})
export const { addId} = menuSlice.actions
export default menuSlice.reducer