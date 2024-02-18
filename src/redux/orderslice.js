import { createSlice } from "@reduxjs/toolkit"

const initialState={
    order:[]
}

const orderslice = createSlice({

    name:"order",
    initialState,
    reducers:{

        addtooredr:(state,action)=>{
            state.order.push(action.payload) 

        },
        removefromorder:(state,action)=>{
           state.order= state.order.filter(e=>e.name !== action.payload.name)
        }
    }
})

export default orderslice.reducer

export const {addtooredr,removefromorder}=orderslice.actions