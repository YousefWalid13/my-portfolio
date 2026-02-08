"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    const sections = document.querySelectorAll("section[id]")
    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:flex flex-col gap-2 mt-16" aria-label="Main navigation">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`group flex items-center gap-4 py-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
            activeSection === link.href.slice(1)
              ? "text-heading"
              : "text-muted-foreground hover:text-heading"
          }`}
        >
          <span
            className={`block h-px transition-all duration-300 ${
              activeSection === link.href.slice(1)
                ? "w-16 bg-heading"
                : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-heading"
            }`}
          />
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden fixed top-0 right-0 z-50 p-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col gap-1.5 p-2 rounded-lg bg-secondary/80 backdrop-blur-sm"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-heading transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 bg-card/95 backdrop-blur-md border border-border rounded-lg p-6 min-w-48 shadow-xl">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
