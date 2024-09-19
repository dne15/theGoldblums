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
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '1rem auto' }}>
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '100%', height: 'auto' }} />
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
        <button onClick={prevSlide} style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>
          &#8249;
        </button>
        <button onClick={nextSlide} style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>
          &#8250;
        </button>
      </div>
    </div>
  )
}