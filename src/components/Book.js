import React from 'react';
import '../stylesheets/Book.css'

const Book = props => (
    <div className='Book'>
        <h2 >{props.bookName}</h2>
        <h4 onClick={props.change} >{props.writer}</h4>
        <input hidden={!(props.hide === 'false')} type="text" onChange={props.inputName} value={props.writer} />
    </div>
)

export default Book;