/**
 * Created by mac on 2017/5/1.
 */
/**
 * Created by mac on 2017/5/1.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from '../components/topic';
import { fetchPosts } from '../action/topic';

class TopicCon extends Component {
    render(){
        const { topic, showTopic } = this.props;
        return (
            <div>
                <button onClick={showTopic}>show topic</button>
                <Topic topic={topic} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        topic:state.posts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showTopic:()=>{dispatch(fetchPosts())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopicCon);