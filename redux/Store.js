import localStorage from 'redux-persist/lib/storage' 
import sessionstorage from 'redux-persist/lib/storage/session' 
import CounterSlice from "./features/slices/CounterSlice" 
import shoppingCartSlice from "./features/slices/shoppingCartSlice"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import UsersSlice from './features/slices/UsersSlice'
import menuSlice from './features/slices/menuSlice'

const configuration = {
    key : "globalStorage" ,
    storage:localStorage
}


const rootReducer = combineReducers({
    counterReducer:CounterSlice,
    shoppingReducer:shoppingCartSlice,
    usersReducer:UsersSlice,
    menuReducer:menuSlice
})


const persistableReducer = persistReducer(configuration , rootReducer)

export const Store = configureStore ({
    reducer : persistableReducer
})

export const persistor = persistStore(Store)

// import {configureStore} from "@reduxjs/toolkit"
// import CounterSlice from "./features/slices/CounterSlice"
// import shoppingCartSlice from "./features/slices/shoppingCartSlice"

// export const Store=configureStore({
//     reducer:{
//         counterReducer:CounterSlice,
//         shoppingReducer:shoppingCartSlice
//     }
// })