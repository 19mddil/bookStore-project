import React, { Component } from 'react';
import Book from './Book';

class MainComponent extends Component {
    state = {
        books: [
            { id: 1, bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
            { id: 2, bookName: "The Lean StartUp", writer: "Eric Ries" },
            { id: 3, bookName: "The Godfather", writer: "Mark Paulo" }
        ],
        showBooks: true,
    }

    deleteBook = index => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books,
        });
    }

    inputStateChange = (event, index) => {
        const book = {
            ...this.state.books[index],
            writer: event.target.value,
        }
        const books = [...this.state.books];
        books[index] = book;

        this.setState({
            books: books,
        })

    }

    toggleShowbook = () => {
        this.setState({
            showBooks: !this.state.showBooks,
        })
        return;
    }

    render() {
        return (
            <div className="App">
                <h1 className="Heading"> BOOKLIST </h1>
                <button onClick={this.toggleShowbook}>Toggle Button</button><br />
                {
                    this.state.showBooks ?
                        this.state.books.map((book, index) => {
                            return (
                                <Book
                                    bookName={book.bookName}
                                    writer={book.writer}
                                    delete={this.deleteBook.bind(this, index)}
                                    key={book.id}
                                    inputStateChange={event => this.inputStateChange(event, index)}
                                />
                            )
                        })
                        : null
                }
            </div>
        );
    }

}
export default MainComponent;