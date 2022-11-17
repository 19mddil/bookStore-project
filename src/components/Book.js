import React from 'react';
import '../stylesheets/Book.css'

const Book = props => (
    <div className='Book'>
        <h2 onClick={props.delete} >{props.bookName}</h2>
        <h4 >{props.writer}</h4>
        <input type="text" onChange={props.inputStateChange} />
    </div>
)

export default Book;