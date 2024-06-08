const { createSlice } = require("@reduxjs/toolkit")

const INITIAL_STATE = { token: '' }

const usersSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setJwtToken(state, action) {
            state.token = action.payload
        },
        removeJwtToken(state) {
            state.token = ''
        }

    }
})

export const {setJwtToken , removeJwtToken} = usersSlice.actions
export default usersSlice.reducer