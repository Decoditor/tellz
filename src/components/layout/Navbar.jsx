import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname, hash } = location;

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-tellz-bg/75 backdrop-blur-xl light:border-slate-200/80 light:bg-white/80"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((item) => (
            <NavItem
              key={item.label}
              item={item}
              pathname={pathname}
              hash={hash}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="hidden rounded-xl shadow-md shadow-tellz-accent/25 light:shadow-sm light:shadow-slate-300/60 sm:inline-flex"
          >
            <Link to="/contact">Book a Call</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="gap-0 p-0">
              <div className="shrink-0 border-b border-white/10 px-6 pb-4 pt-14 light:border-slate-200">
                <SheetHeader className="space-y-1.5 p-0 text-left">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    All pages and sections — same links as desktop.
                  </SheetDescription>
                </SheetHeader>
              </div>

              <nav className="px-3 py-4" aria-label="Primary navigation">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((item) => (
                    <MobileNavLink
                      key={item.label}
                      item={item}
                      onNavigate={() => setOpen(false)}
                      pathname={pathname}
                      hash={hash}
                    />
                  ))}
                </ul>
              </nav>

              <Separator className="shrink-0 bg-white/10 light:bg-slate-200" />

              <div className="shrink-0 p-4">
                <Button asChild className="w-full rounded-xl">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book a Call
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

function navHashFromTo(to) {
  if (!to.includes("#")) return "";
  const parts = to.split("#");
  return parts.length > 1 ? `#${parts.pop()}` : "";
}

function NavItem({ item, pathname, hash }) {
  const hashMatch =
    !item.isRoute && pathname === "/" && hash === navHashFromTo(item.to);
  const routeMatch = item.isRoute && pathname === item.to;
  const active = routeMatch || hashMatch;

  return (
    <Link
      to={item.to}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium text-tellz-muted transition-colors hover:bg-white/5 hover:text-tellz-text light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900",
        active && "text-tellz-text light:text-slate-900",
      )}
    >
      {item.label}
    </Link>
  );
}

function MobileNavLink({ item, onNavigate, pathname, hash }) {
  const hashMatch =
    !item.isRoute && pathname === "/" && hash === navHashFromTo(item.to);
  const routeMatch = item.isRoute && pathname === item.to;
  const active = routeMatch || hashMatch;

  return (
    <li>
      <Link
        to={item.to}
        onClick={onNavigate}
        className={cn(
          "block rounded-xl px-3 py-3.5 text-base font-medium transition-colors",
          active
            ? "bg-white/10 text-tellz-text light:bg-slate-100 light:text-slate-900"
            : "text-tellz-text hover:bg-white/5 light:text-slate-900 light:hover:bg-slate-100",
        )}
      >
        {item.label}
      </Link>
    </li>
  );
}
