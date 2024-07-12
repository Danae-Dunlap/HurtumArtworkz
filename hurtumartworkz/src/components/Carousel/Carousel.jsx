import React, {useState, useEffect} from 'react'
import './carousel.css'

const Carousel = ({images, interval = 3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, interval)

        return () => clearInterval(timer)
    }, [images.length, interval])

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1 + images.length) % images.length)
    }

return (
    <div className="carousel">
        <button onClick={goToPrevious} className='carousel-button prev'></button>
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
        <button onClick={goToNext} className='carousel-button next'></button>
    </div>
)

}

export default Carousel;
