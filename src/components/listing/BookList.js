import React, { Component } from "react";
import Book from '../represtational/Book';
import { Link } from "react-router-dom";

class BookList extends Component {

    render() {
        return (
            this.props.books.map((book, index) => {
                return (
                    <Link to={"/book/" + book.id} className="BookLink">
                        <Book
                            bookName={book.bookName}
                            writer={book.writer}
                            selectedBookHandler={() => this.props.selectedBookHandler(index)}
                            key={book.id}
                            index={book.id}
                            inputStateChange={event => this.props.inputStateChange(event, index)}
                            updateIndex={this.props.updateIndex}
                        />
                    </Link>
                )
            })
        );

    }
}
export default BookList;