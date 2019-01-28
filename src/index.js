// @vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// @containers
import Homepage from './containers/homepage';
import Login from './containers/login';

window.onload = () => {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Route path="/" exact component={Homepage} />
                <Route path="/login" component={Login} />
            </div>
        </BrowserRouter>,
        document.querySelector('#root')
    );
};