"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, Building, Laptop, Home, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    {
      title: "Your Growth, Our Commitment",
      subtitle: "Comprehensive Business Solutions",
      description: "Leading provider of recruitment, facility management, IT solutions, and real estate services",
      image: "/images/hero-bg.png",
      cta: "Explore Services",
      link: "/recruitment",
    },
    {
      title: "Expert Recruitment Services",
      subtitle: "Find the Right Talent",
      description: "Connect with top professionals across industries with our comprehensive recruitment solutions",
      image: "/images/recruitment-hero.png",
      cta: "View Opportunities",
      link: "/recruitment",
    },
    {
      title: "Complete Facility Management",
      subtitle: "Seamless Operations",
      description: "Professional housekeeping, security, and maintenance services for your business premises",
      image: "/images/facility-hero.png",
      cta: "Learn More",
      link: "/facility-management",
    },
    {
      title: "Advanced IT Solutions",
      subtitle: "Technology Excellence",
      description: "Cutting-edge hardware and software solutions to power your business growth",
      image: "/images/it-hero.png",
      cta: "Discover Tech",
      link: "/hardware-software",
    },
    {
      title: "Premium Real Estate",
      subtitle: "Investment Opportunities",
      description: "Strategic real estate solutions for commercial and residential investment needs",
      image: "/images/realestate-hero.png",
      cta: "View Properties",
      link: "/real-estate",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${currentSlideData.image})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <img
                src="/images/logo.png"
                alt="Jaydev Associates"
                className="h-24 md:h-32 mx-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-[#d4af37] mb-2">{currentSlideData.title}</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300">
              {currentSlideData.subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentSlideData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href={currentSlideData.link}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:from-[#b8941f] hover:to-[#d4af37] transition-all duration-300 shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 px-8 py-4 text-lg font-semibold group"
              >
                {currentSlideData.cta}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 px-8 py-4 text-lg font-semibold group bg-transparent"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 bg-[#d4af37]/20 rounded-full mb-2 group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                <Users className="h-8 w-8 text-[#d4af37]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Recruitment
              </span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 bg-[#d4af37]/20 rounded-full mb-2 group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                <Building className="h-8 w-8 text-[#d4af37]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Facilities
              </span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 bg-[#d4af37]/20 rounded-full mb-2 group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                <Laptop className="h-8 w-8 text-[#d4af37]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                IT Solutions
              </span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="p-4 bg-[#d4af37]/20 rounded-full mb-2 group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                <Home className="h-8 w-8 text-[#d4af37]" />
              </div>
              <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Real Estate
              </span>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#d4af37] scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-[#d4af37] mx-auto" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 z-10 hidden lg:block">
        <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-20 right-10 z-10 hidden lg:block">
        <div className="w-3 h-3 bg-[#d4af37]/50 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 right-20 z-10 hidden lg:block">
        <div className="w-1 h-1 bg-[#d4af37] rounded-full animate-bounce delay-500"></div>
      </div>
    </section>
  )
}
