/**
 * Created by mac on 2017/5/1.
 */
import { combineReducers } from 'redux';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../action/topic';

function counter(state ={ count:0,text:'' }, action) {
    const count = state.count;
    switch (action.type){
        case 'ADD':
            return {
                count: count + 1,
                text: action.text
            };
        case 'CUT':
            return {
                count: (count -1) > 0 ? count -1 : 0,
                text: action.text
            };
        default:
            return state;
    }

}

function add_item(state = [],action) {
    switch (action.type){
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    text:action.text
                }
            ];
        default:
            return state;
    }
}

function posts(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

/**
 * 使用这个方法后 state 的对象就是 state:{
 *      counter:{},
 *      add_item:[]
 * }
 */
const todoApp = combineReducers({
    counter,
    add_item,
    posts
});

export default todoApp