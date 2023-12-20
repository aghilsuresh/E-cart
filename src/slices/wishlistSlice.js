import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],//wishlist have morethan one item
    reducers:{
        //actions
        //function/logic to add items to wishlist array
        addToWishlist:(state,action)=>{
            state.push(action.payload)

        },
        //function to remove from wishlist
        removeFromWishList:(state,action)=>{
            //filter returns a new aray satisfing the condition inorder to add the new array into state we need return it
          return state.filter(item=>item.id!=action.payload)

        }
    }
})
export const {addToWishlist,removeFromWishList}= wishlistSlice.actions
export default wishlistSlice.reducer
