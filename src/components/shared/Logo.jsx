import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"

export function Logo({ className, to = "/" }) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 font-semibold tracking-tight text-tellz-text light:text-slate-900",
        className,
      )}
    >
      <img src="/logo.png" alt="" className="w-16" />
    </Link>
  )
}
