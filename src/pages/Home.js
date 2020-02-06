import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import HomeCarousel from '../components/Carousels/HomeCarousel'
import HomeGrid from '../components/Banners/HomeGrid'
import HomeCenterText from '../components/Banners/HomeCenterText'
import HomeText from '../components/TextBlocks/HomeText'
import Contact from './Contact'
import { Element } from 'react-scroll'

const Home = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (<div style={{ color: theme.syntax }}>
                <HomeCarousel/>
                <HomeCenterText />
                <HomeGrid/>
               
                <Element id='about' name='about'>
                    <HomeText />
                </Element>
                <Contact />
            </div>)
}

export default Home