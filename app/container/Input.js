/**
 * Created by mac on 2017/5/1.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import List from '../components/list';
import addItem from '../action/input';

class InputCon extends Component {
    render(){
        const { dispatch, list, count} = this.props;
        return (
            <div>
                <Input onAddClick={text =>
                    dispatch(addItem(text))
                } />
                <List list={list} />
                {
                    count ? <span>{count}</span>:null
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        list:state.add_item,
        count:state.counter.count
    }
}


export default connect(mapStateToProps)(InputCon);