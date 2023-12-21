import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:[],//hlds more than one item
    reducers:{
       //function to add items into cart
       addToCart:(state,action)=>{
        state.push(action.payload)
       },
       //function to remove item from the cart
       removeFromCart:(state,action)=>{
       return state.filter(item=>item.id!=action.payload)
       },

       //function to remove all item from cart
       emptyCart:(state)=>{
       return state=[]
       }
    }
})

export const {addToCart,removeFromCart,emptyCart} = cartSlice.actions

export default cartSlice.reducer