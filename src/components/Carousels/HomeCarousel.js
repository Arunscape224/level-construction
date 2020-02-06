import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



const HomeCarousel = () => {
    const handleOnDragStart = e => e.preventDefault()
    return (
        <div style={{}}>
                <AliceCarousel mouseDragEnabled
                     buttonsDisabled={true} fadeOutAnimation={true} autoPlay={true} autoPlayInterval={5000}>
                    <img src="./sliderhomelevel/slider1levelhome.jpg" onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
                    {/* <img src="./sliderhomelevel/slider2levelhome.jpg" onDragStart={handleOnDragStart} className="yours-custom-class" /> */}
                    <img src="./sliderhomelevel/slider3levelhome.jpg" onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
                    <img src="./sliderhomelevel/slider4levelhome.jpg" onDragStart={handleOnDragStart} alt="level-construction" className="yours-custom-class" />
                </AliceCarousel>
        </div>
    )
}

export default HomeCarousel

