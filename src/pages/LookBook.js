import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const LookBook = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (<div style={{ color: theme.syntax }}>LookBook</div>)
}

export default LookBook