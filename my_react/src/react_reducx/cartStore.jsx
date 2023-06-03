

import { configureStore } from '@reduxjs/toolkit';

import cartSlice from "./cartSlice";
import productSlice from './productSlice';

const store=configureStore({

    reducer:{
        cart:cartSlice,
        products:productSlice
    }
});
export default  store;




// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from "./cartSlice"

// export default configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// })
