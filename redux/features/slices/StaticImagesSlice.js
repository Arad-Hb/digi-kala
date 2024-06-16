const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {topBanner:{}}

const StaticImagesSlice = createSlice({
    name: 'StaticImagesSlice',
    initialState: INITIAL_STATE,
    reducers: {
        setImagesData(state, action) {
            
            state.topBanner= action.payload
            
        }

    }
})

export const {setImagesData} = StaticImagesSlice.actions
export default StaticImagesSlice.reducer