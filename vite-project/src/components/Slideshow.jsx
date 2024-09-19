import { useState, useEffect } from 'react'

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '/images/JG1.webp',
    '/images/JG2.jpg',
    '/images/JG3.jpg',
    '/images/JG4.jpg',
    '/images/JG5.png',
    '/images/JG6.jpg',
    '/images/JG7.jpg',
    '/images/JG8.jpg',
    '/images/JG9.jpg',
    '/images/JG10.jpg',
    '/images/JG11.jpg',
    '/images/JG12.webp',
    '/images/JG13.jpg',
  
 
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // Slide changes every 3 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [slides.length])

  return (
    <div className='slideshow-wrapper'>
      <h3 className="slideshow-title">Our Golden Oldie Through the Years</h3>
      <div className="slideshow-container">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slideshow-image"
        />
      </div>
    </div>
  )
}