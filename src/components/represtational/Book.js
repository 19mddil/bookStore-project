import React, { Component } from 'react';
import '../../stylesheets/Book.css'

class Book extends Component {
    constructor(props) {
        super(props);
        console.log("Book Component Constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("Book component willmount");
    }
    componentDidMount() {
        console.log("Book component did mount");
    }

    render() {
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