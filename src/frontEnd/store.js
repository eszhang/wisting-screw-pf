/**
 * root store
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(/* sagaMiddleware(), */ createLogger()),
        (window && window.devToolsExtension) ? window.devToolsExtension() : f => f
    )
);

// sagaMiddleware.run(rootSaga);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
        const nextRootReducer = require('./reducer');
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
