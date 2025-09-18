import React, { FunctionComponent } from 'react'
import './gallery.css'

interface ImageItem {
  src: string
  alt?: string
}

interface ImageGalleryProps {
  images: ImageItem[]
}

const ImageGallery: FunctionComponent<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="galleryGrid">
      {images.map((img, i) => (
        <div key={i} className={`galleryItem item-${i + 1}`}>
          <img src={img.src} alt={img.alt ?? `image-${i}`} />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
