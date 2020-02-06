import React, { Component, createContext } from 'react'
export const UIContext = createContext()

class UIContextProvider extends Component {
    state = {
        value: false     
    }

    clickTabLink = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }

    clickHome = () => {
        this.setState({
            value: false
        })
    }

    render() {
       return (
        <UIContext.Provider value = {{ ...this.state, clickTabLink: this.clickTabLink, clickHome: this.clickHome }}>
            {this.props.children}
        </UIContext.Provider>
       )
    }
}

export default UIContextProvider