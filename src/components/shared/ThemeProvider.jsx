import { useEffect, useMemo, useState } from "react"

import { ThemeContext } from "@/components/shared/theme-context"

const STORAGE_KEY = "tellz-theme"

export function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === "undefined") return false
    return window.localStorage.getItem(STORAGE_KEY) === "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (isLight) {
      root.classList.add("light")
      window.localStorage.setItem(STORAGE_KEY, "light")
    } else {
      root.classList.remove("light")
      window.localStorage.setItem(STORAGE_KEY, "dark")
    }
  }, [isLight])

  const value = useMemo(
    () => ({
      isLight,
      toggleTheme: () => setIsLight((v) => !v),
      setLight: (v) => setIsLight(Boolean(v)),
    }),
    [isLight],
  )

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}
