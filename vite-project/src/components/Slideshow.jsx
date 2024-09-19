import { useState } from 'react'
import { Button } from "@/components/ui/button"

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
    <div className="relative w-full max-w-2xl mx-auto mt-4">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-auto" />
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <Button onClick={prevSlide} variant="outline" size="icon">
          <span className="sr-only">Previous slide</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </Button>
        <Button onClick={nextSlide} variant="outline" size="icon">
          <span className="sr-only">Next slide</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Button>
      </div>
    </div>
  )
}