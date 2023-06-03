import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const cartSlice=createSlice({

name:"cart",
initialState,
reducers: {
     add(state,action){
        state.push(action.payload)

    },
     remove(state,action){
       return state.filter(item=> item.id!==action.payload)

    },
     },

})
export const{add,remove} =cartSlice.actions;
export default cartSlice.reducer;

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