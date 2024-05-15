const { createSlice } = require("@reduxjs/toolkit");

const INITIAL_STATE={topBanner:{},mainSlider:{},carousel:{},sevenIcons:{}}
const StaticImageSlice=createSlice({
    name: "StaticImageSlice",
    initialState: INITIAL_STATE,
    reducers: {
        AddToppBannerImage:(state , action)=>{
            
        }
    }
})