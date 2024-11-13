import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'urlShortener',
    initialState: {
        inputUrl: '',
        shortUrl: '',
        allUrls: null
    },
    reducers: {
        setInputUrl(state, action) {
            state.inputUrl = action.payload;
        },
        setShortUrl(state, action) {
            state.shortUrl = action.payload.shortUrl;
            state.allUrls = {
                ...state.allUrls,
                [action.payload.shortUrl]: action.payload.inputUrl
            }
        }
    }
});

export const { setInputUrl, setShortUrl } = slice.actions;
export default slice.reducer;