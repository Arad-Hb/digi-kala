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
        removeUserData(state) {
            state.user = {}
        },
        setUserData(state,action) {
            state.user = action.payload
        }

    }
})

export const {setJwtToken , removeUserData,setUserData} = UsersSlice.actions
export default UsersSlice.reducer