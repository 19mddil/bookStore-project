import React from 'react';

const Book = props => (
    <div>
        <h2>{props.bookName}</h2>
        <h4>{props.writer}</h4>
    </div>
)

export default Book;