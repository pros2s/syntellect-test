import { memo, ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const Image = memo(({ className, src, alt, ...otherProps }: ImageProps) => (
  <img className={className} alt={alt} src={src} {...otherProps} />
));
