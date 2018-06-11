import './index.css';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux'
import ReduxLogger from 'redux-logger'
import registerServiceWorker from './registerServiceWorker';
import App from "./components/app/App";
import root from './reducers'
import localStorageSynchronizer from "./enhancer/localStorageSynchronizer";

const store = createStore(
    root,
    compose(
        applyMiddleware(ReduxLogger),
        localStorageSynchronizer('state')
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
