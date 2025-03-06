"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function Navbar() {
    const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            TechSoss
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
        <Link
            href="/"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/solutions"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/vendors"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Vendors
          </Link>
          <Link
            href="/blogs"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Blogs
          </Link>
          <Link
            href="/career"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
          <Button
            onClick={() => router.push("/form")}
            size="sm"
            className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Become a Vendor
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            <Link
              href="/about-us"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/solutions"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/vendors"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Vendors
            </Link>
            <Link
              href="/blogs"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/career"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
               
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300"
              onClick={() => {
                setIsMenuOpen(false);
                router.push("/form");
              }}              
            >
              Become a Vendor
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

