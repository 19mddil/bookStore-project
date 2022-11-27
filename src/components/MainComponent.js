import React, { Component } from 'react';
import BookList from '../assets/books'
import BookLists from './listing/BookList'

class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: BookList,
            showBooks: true,
        }
        console.log("MainComponent constructor");
    }

    UNSAFE_componentWillMount() {
        console.log("MainComponent componentWillMount")
    }

    componentDidMount() {
        console.log("MainComponent did mount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Main shouldComponentUpdate, \nNextProps: ", nextProps, "\nNextState: ", nextState);
        return true;
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log("Main componentWillUpdate, \nNextProps: ", nextProps, "\nNextState: ", nextState);
    }

    componentDidUpdate() {
        console.log("Main componentDidUpdate");
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
                        <BookLists books={this.state.books} deleteBook={this.deleteBook} inputStateChange={this.inputStateChange} />
                        : null
                }
            </div>
        );
    }

}
export default MainComponent;