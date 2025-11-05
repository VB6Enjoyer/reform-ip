"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

/* A responsive navigation bar component.
 It displays links for desktop and a collapsible menu for mobile.
 It handles smooth scrolling to sections on the homepage and direct linking from other pages. */
export function Navigation() {
  // State to manage the visibility of the mobile menu.
  const [isOpen, setIsOpen] = useState(false)
  // Hook to get the current URL path, used to conditionally render links.
  const pathname = usePathname()

  // A helper function to smoothly scroll to a specific section on the page.
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      // Close the mobile menu after a navigation item is clicked.
      setIsOpen(false)
    }
  }

  // Check if the current page is the homepage to render appropriate navigation links.
  const isHomePage = pathname === "/"

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-sm"><img src="copyleft.png" /></div>
            <span className="text-xl font-bold">Reform IP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection("home")} className="hover:text-accent transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection("impact")} className="hover:text-accent transition-colors">
                  Live Impact
                </button>
                <button onClick={() => scrollToSection("statistics")} className="hover:text-accent transition-colors">
                  The Cost
                </button>
                <button onClick={() => scrollToSection("research")} className="hover:text-accent transition-colors">
                  Research
                </button>
              </>
            ) : (
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            )}
            <Link href="/library" className="hover:text-accent transition-colors">
              Library
            </Link>
            <Link href="/resources" className="hover:text-accent transition-colors">
              Resources
            </Link>
            <Button
              onClick={() => {
                if (isHomePage) {
                  scrollToSection("action")
                } else {
                  window.location.href = "/#action"
                }
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:cursor-pointer"
            >
              Take Action
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left hover:text-accent transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-left hover:text-accent transition-colors"
                >
                  Live Impact
                </button>
                <button
                  onClick={() => scrollToSection("statistics")}
                  className="text-left hover:text-accent transition-colors"
                >
                  The Cost
                </button>
                <button
                  onClick={() => scrollToSection("research")}
                  className="text-left hover:text-accent transition-colors"
                >
                  Research
                </button>
              </>
            ) : (
              <Link href="/" className="text-left hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            )}
            <Link
              href="/library"
              className="text-left hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Library
            </Link>
            <Link
              href="/resources"
              className="text-left hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Button
              onClick={() => {
                if (isHomePage) {
                  scrollToSection("action")
                } else {
                  window.location.href = "/#action"
                }
                setIsOpen(false)
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Take Action
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
