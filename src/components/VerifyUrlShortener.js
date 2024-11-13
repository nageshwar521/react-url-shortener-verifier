// components/VerifyUrlShortener.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const VerifyUrlShortener = () => {
    const { allUrls } = useSelector(state => state);
    const [originalUrl, setOriginalUrl] = useState('');
    const [inputUrl, setInputUrl] = useState('');

    const handleChange = (e) => {
        setInputUrl(e.target.value);
    }

    const verifyShortUrl = () => {
        const actualUrl = allUrls ? allUrls[inputUrl] : 'Not exist';
        setOriginalUrl(actualUrl);
    }

    return (
        <div className="col-md-6">
            <h3>Verify Shortened URL</h3>
            <div className="form-group">
                <label>Enter Shortened URL</label>
                <input
                    type="text"
                    className="form-control"
                    value={inputUrl}
                    onChange={handleChange}
                />
            </div>
            <button className="btn btn-primary mt-2" onClick={verifyShortUrl}>
                Verify URL
            </button>
            <div className="mt-3">
                {
                    originalUrl && <>
                        <label>Original URL</label>
                        <p>{originalUrl || 'Not exist'}</p>
                    </>
                }
            </div>
        </div>
    );
};

export default VerifyUrlShortener;