import React from 'react';
import ReactDOM from 'react-dom';
import objectFitImages from 'object-fit-images';
import { AppContainer } from 'react-hot-loader'; // The wrapper component for HMR

import App from './App';
import { getIEVersion } from './browserHelpers';
import svg4everybody from 'svg4everybody';

if (getIEVersion()) {
    require('picturefill');
}

const mountElement = document.getElementById('root');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        mountElement
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    require('../../dist/public/css/bundle.components.css');
    // require('../../component-lib/src/index.pcss');
    require('./css/index.pcss');

    module.hot.accept('./App', () => {
        ReactDOM.unmountComponentAtNode(mountElement);
        const NextApp = require('./App').default;
        render(NextApp);
    });
}

// Method for displaying svg sprites in IE10-11 
svg4everybody();
// Method for object-fit polyfill
objectFitImages();

