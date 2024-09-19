import { useState } from 'react'

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600',
    '/placeholder.svg?height=400&width=600'
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <div>
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