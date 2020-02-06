import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const HomeText = () => {
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
                <h1>OUR BEGINNINGS</h1>
        <p style={styles.ptag}>Level Construction & Design was originally developed as a labor company for quality installations of natural stone, tile and hardwood flooring. This solid foundation and high rate of customer satisfaction has led Level Construction & Design to expand it’s business model further. Today Level Construction & Design has increased it’s capacity of business to include remodeling and additions.</p>
        <h1>OUR FOCUS</h1>
        <p style={styles.ptag}>Our focus is to give consumers the highest end look at very competitive prices. Our in house staff consists of degreed designers and a project management team with many years of experience. On the outside we employ a highly skilled labor team for all jobs, big or small. Our team understands how important your home is to you, which is why we work very hard to keep it clean, and of course smoke free. Level Construction &amp;amp; Design incorporates talented design with the latest products to transform your space into tomorrow’s dream.</p>
        <h1>OUR PROCESS</h1>
    <p style={styles.ptag}>There is no other business that people take quite so personally as construction. This begins with allowing strangers into your home and disrupting your normal activity. Not exactly a recipe for immediate success. Well then, how do we transform this intrusion into a great experience? We begin with good communication and planning. Being informed and avoiding surprises helps minimizes mistakes, to reach a successful job completion. Next we offer the highest quality products and services at a good value. We accomplish this by having great knowledge, resources and experience concerning all facets of the job. Lastly and most important is honesty, integrity which equals our commitment. Our words mean everything. When we commit and perform, we know we have served our client well. Please give LCD an opportunity to serve you well today.</p>
    </div>
    )
}

export default HomeText