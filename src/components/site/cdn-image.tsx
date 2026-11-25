import { cn } from '@/lib/utils'

const widths = [480, 768, 1100, 1400]

function cdn(src: string, w: number) {
  return `/.netlify/images?url=${encodeURIComponent(src)}&w=${w}&fm=webp&q=78`
}

/** Responsive image served through the Netlify Image CDN as WebP. */
export function CdnImage({
  src,
  alt,
  className,
  sizes = '100vw',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <img
      src={cdn(src, 1100)}
      srcSet={widths.map((w) => `${cdn(src, w)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      width={1376}
      height={768}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('block h-full w-full object-cover', className)}
    />
  )
}
