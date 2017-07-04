import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    colors: (state = null, action) => state,
    variablesCss: (state = null, action) => state
});

export default rootReducer;
