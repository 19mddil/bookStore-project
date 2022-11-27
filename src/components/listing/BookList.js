import React, { Component } from "react";
import Book from '../represtational/Book'

class BookList extends Component {

    constructor(props) {
        super(props);
        console.log("BookList Component Constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("BookList component willmount");
    }

    componentDidMount() {
        console.log("BookList component did mount");
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log("BookList componentWillReceiveProp: ", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("BookList shouldComponentUpdate, \nNextProps: ", nextProps, "\nNextState: ", nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("BookList componentWillUpdate, \nNextProps: ", nextProps, "\nNextState: ", nextState);
    }

    componentDidUpdate() {
        console.log("BookList componentDidUpdate");
    }

    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBook(index)}
                        key={book.id}
                        inputStateChange={event => this.props.inputStateChange(event, index)}
                    />
                )
            })
        );

    }
}
export default BookList;