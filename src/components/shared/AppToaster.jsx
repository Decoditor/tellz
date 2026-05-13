import { Toaster } from "sonner"

import { useTheme } from "@/hooks/useTheme"

export function AppToaster() {
  const { isLight } = useTheme()

  return (
    <Toaster
      position="bottom-center"
      theme={isLight ? "light" : "dark"}
      richColors
      closeButton
      offset="1rem"
      toastOptions={{
        classNames: {
          toast:
            "rounded-xl border border-white/10 bg-tellz-surface text-tellz-text shadow-lg light:border-slate-200 light:bg-white light:text-slate-900",
        },
      }}
    />
  )
}
