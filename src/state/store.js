import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import DatabaseService from '../services/DatabaseService';
import rootSaga from './sagas/index';
import rootReducer from './reducers/index';

/**
 * The current version of the app/store. This will be used to invalidate
 * older caches once a new app version is deployed.
 */
const currentStoreVersion = process.env.REACT_APP_UI_VERSION;

/**
 * Maximum storage available for the store (5 MB).
 */
const STORE_MAX_SIZE = 5 * 1024 * 1024;

/**
 * Persist state to local Storage, to facilitate browser refresh.
 */
const persistedState = DatabaseService.loadState();

/**
 * Setup the middleware to watch between the Reducers and the Actions.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Redux DevTools - dev only.
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Register saga middleware to bridge actions & reducers.
 */
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

/**
 * Default export for the app's store management.
 */
export default (() => {
  // Creates the Redux reducer with the redux-saga middleware, and redux dev tools support
  const store = createStore(
    rootReducer,
    canImportSavedState(persistedState) ? persistedState.state : {},
    enhancer // Redux DevTools  and Saga middleware
  );

  //On state change update/load state to localStorage
  store.subscribe(throttle(() => {
    let state = getStateToSave(store);
    if (getStoreSize(state) < STORE_MAX_SIZE) {
      DatabaseService.saveState(state);
    }
  }), 1000);

  // Create hook for async sagas
  store.async = {};

  // Begin our Index Saga
  store.runSaga = sagaMiddleware.run(rootSaga);

  return store;
})();

/**
 * Wraps the state object in a container object with
 * additional metadata such as current version.
 * @param {object} store
 */
function getStateToSave(store) {
  let state = { ...store.getState() };
  return {
    version: currentStoreVersion,
    state: state
  };
}

/**
 * Checks if the saved state can be imported onto/applied to
 * default definitions.
 * In case of a mismatch, it also clears logged-in session and stale state.
 *
 * @param {object} savedState
 */
function canImportSavedState(savedState) {
  const canImport = savedState && savedState.version && savedState.version === currentStoreVersion;
  if (!canImport) {
    DatabaseService.clearAll();
  }
  return canImport;
}

/**
 * Returns total size of the store.
 * @param {object} store
 */
function getStoreSize(store) {
  return (new TextEncoder().encode(JSON.stringify(store))).length;
}
