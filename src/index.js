import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

window.onload = () => {
    ReactDOM.render(
        <HashRouter>
            <App />
        </HashRouter>,
        document.querySelector('#root')
    );
};