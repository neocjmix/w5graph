import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./components/app/App";
import root from './reducers'

const store = createStore(root);

render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root'));

registerServiceWorker();
