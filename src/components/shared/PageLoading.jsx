import { Loader2 } from "lucide-react"

export function PageLoading() {
  return (
    <div
      className="flex min-h-[50vh] flex-1 items-center justify-center text-tellz-muted light:text-slate-500"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <Loader2 className="size-8 animate-spin text-tellz-cyan light:text-blue-600" />
    </div>
  )
}
