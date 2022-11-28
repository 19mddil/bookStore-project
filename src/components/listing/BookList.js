import React, { Component } from "react";
import Book from '../represtational/Book'

class BookList extends Component {

    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Book
                        bookName={book.bookName}
                        writer={book.writer}
                        delete={() => this.props.deleteBook(index)}
                        key={book.id}
                        index={book.id}
                        inputStateChange={event => this.props.inputStateChange(event, index)}
                        updateIndex={this.props.updateIndex}
                    />
                )
            })
        );

    }
}
export default BookList;