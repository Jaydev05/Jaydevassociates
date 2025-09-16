"use client"

import Link from "next/link"
import { ArrowRight, Users, Building, Laptop, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const divisions = [
  {
    icon: Users,
    title: "Recruitment Services",
    description: "Expert talent acquisition and placement services across all industries and skill levels.",
    features: ["Executive Search", "Mass Recruitment", "Specialized Hiring", "HR Consulting"],
    href: "/recruitment",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Building,
    title: "Facility Management",
    description: "Comprehensive facility management solutions for modern businesses and institutions.",
    features: ["Maintenance Services", "Security Management", "Cleaning Services", "Vendor Management"],
    href: "/facility-management",
    color: "from-green-600 to-green-800",
  },
  {
    icon: Laptop,
    title: "Hardware & Software",
    description: "Complete IT solutions including hardware procurement, software development, and support.",
    features: ["Hardware Procurement", "Software Development", "IT Support", "System Integration"],
    href: "/hardware-software",
    color: "from-purple-600 to-purple-800",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Professional real estate services for residential and commercial properties.",
    features: ["Property Sales", "Rental Services", "Investment Consulting", "Property Management"],
    href: "/real-estate",
    color: "from-orange-600 to-orange-800",
  },
]

export default function BusinessDivisions() {
  return (
    <section id="business-divisions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#d4af37]">Business Divisions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions across four key business verticals, designed to meet all your organizational needs
            under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="group relative bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${division.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                    <division.icon className="w-8 h-8 text-[#d4af37]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                  {division.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{division.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {division.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  variant="outline"
                  className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#d4af37]/20 bg-transparent"
                >
                  <Link href={division.href} className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
