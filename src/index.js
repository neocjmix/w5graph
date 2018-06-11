import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import ReduxLogger from 'redux-logger'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/app/App";
import root from './reducers'
import {restoreState, saveState} from "./shared/localStorageSynchronizer";

const LOCAL_STORAGE_KEY = "state";
const store = createStore(
    root,
    compose(
        applyMiddleware(ReduxLogger),
        next => (reducer, initialState, enhancer) => {
            const restoredState = restoreState(LOCAL_STORAGE_KEY);
            const store = next(reducer, (restoredState == null) ? initialState: restoredState, enhancer);
            store.subscribe(() => saveState(store.getState(), LOCAL_STORAGE_KEY));
            return store;
        }
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
