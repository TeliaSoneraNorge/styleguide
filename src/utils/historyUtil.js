import createHistory from 'history/createBrowserHistory';

// create history in separate module so it works properly with HMR.
const history = createHistory();

export {
    history
};