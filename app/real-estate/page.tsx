import type { Metadata } from "next"
import { Home, Building, TrendingUp, MapPin, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Services - Jaydev Associates LLP",
  description:
    "Professional real estate services for residential and commercial properties. Expert property solutions and investment consulting.",
}

const services = [
  {
    icon: Home,
    title: "Residential Properties",
    description: "Complete residential real estate solutions",
    features: ["Apartment Sales", "Villa & Bungalows", "Rental Services", "Property Valuation"],
  },
  {
    icon: Building,
    title: "Commercial Properties",
    description: "Commercial real estate for business needs",
    features: ["Office Spaces", "Retail Outlets", "Warehouses", "Industrial Land"],
  },
  {
    icon: TrendingUp,
    title: "Investment Consulting",
    description: "Expert guidance for property investments",
    features: ["Market Analysis", "ROI Calculation", "Investment Strategy", "Portfolio Management"],
  },
  {
    icon: MapPin,
    title: "Property Management",
    description: "Comprehensive property management services",
    features: ["Tenant Management", "Maintenance", "Legal Compliance", "Rent Collection"],
  },
]

const locations = [
  "Mumbai Metropolitan",
  "Pune & PCMC",
  "Nashik Region",
  "Aurangabad",
  "Goa Coastal",
  "Ahmedabad",
  "Surat",
  "UAE Properties",
]

export default function RealEstatePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/realestate-hero.png"
            alt="Real Estate Services"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-[#d4af37]">Real Estate</span>
              <br />
              Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Your trusted partner for all real estate needs. From residential to commercial properties, we deliver
              exceptional service and results.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4 shadow-lg"
            >
              <Link href="/contact">
                Explore Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#d4af37]">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive real estate solutions covering all aspects of property transactions and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#d4af37]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#d4af37]">Locations</span> We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic presence across key markets in India and UAE for comprehensive property coverage.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="text-white font-semibold">{location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37]/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your <span className="text-[#d4af37]">Dream Property</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our real estate experts help you find the perfect property or investment opportunity.
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
