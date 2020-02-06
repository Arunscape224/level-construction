import React, { Component, createContext } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: false,
        light: { syntax: '#555', ui: '#ACACAC', bg: '#FAFAFA', border: '#ACACAC'},
        dark: { syntax: 'black', ui: '#333', bg: 'rgba(174,174,178, 1)', border: 'white'}
    }
    toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    render() {
       return (
        <ThemeContext.Provider value = {{ ...this.state, toggleTheme: this.toggleTheme }}>
            {this.props.children}
        </ThemeContext.Provider>
       )
    }
}

export default ThemeContextProvider