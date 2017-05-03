/**
 * Created by mac on 2017/5/1.
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import './css/index.scss';
import App from './container/App';
import InputCon from './container/Input';
import TopicCon from './container/TopicCon';
import todoApp from './reducers/counter';


// Store
const store = createStore(
    todoApp,
    applyMiddleware(
        thunkMiddleware, // 允许我们 dispatch() 函数
    )
);
window.global.getStroe = ()=> store ;

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <InputCon />
            <TopicCon />
        </div>
    </Provider>,
    document.getElementById('root')
);