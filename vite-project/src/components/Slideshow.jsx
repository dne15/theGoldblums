import { useState } from 'react'

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '../images/JG1.webp',
    '../images/JG2.webp',
    '../images/JG3.jpg',
    '../images/JG4.jpg',
    '../images/JG5.jpg',
    '../images/JG6.jpg',
    '../images/JG7.jpg',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className='slideshow'>
      <h3>Our Golden Oldie Through the Years</h3>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slideshow-image" />
      <div className='arrows'>
        <button onClick={prevSlide}>
          &#8249;
        </button>
        <button onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  )
}