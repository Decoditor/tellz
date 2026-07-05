import { Outlet } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToHash } from "@/components/layout/ScrollToHash";

export default function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToHash />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
