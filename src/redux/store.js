
import { configureStore } from '@reduxjs/toolkit'
import orderReducers from './orderslice'

export const store = configureStore({

    reducer:{
        order:orderReducers,
    }

})




