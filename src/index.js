import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxLogger from 'redux-logger'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/app/App";
import root from './reducers'

render(
    <Provider store={applyMiddleware(ReduxLogger)(createStore)(root)}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
