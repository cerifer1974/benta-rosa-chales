import type { SiteImage } from "@/data/images";

type Props = { image: SiteImage; className?: string; eager?: boolean };

export function ImageSlot({ image, className = "", eager }: Props) {
  if (!image.src) {
    return (
      <div className={`image-placeholder ${className}`} role="img" aria-label={`Foto a definir: ${image.label}`}>
        <span>{image.label}</span>
      </div>
    );
  }
  return <img src={image.src} alt={image.alt} className={className} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} />;
}
