import Cookies from "js-cookie"

const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = {user:{}}

const UsersSlice = createSlice({
    name: 'UsersSlice',
    initialState: INITIAL_STATE,
    reducers: {
        setJwtToken(action) {
            Cookies.set('jwt',action.payload)
        },
        removeJwtToken(state) {
            state.user = {}
        },
        setUserData(state,action) {
            state.user = action.payload
        }

    }
})

export const {setJwtToken , removeJwtToken,setUserData} = UsersSlice.actions
export default UsersSlice.reducer