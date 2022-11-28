import React, { Component } from 'react';
import BookList from '../assets/books'
import BookLists from './listing/BookList'

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: BookList,
            showBooks: true,
            updateIndex: null,
        }
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
            updateIndex: index,
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
                        <BookLists books={this.state.books} deleteBook={this.deleteBook} inputStateChange={this.inputStateChange} updateIndex={this.state.updateIndex} />
                        : null
                }
            </div>
        );
    }

}
export default MainComponent;