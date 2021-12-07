import React, {Component} from 'react';

class ClassCounter extends Component {

    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

   plus() {
        this.setState({count: this.state.count + 1})
    }

    minus() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={ this.plus }>Plus</button>
                <button onClick={ this.minus }>Minus</button>
            </div>
        );
    }
}

export default ClassCounter;