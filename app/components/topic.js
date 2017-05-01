/**
 * Created by mac on 2017/5/1.
 */
/**
 * Created by mac on 2017/5/1.
 */
import React, { Component } from 'react';

export default class Topic extends Component {
    render(){
        const { topic } = this.props;
        return (
            <div>
                <div style={{display:topic.isFetching ? 'block' : 'none'}}>loading</div>
                <ul>
                    {
                        topic.items && topic.items.length > 0 && topic.items.map((item,key)=>{
                            return <li key={key}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}