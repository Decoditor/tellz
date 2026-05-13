import { useRef, useState } from "react"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export function FounderPortrait({ src, alt, className }) {
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  function handleImgRef(el) {
    imgRef.current = el
    if (!el) return
    if (el.complete && el.naturalHeight > 0) {
      setLoaded(true)
    }
  }

  const show = loaded && !error

  return (
    <div
      className={cn(
        "relative isolate aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-tellz-surface shadow-xl light:border-slate-200 light:bg-slate-200 lg:aspect-auto lg:min-h-[28rem] lg:max-h-[32rem]",
        className,
      )}
      aria-busy={!show && !error}
    >
      {!loaded && !error ? (
        <Skeleton className="absolute inset-0 z-10 size-full rounded-2xl" />
      ) : null}
      {error ? (
        <div
          className="absolute inset-0 z-[1] bg-tellz-accent/30 light:bg-slate-300"
          aria-hidden
        />
      ) : null}
      <img
        ref={handleImgRef}
        key={src}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true)
          setLoaded(false)
        }}
        className={cn(
          "relative z-[2] size-full object-cover object-top transition-opacity duration-500",
          show ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] rounded-2xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] light:shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]"
        aria-hidden
      />
    </div>
  )
}
