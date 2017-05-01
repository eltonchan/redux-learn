/**
 * Created by mac on 2017/5/1.
 */
import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

//  获取主题
export function requestPosts() {
    return {
        type: REQUEST_POSTS
    }
}

export function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        posts: json.data,
        receivedAt: Date.now()
    }
}

export function fetchPosts() {
    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。
    return function (dispatch) {
        // 首次 dispatch：更新应用的 state 来通知
        // API 请求发起了。
        dispatch(requestPosts());
        // thunk middleware 调用的函数可以有返回值，
        // 它会被当作 dispatch 方法的返回值传递。
        // 这个案例中，我们返回一个等待处理的 promise。
        // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
        return fetch('https://cnodejs.org/api/v1/topics?page=1&limit=3')
            .then(response => response.json())
            .then(json =>
                dispatch(receivePosts(json))
            );
    }
}
