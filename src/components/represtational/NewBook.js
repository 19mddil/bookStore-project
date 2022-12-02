import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: null,
            writer: null,
            description: null,
        }
        this.textHandler = this.textHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    textHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    submitHandler = event => {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Book entry</h1>
                <form onSubmit={this.submitHandler}>
                    <label>Book Name:</label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={this.textHandler} />
                    <br />
                    <label>Writer Name:</label>
                    <br />
                    <input type="text" name="writer" value={this.state.writer} onChange={this.textHandler} />
                    <br />
                    <label>Description:</label>
                    <br />
                    <textarea name="description" value={this.state.description} onChange={this.textHandler} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewBook;