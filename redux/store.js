import { configureStore } from "@reduxjs/toolkit";
import Article from "./articleSplice"
import Login from "./loginSplice"

export const store = configureStore({
    reducer:{
        Article,
        Login

    }
})