// 1. take a configure store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./featuresorsliceorreducer/todos";

export const store = configureStore({
    reducer: todoReducer
})