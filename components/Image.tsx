'use client'

import { useState } from 'react'
import 'css/image.css'
import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, alt, ...rest }: ImageProps) => {
  // Add state to control lightbox
  const [isOpen, setIsOpen] = useState(false)

  // Handler for opening lightbox
  const openLightbox = () => setIsOpen(true)

  // Handler for closing lightbox
  const closeLightbox = () => setIsOpen(false)

  // Handler for preventing click propagation on image
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div>
      <div className="cursor-pointer" onClick={openLightbox}>
        <NextImage src={`${basePath || ''}${src}`} alt={alt} {...rest} />
      </div>

      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={handleImageClick}>
            <button className="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            <img src={`${basePath || ''}${src}`} alt={alt} className="max-w-full" />
            <p className="lightbox-alt">{alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Image
