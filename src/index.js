import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxLogger from 'redux-logger'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/app/App";
import root from './reducers'
import {restoreState, saveState} from "./shared/localstorage";

const LOCAL_STORAGE_KEY = "state";
const store = applyMiddleware(ReduxLogger)(createStore)(root, restoreState(LOCAL_STORAGE_KEY));
store.subscribe(() => saveState(store, LOCAL_STORAGE_KEY));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
