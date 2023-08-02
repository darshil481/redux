import { configureStore } from "@reduxjs/toolkit";
import cardReducer from  './CardSlice'
import productReducer from './ProdcutSlice'
const store =configureStore({
    reducer:{
        cart :cardReducer, 
        product:productReducer,

    }
})
export default store;