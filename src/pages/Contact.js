import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TextField } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from "@material-ui/core/Grid"


const Contact = () => {
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
            justifyContent: 'center',
            textAlign: 'center'
        },
        text: {
            fontFamily: 'MAD hacker Italic'
        },
          focused: {},
          notchedOutline: { border: '2px solid gray' },
          outlinedInput: {
            "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                borderColor: 'purple'
              },
            '&$focused $notchedOutline': {
              border: '2px solid #beacf4'
            },
          }
         
    }
    return (<div id="about" style={styles.container}>
         <Card style={{backgroundColor: theme.bg, color: theme.syntax}}>
            <CardHeader title={<h1 className={theme.syntax}>Send Us An Email!</h1>}/>
            <CardHeader title={<p className={theme.syntax}>We love hearing from our customers, let us know what you think!</p>}/>
            <CardContent style={{ width: '100%' }}>
                <Grid container direction="column">
                <TextField
                                fullWidth
                                  type="text"
                                  variant="outlined"
                                  label='Name'
                                  InputLabelProps={{
                                    style: { color: theme.syntax }}}
                                    InputProps={{ 
                                        style: {
                                          color: theme.syntax,
                                          marginBottom: '20px'
                                        },
                                        classes: {
                                          root: styles.outlinedInput,
                                          focused: styles.focused,
                                          notchedOutline: styles.notchedOutline,
                                        }}}/>

                                <TextField
                                fullWidth
                                  type="text"
                                  variant="outlined"
                                  label='Email'
                                  InputLabelProps={{
                                    style: { color: theme.syntax }}}
                                    InputProps={{ 
                                        style: {
                                          color: theme.syntax,
                                          marginBottom: '20px'
                                        },
                                        classes: {
                                          root: styles.outlinedInput,
                                          focused: styles.focused,
                                          notchedOutline: styles.notchedOutline,
                                        }}}/>
                                        <TextField
  placeholder="message here"
  variant="outlined"
  InputLabelProps={{
    style: { color: theme.syntax }}}
    InputProps={{ 
        style: {
          color: theme.syntax,
          marginBottom: '20px'
        },
        classes: {
          root: styles.outlinedInput,
          focused: styles.focused,
          notchedOutline: styles.notchedOutline,
        }}}
  multiline={true}
  rows={2}
  rowsMax={4}
/>
                </Grid>
            </CardContent>
        </Card>
    </div>)
}

export default Contact