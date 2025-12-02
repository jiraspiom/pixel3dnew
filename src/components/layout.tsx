import {
  Gamepad2,
  Home,
  LayoutDashboard,
  Menu,
  PlusCircle,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-primary/50 group-hover:border-primary transition-colors">
                <Image
                  src="/pixel3d_logo_icon.png"
                  alt="Pixel3D"
                  className="object-cover w-full h-full"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                PIXEL<span className="text-primary">3D</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-primary `}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </div>
              </Link>
            ))}
            <Link href="/admin/new">
              <div className="ml-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                <PlusCircle className="mr-2 h-4 w-4" />
                Postar
              </div>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border p-4 bg-background">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary text-primary `}
                    // onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link href="/admin/new">
                <div
                  className="flex items-center justify-center w-full h-9 rounded-md bg-primary text-primary-foreground font-medium"
                  //   onClick={() => setIsMobileMenuOpen(false)}
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Postar
                </div>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:px-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-primary" />
            <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Pixel3D. Built for gamers.
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Discord
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
