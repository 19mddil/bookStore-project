import React, { Component } from 'react';
import '../../stylesheets/Book.css'

class Book extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !(nextProps.index === nextProps.updateIndex);
    }

    render() {
        return (
            <div className='Book' onClick={this.props.selectedBookHandler}>
                <h2  >{this.props.bookName}</h2>
                <h4 >{this.props.writer}</h4>
                <input type="text" onChange={this.props.inputStateChange} />
            </div>
        )
    }
}

export default Book;