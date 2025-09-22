import { useCssHandles } from 'vtex.css-handles'
import './gallery.css'

const CSS_HANDLES = [
  'galleryContainer',
  'galleryGrid',
  'galleryItem',
  'galleryImage',
]

const Gallery = ({ images }) => {
  const handles = useCssHandles(CSS_HANDLES)

  if (!images || images.length === 0) return null

  return (
    <div className={handles.galleryContainer}>
      <div className={handles.galleryGrid}>
        {images.map((img, idx) => (
          <div key={idx} className={handles.galleryItem}>
            <img
              src={img.src}
              alt={img.alt || `gallery-${idx}`}
              className={handles.galleryImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

