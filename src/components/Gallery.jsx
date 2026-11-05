
import { useState } from 'react';
import './Gallery.css';

function Gallery({
  images = [],
  mode = 'product',
  showThumbnails = true,
  onSlideChange,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return <p>Nenhuma imagem disponível.</p>;
  }

  const hasMultipleImages = images.length > 1;
  const safeIndex = Math.min(currentIndex, images.length - 1);
  const isBanner = mode === 'banner';
  
const imageStyles = [
  { transform: 'scale(1)', objectPosition: 'center' },
  { transform: 'scale(1.2)', objectPosition: 'center' },
  { transform: 'scale(1.35) translateX(8%)', objectPosition: 'left center' },
  { transform: 'scale(1.35) translateX(-8%)', objectPosition: 'right center' },
  { transform: 'scale(1.5)', objectPosition: 'center' },
];

const currentImageStyle = !isBanner
  ? imageStyles[safeIndex % imageStyles.length]
  : {};


  
  const changeSlide = (newIndex) => {
    setCurrentIndex(newIndex);
    onSlideChange?.(newIndex);
  };

  const previousImage = () => {
    const newIndex = isBanner
      ? (safeIndex - 1 + images.length) % images.length
      : Math.max(safeIndex - 1, 0);

    changeSlide(newIndex);
  };

  const nextImage = () => {
    const newIndex = isBanner
      ? (safeIndex + 1) % images.length
      : Math.min(safeIndex + 1, images.length - 1);

    changeSlide(newIndex);
  };

  return (
    <div className={`gallery ${isBanner ? 'gallery-banner' : ''}`}>
      <div className="gallery-main">
        {hasMultipleImages && (
          <button
            type="button"
            className="gallery-arrow"
            onClick={previousImage}
            disabled={!isBanner && safeIndex === 0}
            aria-label="Imagem anterior"
          >
            ❮
          </button>
        )}

        
<div className="gallery-image-viewport">
  <img
    src={images[safeIndex].src}
    alt={
      images[safeIndex].alt ||
      `Visualização ${safeIndex + 1}`
    }
    className="gallery-main-image"
    style={currentImageStyle}
  />
</div>


        {hasMultipleImages && (
          <button
            type="button"
            className="gallery-arrow"
            onClick={nextImage}
            disabled={
              !isBanner && safeIndex === images.length - 1
            }
            aria-label="Próxima imagem"
          >
            ❯
          </button>
        )}
      </div>

      {hasMultipleImages && showThumbnails && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              type="button"
              key={index}
              className={`gallery-thumbnail ${
                index === safeIndex ? 'active' : ''
              }`}
              onClick={() => changeSlide(index)}
              aria-label={`Visualizar imagem ${index + 1}`}
            >
              
<img
  src={image.src}
  alt={`Enquadramento ${index + 1}`}
  style={
    !isBanner
      ? imageStyles[index % imageStyles.length]
      : {}
  }
/>

            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
