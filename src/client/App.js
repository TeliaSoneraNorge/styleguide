import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Routes from './Routes';

const history = createHistory();

const App = (props) =>
    <BrowserRouter history={history}>
        <Routes />
    </BrowserRouter>;

export default App;
