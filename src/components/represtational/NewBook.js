import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: null,
            writer: null,
            description: null,
        }
    }

    textHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    componentDidUpdate() {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h1>New Book entry</h1>
                <form>
                    <label>Book Name:</label>
                    <br />
                    <input type="text" name="bookName" value={this.state.bookName} onChange={(event) => this.textHandler(event)} />
                    <br />
                    <label>Writer Name:</label>
                    <br />
                    <input type="text" name="writer" value={this.state.writer} onChange={(event) => this.textHandler(event)} />
                    <br />
                    <label>Description:</label>
                    <br />
                    <textarea name="description" value={this.state.description} onChange={(event) => this.textHandler(event)} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewBook;