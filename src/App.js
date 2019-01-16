import React from 'react';
import Main from './components/Main';
import './App.css';

const APIKEY = 'fb5f00769fca3f5f0940ad49ea57081d';

const App = () => {
    return (
        <div className="container">
            <Main weather_api_key={APIKEY} />
        </div>
    );
};

export default App;
