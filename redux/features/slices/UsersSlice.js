const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = { firstName:" ",lastName:" ",age:0,mobile:0,token: '' }

const usersSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setJwtToken(state, action) {
            state.token = action.payload
        },
        removeJwtToken(state) {
            state.token = ''
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