'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function ProjectImage({
  src,
  alt
}: {
  src: string
  alt: string
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='relative overflow-hidden rounded-lg bg-muted sm:h-60'>
      {/* spinner placeholder */}
      {!loaded && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500' />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
