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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox()
    }
  }

  return (
    <div>
      <button
        className="w-full cursor-pointer border-0 bg-transparent p-0"
        onClick={openLightbox}
        onKeyDown={(e) => e.key === 'Enter' && openLightbox()}
        aria-label={`Open ${alt} in fullscreen`}
      >
        <NextImage src={`${basePath || ''}${src}`} alt={alt} {...rest} />
      </button>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} lightbox view`}
        >
          <button
            className="lightbox-overlay"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            aria-label="Close lightbox overlay"
          />
          <div className="lightbox-content" role="presentation">
            <button
              className="lightbox-close"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              aria-label="Close lightbox"
            >
              &times;
            </button>
            <NextImage src={`${basePath || ''}${src}`} alt={alt} className="max-w-full" {...rest} />
            <p className="lightbox-alt">{alt}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Image
