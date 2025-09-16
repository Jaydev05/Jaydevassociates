"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-[#d4af37]/30 shadow-lg shadow-[#d4af37]/10"
          : "bg-black/80 backdrop-blur-sm border-b border-[#d4af37]/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/logo.png"
                alt="Jaydev Associates LLP"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-white hover:text-[#d4af37] transition-all duration-300 relative group rounded-lg hover:bg-[#d4af37]/10"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-white hover:text-[#d4af37] transition-all duration-300 relative group rounded-lg hover:bg-[#d4af37]/10"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-white hover:text-[#d4af37] transition-all duration-300 rounded-lg hover:bg-[#d4af37]/10">
                Services
                <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-md border border-[#d4af37]/30 rounded-xl shadow-2xl shadow-[#d4af37]/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3">
                  <Link
                    href="/recruitment"
                    className="block px-4 py-4 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                      <div>
                        <div className="font-semibold">Recruitment Services</div>
                        <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                          Talent acquisition & placement
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/facility-management"
                    className="block px-4 py-4 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                      <div>
                        <div className="font-semibold">Facility Management</div>
                        <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                          Complete facility solutions
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/hardware-software"
                    className="block px-4 py-4 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                      <div>
                        <div className="font-semibold">Hardware & Software</div>
                        <div className="text-xs text-gray-400 group-hover/item:text-gray-300">
                          IT solutions & support
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/real-estate"
                    className="block px-4 py-4 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full opacity-60 group-hover/item:opacity-100 transition-opacity"></div>
                      <div>
                        <div className="font-semibold">Real Estate</div>
                        <div className="text-xs text-gray-400 group-hover/item:text-gray-300">Property services</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="px-4 py-2 text-white hover:text-[#d4af37] transition-all duration-300 relative group rounded-lg hover:bg-[#d4af37]/10"
            >
              Contact
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 hover:scale-105"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-[#d4af37]/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : ""}`}
              ></span>
              <span
                className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 py-4" : "max-h-0"}`}
        >
          <div className="border-t border-[#d4af37]/20 pt-4">
            <nav className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${isServicesOpen ? "max-h-64 mt-2" : "max-h-0"}`}
                >
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/recruitment"
                      className="block px-4 py-2 text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Recruitment Services
                    </Link>
                    <Link
                      href="/facility-management"
                      className="block px-4 py-2 text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Facility Management
                    </Link>
                    <Link
                      href="/hardware-software"
                      className="block px-4 py-2 text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hardware & Software
                    </Link>
                    <Link
                      href="/real-estate"
                      className="block px-4 py-2 text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Real Estate
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block px-4 py-3 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
