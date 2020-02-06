import React, { useContext } from 'react'
import Switch from '@material-ui/core/Switch'
import { ThemeContext } from '../context/ThemeContext'

const ThemeSwitch = () => {
    const { toggleTheme, isLightTheme, light, dark  } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <Switch onChange = { toggleTheme }
                color = "default"
                style = {{ color: theme.ui }}/>
    )
}

export default ThemeSwitch