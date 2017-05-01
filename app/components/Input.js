/**
 * Created by mac on 2017/5/1.
 */

import React, { Component, PropTypes } from 'react';

export default class Input extends Component {
    handlerClick(){
        const { onAddClick} = this.props;
        var value = this.refs.input.value;
        value && onAddClick(value);
    }
    render (){
        return (
            <div className="input_con">
                <input type="text" ref="input"/>
                <button onClick={this.handlerClick.bind(this)}>add item</button>
            </div>
        )
    }
}

Input.propTypes = {
    onAddClick: PropTypes.func.isRequired
};








