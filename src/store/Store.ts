import { configureStore } from "@reduxjs/toolkit";
import BookStoreReducer from "../slice/BookStoreSlice";


const store = configureStore({
  reducer: BookStoreReducer
});

export default store;