import localStorage from 'redux-persist/lib/storage' 
import sessionStorage from 'redux-persist/lib/storage/session' 
import CounterSlice from "./features/slices/CounterSlice" 
import shoppingCartSlice from "./features/slices/shoppingCartSlice"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import UsersSlice from './features/slices/UsersSlice'
import menuSlice from './features/slices/menuSlice'
import StaticImagesSlice from './features/slices/StaticImagesSlice'

const configuration = {
    key : "globalStorage" ,
    storage:localStorage,
    blacklist:['userReducer']
}
const sessionStorageConfig = {
    key : "globalStorage" ,
    storage : sessionStorage
}


const rootReducer = combineReducers({
    counterReducer:CounterSlice,
    shoppingReducer:shoppingCartSlice,
    userReducer: persistReducer (sessionStorageConfig , UsersSlice),
    menuReducer:menuSlice,
    staticImagesReducer:StaticImagesSlice
})


const persistableReducer = persistReducer(configuration , rootReducer)

export const Store = configureStore ({
    reducer : persistableReducer
})

export const persistor = persistStore(Store)
