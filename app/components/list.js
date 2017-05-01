/**
 * Created by mac on 2017/5/1.
 */
import React, { Component } from 'react';

export default class List extends Component {
    render(){
        const { list } = this.props;
        return (
            <ul>
                {
                    list && list.length > 0 && list.map((item,key)=>{
                        return <li key={key}>{item.text}</li>
                    })
                }
            </ul>
        )
    }
}