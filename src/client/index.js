import React from 'react';
import ReactDOM from 'react-dom';
import objectFitImages from 'object-fit-images';
import { AppContainer } from 'react-hot-loader'; // The wrapper component for HMR

import App from './App';
import { getIEVersion } from './browserHelpers';

if (getIEVersion()) {
    require('picturefill');
}

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    require('../../dist/public/css/bundle.components.css');
    // require('../../component-lib/src/index.pcss');
    require('./css/index.pcss');

    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}

// Method for object-fit polyfill
objectFitImages();
