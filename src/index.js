import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxLogger from 'redux-logger'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/app/App";
import root from './reducers'

const savedState = JSON.parse(localStorage.getItem("state")) || {};
const store = applyMiddleware(ReduxLogger)(createStore)(root, savedState);
store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()))
});
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
