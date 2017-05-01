/**
 * Created by mac on 2017/5/1.
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import './css/index.scss';
import App from './container/App';
import InputCon from './container/Input';
import todoApp from './reducers/counter';
// Store
const store = createStore(todoApp);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <InputCon />
        </div>
    </Provider>,
    document.getElementById('root')
);