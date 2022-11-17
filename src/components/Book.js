import React from 'react';
import '../stylesheets/Book.css'

const Book = props => (
    <div className='Book'>
        <h2 onClick={props.delete} >{props.bookName}</h2>
        <h4 >{props.writer}</h4>
    </div>
)

export default Book;