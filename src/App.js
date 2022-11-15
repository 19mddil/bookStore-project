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
    ],
    someOtherProps: "And I love her",
  }

  changeBookState = (bookWriter) => {
    this.setState({
      book: [
        { bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
        { bookName: "The Lean StartUp", writer: "Eric Ries" },
        { bookName: "The Godfather", writer: bookWriter }
      ]
    })
  }

  changeWithInputState = event => {
    this.setState({
      book: [
        { bookName: "Alchemy of Happiness", writer: "Imam Gazzali" },
        { bookName: "The Lean StartUp", writer: "Eric Ries" },
        { bookName: "The Godfather", writer: event.target.value }
      ]
    })
  }
  render() {
    const style = {
      color: "grey",
      backgroundColor: "black",
      marginLeft: "40%",
      marginRight: "40%",
      padding: "5px",
    }
    return (
      <div className="App">
        <h1 style={style}>BOOKLIST</h1>

        <button onClick={this.changeBookState.bind(this, "MARIO PAULO")}>Change State</button>
        <input type="text" onChange={this.changeWithInputState} />
        <Book
          bookName={this.state.book[0].bookName}
          writer={this.state.book[0].writer} />
        <Book
          bookName={this.state.book[1].bookName}
          writer={this.state.book[1].writer} />
        <Book
          bookName={this.state.book[2].bookName}
          writer={this.state.book[2].writer}
          change={this.changeBookState.bind(this, "mario paulo")}
          hide='false'
          inputName={this.changeWithInputState} />
      </div>
    );
  }
}

export default App;
