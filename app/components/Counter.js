/**
 * Created by mac on 2017/5/1.
 */
import React ,{ Component, PropTypes } from 'react';
// React component
export default class Counter extends Component {
    render() {
        const { value, text, onIncreaseClick, onCutClick } = this.props;
        return (
            <div className="test">
                <button onClick={onCutClick}>cut</button>
                <span>{value}</span><i>{ text }</i>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};