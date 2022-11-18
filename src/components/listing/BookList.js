import React from "react";
import Book from '../represtational/Book'

const BookList = props => {
    return (
        props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => props.deleteBook(index)}
                    key={book.id}
                    inputStateChange={event => props.inputStateChange(event, index)}
                />
            )
        })
    );
}
export default BookList;