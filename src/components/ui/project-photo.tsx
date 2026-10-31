import Image from "next/image";

type ProjectPhotoProps = {
  src: string;
  alt: string;
  caption: string;
  variant?: "photo" | "document";
  className?: string;
};

export function ProjectPhoto({
  src,
  alt,
  caption,
  variant = "photo",
  className = ""
}: ProjectPhotoProps) {
  return (
    <figure className={`project-photo project-photo--${variant} ${className}`.trim()}>
      <div className="project-photo-frame">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1100px) 46vw, 640px"
          loading="lazy"
        />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
