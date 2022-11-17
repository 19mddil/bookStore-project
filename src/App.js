import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import './stylesheets/Book.css'

//JSX
class App extends Component {
  state = {
    books: [
      { bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
      { bookName: "The Lean StartUp", writer: "Eric Ries" },
      { bookName: "The Godfather", writer: "Mark Paulo" }
    ],
  }

  deleteBook = index => {
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 style={{
          color: "grey",
          backgroundColor: "black",
          marginLeft: "40%",
          marginRight: "40%",
          padding: "5px",
        }}>BOOKLIST</h1>

        {
          this.state.books.map((book, index) => {
            return (
              <Book
                bookName={book.bookName}
                writer={book.writer}
                delete={this.deleteBook.bind(this, index)}
              />
            )
          })
        }
      </div>
    );
  }

}

export default App;
