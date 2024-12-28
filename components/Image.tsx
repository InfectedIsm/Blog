'use client'

import { useState } from 'react'
import 'css/image.css'
import NextImage, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH

const Image = ({ src, alt, ...rest }: ImageProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = () => setIsOpen(true)
  const closeLightbox = () => setIsOpen(false)

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
    if (e.key === 'Enter') {
      openLightbox()
    }
  }

  return (
    <div>
      <button 
        className="w-full bg-transparent border-0 cursor-pointer p-0" 
        onClick={openLightbox}
        onKeyDown={handleKeyDown}
        aria-label={`Open ${alt} in fullscreen`}
      >
        <NextImage src={`${basePath || ''}${src}`} alt={alt} {...rest} />
      </button>
      
      {isOpen && (
        <div 
          className="lightbox" 
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-label={`${alt} lightbox view`}
          tabIndex={-1}
        >
          <div 
            className="lightbox-content" 
            onClick={handleImageClick}
            role="presentation"
          >
            <button 
              className="lightbox-close" 
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <NextImage 
              src={`${basePath || ''}${src}`} 
              alt={alt} 
              className="max-w-full"
              {...rest}
            />
            <p className="lightbox-alt">{alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Image
