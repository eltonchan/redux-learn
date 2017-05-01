/**
 * Created by mac on 2017/5/1.
 */

import React from 'react';
import ReactDom from 'react-dom';
import Test from './components/Test.js';
import './css/index.scss';

ReactDom.render(
    <Test />,
    document.getElementById('content')
);