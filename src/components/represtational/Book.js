import React, { Component } from 'react';
import '../../stylesheets/Book.css'

class Book extends Component {

    UNSAFE_componentWillMount() {
        console.log("Book component willmount");
    }
    componentDidMount() {
        console.log("Book component did mount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("Book componentWillReceiveProp");
        console.log(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Book shouldComponentUpdate");
        console.log(nextProps);
        return !(nextProps.Index === nextProps.updateIndex);
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Book componentWillUpdate");
        console.log(nextProps);
    }

    componentDidUpdate() {
        console.log("Book componentDidUpdate");
    }

    render() {
        console.log("render()");
        return (
            <div className='Book'>
                <h2 onClick={this.props.delete} >{this.props.bookName}</h2>
                <h4 >{this.props.writer}</h4>
                <input type="text" onChange={this.props.inputStateChange} />
            </div>
        )
    }
}

export default Book;