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