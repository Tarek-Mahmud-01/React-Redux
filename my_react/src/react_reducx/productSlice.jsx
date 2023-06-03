import { createSlice } from "@reduxjs/toolkit";

const initialState={
data:[],

};
const productSlice=createSlice({
name:"products",
initialState,
reducers: {

    TodoProducts(state, action) {
      
        state.data=action.payload;
      
     
      },



//     TodoProducts(state,action){
// state.data=action.payload;

// }
     }

})
export const{TodoProducts} =productSlice.actions;
export default productSlice.reducer;
export function getProducts(){
    // return async function getProductsThunk(dispatch, getState) {
    //     const data = await fetch('https://fakestoreapi.com/products');
    //     const  result=data.json();
    //     dispatch(TodoProducts(result));


    // }
    return async function getProductsThunk(dispatch, getState) 
    {
      let response = await fetch('https://fakestoreapi.com/products');
      let data = await response.json();
      dispatch(TodoProducts(data));

    }


}

// import { createSlice } from '@reduxjs/toolkit'
// const initialState=[];
// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     // add: (state) => {
//     //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
//     //   // doesn't actually mutate the state because it uses the Immer library,
//     //   // which detects changes to a "draft state" and produces a brand new
//     //   // immutable state based off those changes
//     //   state.value += 1
//     // },
//     // decrement: (state) => {
//     //   state.value -= 1
//     // },
//     add: (state, action) => {

//       state.push(action.payload)
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const {add} = cartSlice.actions

// export default cartSlice.reducer