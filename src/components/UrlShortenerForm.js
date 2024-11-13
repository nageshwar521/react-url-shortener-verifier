// components/UrlShortenerForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputUrl, setShortUrl } from '../store/urlShortenerSlice';
import { generateShortString } from '../utils';

const UrlShortenerForm = () => {
    const dispatch = useDispatch();
    const { inputUrl, shortUrl, allUrls } = useSelector(state => state);

    const getShortenUrl = () => {
        const shortUrl = generateShortString();
        if (allUrls && allUrls[shortUrl]) return getShortenUrl();
        else return shortUrl;
    }

    const handleChange = (e) => {
        dispatch(setInputUrl(e.target.value));
    }

    const submitUrl = () => {
        const shortUrl = getShortenUrl();
        dispatch(setShortUrl({ shortUrl, inputUrl }));
    }

    return (
        <div className="col-md-6">
            <h3>Shorten URL</h3>
            <div className="form-group">
                <label>Enter URL</label>
                <input
                    type="text"
                    className="form-control"
                    value={inputUrl}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary mt-2" onClick={submitUrl}>
                Shorten URL
            </button>
            <div className="mt-3">
                <label>Shortened URL</label>
                <p>{shortUrl}</p>
            </div>
        </div>
    );
};

export default UrlShortenerForm;