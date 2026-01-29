import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderClass?: string;
  avifSrc?: string;
  webpSrc?: string;
}

/**
 * Generates AVIF and WebP paths from original image path
 * Assumes AVIF/WebP versions exist with same name but different extension
 */
const getOptimizedPaths = (originalSrc: string) => {
  const basePath = originalSrc.replace(/\.(jpg|jpeg|png|gif)$/i, '');
  return {
    avif: `${basePath}.avif`,
    webp: `${basePath}.webp`,
  };
};

const LazyImage = ({
  src,
  alt,
  className,
  placeholderClass = 'bg-muted animate-pulse',
  avifSrc,
  webpSrc,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const pictureRef = useRef<HTMLPictureElement>(null);

  // Auto-generate optimized paths if not provided
  const optimizedPaths = getOptimizedPaths(src);
  const finalAvifSrc = avifSrc || optimizedPaths.avif;
  const finalWebpSrc = webpSrc || optimizedPaths.webp;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (pictureRef.current) {
      observer.observe(pictureRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className={cn(
            'absolute inset-0',
            placeholderClass
          )} 
          aria-hidden="true"
        />
      )}
      
      <picture ref={pictureRef}>
        {/* AVIF format - best compression, lossless quality */}
        {isInView && (
          <source 
            srcSet={finalAvifSrc} 
            type="image/avif"
          />
        )}
        {/* WebP format - good fallback */}
        {isInView && (
          <source 
            srcSet={finalWebpSrc} 
            type="image/webp"
          />
        )}
        {/* Original format - final fallback */}
        <img
          ref={imgRef}
          src={isInView ? src : undefined}
          data-src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          {...props}
        />
      </picture>
    </div>
  );
};

export default LazyImage;
