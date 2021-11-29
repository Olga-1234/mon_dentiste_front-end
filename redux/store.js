import { configureStore } from "@reduxjs/toolkit";
import Article from "./articleSplice"

export const store = configureStore({
    reducer:{
        Article
    }
})