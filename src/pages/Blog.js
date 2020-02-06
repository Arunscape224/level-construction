import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Blog = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const styles = {
        container: {
            // height: '300px', 
            color: theme.syntax,
            width: '100%',
            // border: `2px solid ${theme.ui}`,
            paddingTop: '30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            paddingLeft: '100px',
            paddingRight: '100px'
        },
        ptag: {
            fontSize: '15px'
        }
    }
    return (
    <div style={styles.container}>
         Blog Goes Here
    </div>
    )
}

export default Blog