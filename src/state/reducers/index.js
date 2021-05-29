import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar';
import globalReducer from './globalReducer';

/**
 * Root reducer for the application post user login.
 * @param {Object} state
 * @param {Object} action
 */
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

/**
 * Combines all the reducers for the app.
 */
const appReducer = combineReducers({
    form: formReducer,
    loadingBar: loadingBarReducer,
    global: globalReducer
});

export default rootReducer;
