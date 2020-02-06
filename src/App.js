import React, { useContext } from 'react';
import { 
         BrowserRouter as Router, 
         Route, 
         Switch,
        } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Nav from './components/Nav/Nav'
import LookBook from './pages/LookBook'      
import Container from '@material-ui/core/Container';
import Footer from './components/Footer/Footer'
import { ThemeContext } from './context/ThemeContext';

export default function App() {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  document.querySelector('html').style.backgroundColor = theme.bg
  return (
    <Router>
      <Container style={{ background: theme.bg,
                        height: '100vh' }}>
      <Nav />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/blog" component={ Blog } />
        <Route exact path="/lookbook" component={ LookBook } />
      </Switch>
      <Footer />
    </Container>
  </Router>
  )
}