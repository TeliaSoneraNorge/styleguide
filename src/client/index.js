import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'; // The wrapper component for HMR

import 'picturefill';
import App from './App';
import rootReducer from './reducers';

const initialState = window.__INITIAL_STATE__;
const store = createStore(rootReducer, initialState);

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
    require('../components/index.pcss');
    require('./css/index.pcss');

    module.hot.accept('./App', () => render(App));
}