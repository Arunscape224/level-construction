import React from 'react'

const HomeCenterText = () => {
    const styles = {
        container: {
            // height: '600px', 
            width: '100%',
            padding: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontStyle: 'italic'
        }
    }
    return (
        <div style={styles.container}>
           <h1>"Level Construction has never let me down"</h1>
        </div>
    )
}
export default HomeCenterText