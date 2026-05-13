import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"

import MainLayout from "@/components/layout/MainLayout"
import { PageLoading } from "@/components/shared/PageLoading"

const Home = lazy(() => import("@/pages/Home"))
const Leadership = lazy(() => import("@/pages/Leadership"))
const PlaceholderPage = lazy(() => import("@/pages/PlaceholderPage"))
const Projects = lazy(() => import("@/pages/Projects"))
const Contact = lazy(() => import("@/pages/Contact"))
const SectorWorkflow = lazy(() => import("@/pages/SectorWorkflow"))

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route
            path="/about"
            element={<PlaceholderPage title="About" slug="about" />}
          />
          <Route
            path="/services"
            element={<PlaceholderPage title="Services" slug="services" />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions/:slug/workflow" element={<SectorWorkflow />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
