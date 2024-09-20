import { useState, useEffect } from 'react'

// * A React component that displays a slideshow of images.

// * The images are stored in an array and the current index is tracked in state.
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
// * The slideshow automatically cycles through the images every 3 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // Slide changes every 3 seconds

    //* When the component is unmounted, the interval is cleared to prevent memory leaks.
    return () => clearInterval(interval) // Cleanup on unmount
  }, [slides.length])

  // Header plus the slideshow container
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