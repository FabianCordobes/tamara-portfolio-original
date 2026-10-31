import Image from "next/image";
import type { ProjectMedia } from "@/types/portfolio";
export function MediaPlaceholder({ media }: { media?: ProjectMedia }) {
  return (
    <div className="portrait">
      {media ? (
        <Image
          preload
          fetchPriority="high"
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="portrait-empty">
          <span className="portrait-monogram" aria-hidden="true">
            TA
          </span>
          <p>
            Una mirada estratégica.
            <br />
            Muchas formas de crear.
          </p>
          <span className="portrait-caption">
            Retrato profesional · Próximamente
          </span>
        </div>
      )}
    </div>
  );
}
