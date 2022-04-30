import { configureStore } from "@reduxjs/toolkit";
import Article from "./articleSplice"
import Login from "./loginSplice"
import Cabinet from "./cabinetSplice"
import User from "./userSlice"

export const store = configureStore({
    reducer:{
        Article,
        Login,
        Cabinet,
        User,


    }
})

