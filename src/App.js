import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

//JSX
class App extends Component {
  state = {
    book: [
      { bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
      { bookName: "The Lean StartUp", writer: "Eric Ries" },
      { bookName: "The Godfather", writer: "Mark Paulo" }
    ]
  }
  render() {
    // let obj = new Component();
    // console.log(obj);
    return (
      <div className="App">
        <h1>BookList</h1>
        <Book bookName={this.state.book[0].bookName} writer={this.state.book[0].writer} />
        <Book bookName={this.state.book[1].bookName} writer={this.state.book[1].writer} />
        <Book bookName={this.state.book[2].bookName} writer={this.state.book[2].writer} />
      </div>
    );
  }
}

export default App;
