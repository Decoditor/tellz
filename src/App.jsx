import { BrowserRouter } from "react-router-dom"

import { SEOHead } from "@/components/layout/SEOHead"
import { AppToaster } from "@/components/shared/AppToaster"
import { NetworkToasts } from "@/components/shared/NetworkToasts"
import { ThemeProvider } from "@/components/shared/ThemeProvider"
import AppRoutes from "@/routes/AppRoutes"

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SEOHead />
        <AppToaster />
        <NetworkToasts />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
