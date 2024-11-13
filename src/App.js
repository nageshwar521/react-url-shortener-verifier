// App.js
import React from 'react';
import UrlShortenerForm from './components/UrlShortenerForm';
import VerifyUrlShortener from './components/VerifyUrlShortener';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center mb-4">URL Shortener & Verifier</h1>
        <UrlShortenerForm />
        <VerifyUrlShortener />
      </div>
    </div>
  );
};

export default App;