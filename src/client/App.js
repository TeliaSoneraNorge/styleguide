import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Routes from './Routes';

//import styleguideComponentStyles from '../components/index.css';
//import styleguideCustomStyles from './css/index.css';

const history = createHistory();

const App = (props) =>
    <BrowserRouter history={history}>
        <Routes />
    </BrowserRouter>;

export default App;
