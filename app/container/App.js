/**
 * Created by mac on 2017/5/1.
 */
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import {Add, Cut} from '../action/Calc';

function mapStateToProps(state) {
    return {
        value: state.counter.count,
        text: state.counter.text
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick:()=>{
            dispatch(Add('add'));
        },
        onCutClick:()=>{
            dispatch(Cut('cut'));
        }
    }
}
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default App;