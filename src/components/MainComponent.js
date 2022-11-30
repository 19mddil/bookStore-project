import React, { Component } from 'react';
import BookList from '../assets/books';
import BookLists from './listing/BookList';
import NewBook from './represtational/NewBook';
import { Routes, Route, NavLink } from 'react-router-dom';
import BookDetail from './represtational/BookDetail';

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: BookList,
            updateIndex: null,
            selectedBook: null,
        }
    }

    selectedBookHandler = index => {
        const book = this.state.books.filter(book => book.id === index + 1)[0];
        this.setState({
            selectedBook: book,
        })
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
    render() {
        const books = (<BookLists books={this.state.books} selectedBookHandler={this.selectedBookHandler} inputStateChange={this.inputStateChange} updateIndex={this.state.updateIndex} />);
        return (
            <div className="App">
                <nav className='nav-bar'>
                    <ul>
                        <li><NavLink to='/' >Home</NavLink></li>
                        <li><NavLink to='/book' >Books</NavLink></li>
                        <li><NavLink to='/newBook' >+Add New Book</NavLink></li>
                    </ul>
                </nav>
                <h1 className="Heading"> BOOKLIST </h1>
                <Routes>
                    <Route path='/' element={(<div><h1>Home</h1></div>)} />
                    <Route path='/book' element={books} />
                    <Route path='/newBook' element={<NewBook />} />
                </Routes>
                <BookDetail book={this.state.selectedBook} />
            </div>
        );
    }

}
export default MainComponent;