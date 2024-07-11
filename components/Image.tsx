import React from 'react'
import 'css/image.css' // Ensure you have a CSS file to add the necessary styles

import NextImage, { ImageProps } from 'next/image'
const basePath = process.env.BASE_PATH

const Image = ({ src, alt, ...rest }: ImageProps) => {
  return (
    <div>
      <label htmlFor={`lightbox-${src}`} className="cursor-pointer block">
        <NextImage src={`${basePath || ''}${src}`} alt={alt} {...rest} />
      </label>
      <input type="checkbox" id={`lightbox-${src}`} className="lightbox-toggle" />
      <div className="lightbox">
        <label htmlFor={`lightbox-${src}`} className="lightbox-close">&times;</label>
        <div className="lightbox-content">
          <img src={`${basePath || ''}${src}`} alt={alt} className="max-w-full max-h-full" />
          <p className="lightbox-alt">{alt}</p>
        </div>
      </div>
    </div>
  )
}

export default Image