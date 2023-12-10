import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./Reducers/UserReducer.js";
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
        userState: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})