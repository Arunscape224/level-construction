import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from "@material-ui/core/styles";
import { ThemeContext } from '../../context/ThemeContext';
import { UIContext } from '../../context/UIContext';
import { Link } from 'react-router-dom'
import NavLinks from './NavLinks'
import ThemeSwitch from '../ThemeSwitch'

const styles = {
    logo: {
        width: '250px',
        marginTop: '20px'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    ['@media (min-width:780px)']: {
       spacer: {
            display: 'none',
       },
       burger: {
           display: 'none'
       }
    },
    ['@media (max-width:780px)']: {
        toolbar: {
            justifyContent: 'space-between'
        },

    }
}

const Hamburger = (props) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const styles = {
        burgerdivs: {
            background: theme.ui,
            width: '40px',
            height: '3px',
            margin: '5px',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
        }
     }
    
    return (
        <div className={`burger ${props.className}`}>
                    <div style={styles.burgerdivs} className="line1"></div>
                    <div style={styles.burgerdivs} className="line2"></div>
                    <div style={styles.burgerdivs} className="line3"></div>
        </div>
    ) 
}

const Nav = ({ classes }) => {
    const { clickHome } = useContext(UIContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    
    let styles = {
        ThemeSwitch: {
            marginTop: '20px'
        }
    }

    return (
        <AppBar position="sticky" 
                style={{ 
                         background: theme.bg,
                         borderBottom: `2px solid ${theme.ui}`,
                         boxShadow: 'none',
                         paddingBottom: '20px'
                       }}>
            <Toolbar className={classes.toolbar}> 
            <Hamburger className={classes.burger}/>
                <Link to="/"
                      onClick={clickHome}>
                    <img className={ classes.logo }
                         src="./logo.png"
                         alt="logo" />
                </Link>    
                <NavLinks />
                <span style={styles.ThemeSwitch}><ThemeSwitch/></span>
               

            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Nav)