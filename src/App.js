import React from 'react';
import './App.css';
import './stylesheets/Book.css'
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

//JSX
const App = () => (
    <BrowserRouter>
        <MainComponent />
    </BrowserRouter>
)

export default App;
