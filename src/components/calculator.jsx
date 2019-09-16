import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Calculator extends Component {
    // state = {
    //     value_one: 0,
    //     value_two: 0,
    //     result: 0
    // }
    // addValues = () => this.setState({ result: this.state.value_one + this.state.value_two });
    // subValues = () => this.setState({ result: this.state.value_one - this.state.value_two });
    // divideValues = () => this.setState({ result: this.state.value_one / this.state.value_two });

    // updateState = e => {
    //     this.setState({ [e.target.name]: parseInt(e.target.value), [e.target.name]: parseInt(e.target.value) });
    // }


    addValues = ()=> {
        // const val1 = this.textInput1.current.value;
        // const val2 = this.textInput2.current.value;
        // ref={this.textInput1}
        this.props.dispatch({
            type: 'ADD',
            valueOne: 5,
            valueTwo: 1000           
        })
    }
    render() {
        const propsVal = this.props;
        return (
            <div>
                <input type="text" id="ip_value_one" name="value_one" onChange={this.addValues}/>
                <br />
                <input type="text" id="ip_value_two" name="value_two" onChange={this.addValues}/>
                <br />
                <button onClick={this.addValues}>Add</button>
                {/* <button onClick={this.subValues}>Substract</button>
                <button onClick={this.divideValues}>Divide</button> */}
                <br />
                <span id="result">{this.props.result}</span>
            </div>
        );
    }
} 

//mapsStateToProps & mapsDispatcherToProps
//const mapsStateToProps = (state, props) => ({ result: state.result })

export default connect(state => ({ result: state.result }), null) (Calculator);
