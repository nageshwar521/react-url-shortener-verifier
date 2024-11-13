import { configureStore } from "@reduxjs/toolkit";
import urlShortenerSlice from "./urlShortenerSlice";

const store = configureStore({
    reducer: urlShortenerSlice
});

export default store;