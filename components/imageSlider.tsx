'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons' // Radix icons

interface ImageSliderProps {
  images?: string[]
}

export default function ImageSlider({ images = [] }: ImageSliderProps) {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  const next = () => {
    setFade(true) // trigger fade out
    setTimeout(() => {
      setIndex(prev => (prev + 1) % images.length)
      setFade(false) // fade in
    }, 200) // match CSS transition duration
  }

  const previous = () => {
    setFade(true)
    setTimeout(() => {
      setIndex(prev => (prev - 1 + images.length) % images.length)
      setFade(false)
    }, 200)
  }

  if (!images.length) {
    return (
      <div className='relative mb-2 h-72 rounded-lg bg-muted sm:h-[380px] flex justify-center items-center'>
        <span className="text-white text-sm">No image</span>
      </div>
    )
  }

  return (
    <div className='relative mb-2 h-72 rounded-lg bg-muted sm:h-[380px] overflow-hidden'>
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          className='rounded-lg object-contain object-center'
          src={images[index]}
          alt={`image ${index + 1}`}
          fill
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={previous}
            className='absolute left-2 top-1/2 -translate-y-1/2 rounded bg-black/50 p-2 text-white hover:bg-black/70 transition'
          >
            <ChevronLeftIcon className='w-6 h-6' />
          </button>

          <button
            onClick={next}
            className='absolute right-2 top-1/2 -translate-y-1/2 rounded bg-black/50 p-2 text-white hover:bg-black/70 transition'
          >
            <ChevronRightIcon className='w-6 h-6' />
          </button>

          <div className='absolute bottom-2 right-2 rounded bg-black/60 px-2 py-1 text-xs text-white'>
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}