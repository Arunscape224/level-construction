import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const HomeGrid = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    const styles = {
        container: {
            height: '1000px', 
            width: '100%',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        column: {
            flex: '1',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
        },
        row1: {
            flex: '1.4',
            border: `2px solid ${theme.border}`,
            margin: '10px',
            background: 'url(./kitchen-projects/DSC_0072.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        },
        row2: {
            flex: '1',
            border: `2px solid ${theme.border}`,
            background: 'url(./interior-projects/bathroom-projects/DSC_0061.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '10px'
            
        },
        row4: {
            flex: '1.4',
            border: `2px solid ${theme.border}`,
            background: 'url(./Interior-projects/bathroom-projects/DSC_0141-e1434846623829.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

            margin: '10px'
        },
        row3: {
            flex: '1',
            background: 'url(./interior-projects/bathroom-projects/DSC_0129.jpg)',
            border: `2px solid ${theme.border}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            margin: '10px'
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.column}>
                <div style={styles.row1}></div>
                <div style={styles.row2}></div>
            </div>
            <div style={styles.column}>
                <div style={styles.row3}></div>
                <div style={styles.row4}></div>
            </div>
        </div>
    )
}
export default HomeGrid