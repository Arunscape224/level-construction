import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import UIContextProvider from './context/UIContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import ThemeContextProvider from './context/ThemeContext'


ReactDOM.render(
    <ThemeContextProvider>
        <UIContextProvider>
            <CssBaseline />
            <App />
        </UIContextProvider>
    </ThemeContextProvider>, document.getElementById('root'));