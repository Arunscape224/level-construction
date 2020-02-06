import React, {useContext} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { UIContext } from '../../context/UIContext'
import { ThemeContext } from '../../context/ThemeContext'
import { withStyles } from "@material-ui/core/styles";
import { HashLink as Link } from 'react-router-hash-link';


const styles = {
    ['@media (max-width:780px)']: {
       links: {
           display: 'none'
       }
    }
}

const NavLinks = ({ classes }) => {
    const { value, clickTabLink } = useContext(UIContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark  

    const styles = {
        links: {
            marginLeft: "auto",
            marginTop: '20px'
        }
    }

    return (
        <span className= { classes.links } 
              style={ styles.links }>
            <Tabs value={value} 
                  onChange={clickTabLink}
                  TabIndicatorProps={{style: { backgroundColor: theme.ui }}}>
                <Tab label={<h3 style={{ color: theme.syntax, fontWeight: 'normal'  }}>about</h3> } 
                     component={Link} 
                     to='/about' /> 
                <Tab label={<h3 style={{ color: theme.syntax, fontWeight: 'normal'  }}>blog</h3> } 
                     component={Link} 
                     to='/blog' /> 
                <Tab label={<h3 style={{ color: theme.syntax, fontWeight: 'normal'  }}>lookbook</h3> } 
                     component={Link} 
                     to='/lookbook' />
            </Tabs>
        </span>
    )
}

export default withStyles(styles)(NavLinks)