import { useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function ProjectCover({ src, alt, className, children }) {
  const hasSrc = Boolean(src?.trim());
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(!hasSrc);

  function handleImgRef(el) {
    if (!el) return;
    if (el.complete && el.naturalHeight > 0) {
      setLoaded(true);
    }
  }

  const showImage = hasSrc && loaded && !error;

  return (
    <div
      className={cn(
        "relative h-44 w-full overflow-hidden bg-tellz-surface light:bg-slate-200",
        className,
      )}
      aria-busy={hasSrc && !loaded && !error}
    >
      {!showImage ? (
        <Skeleton className="absolute inset-0 z-20 size-full rounded-none" />
      ) : null}

      {hasSrc ? (
        <img
          ref={handleImgRef}
          key={src}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(false);
          }}
          className={cn(
            "absolute inset-0 z-[1] size-full object-cover transition-opacity duration-500",
            showImage ? "opacity-100" : "opacity-0",
          )}
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-black/45"
        aria-hidden
      />

      {children ? (
        <div className="relative z-[3] flex h-full flex-col justify-between p-6 text-white">
          {children}
        </div>
      ) : null}
    </div>
  );
}
