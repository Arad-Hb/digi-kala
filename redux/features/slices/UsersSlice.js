const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = { firstName:" ",lastName:" ",age:0,mobile:0,jwt:" " }

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: INITIAL_STATE,
    reducers: {
        setJwtToken(state, action) {
            state.jwt = action.payload
        },
        removeJwtToken(state) {
            state.token = ''
            state.firstName = ''
            state.lastName = ''
            state.age = ''
            state.mobile = ''
        },
        setUserData(state,action) {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.age = action.payload.age
            state.mobile = action.payload.mobile
        }

    }
})

export const {setJwtToken , removeJwtToken,setUserData} = usersSlice.actions
export default usersSlice.reducer