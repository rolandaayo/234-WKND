"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Experience" },
    { href: "/tickets", label: "Tickets" },
    { href: "/merch", label: "Shop" },
    { href: "/about", label: "Our Story" },
    { href: "/contact", label: "Support" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between px-6 rounded-full border transition-all duration-500",
          scrolled
            ? "bg-background/60 backdrop-blur-xl border-white/10 shadow-2xl"
            : "bg-transparent border-transparent",
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-accent to-secondary transition-transform group-hover:rotate-12">
            <span className="text-lg font-black text-black tracking-tighter">234</span>
          </div>
          <span className="text-lg font-bold tracking-widest text-foreground">WKND</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            variant="secondary"
            className="rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 px-6"
          >
            <Link href="/tickets">Explore Events</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/50 backdrop-blur-sm border border-white/10 md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5 text-foreground" />
        </button>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background/80 backdrop-blur-md transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[80%] max-w-sm bg-card border-l border-white/10 p-8 transition-transform duration-500 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-xl font-bold tracking-widest">234 WKND</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-3xl font-black uppercase tracking-tighter transition-all duration-500 delay-[calc(var(--index)*100ms)]",
                  isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0",
                )}
                style={{ "--index": i } as any}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="absolute bottom-12 left-8 right-8">
            <Button asChild size="lg" className="w-full rounded-2xl bg-primary text-white font-bold h-16">
              <Link href="/tickets" onClick={() => setIsMobileMenuOpen(false)}>
                Find Your Vibe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
