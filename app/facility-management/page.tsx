import { Shield, Sparkles, Wrench, Users, Clock, Award, CheckCircle, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FacilityManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0">
          <img
            src="/images/facility-hero.png"
            alt="Professional Facility Management"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40"></div>
        </div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-[#d4af37]">Facility Management</span> Services
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-md">
              Comprehensive facility management solutions across Maharashtra, Gujarat, Goa & UAE. From security services
              to housekeeping, we provide skilled manpower and 24/7 support to keep your operations running smoothly.
            </p>
            <Button asChild className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-3 shadow-lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-[#d4af37]">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-all hover:transform hover:scale-105">
              <Shield className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Security Services</h3>
              <p className="text-gray-300">
                Professional security personnel for hospitals, residential colonies, commercial establishments, and
                more.
              </p>
            </div>
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-all hover:transform hover:scale-105">
              <Sparkles className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Housekeeping</h3>
              <p className="text-gray-300">
                Mechanized & hygienic housekeeping and conservancy services for all sectors with trained professionals.
              </p>
            </div>
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-all hover:transform hover:scale-105">
              <Users className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Hospitality Services</h3>
              <p className="text-gray-300">
                Complete hospitality & canteen services for all sectors with quality food and service standards.
              </p>
            </div>
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-all hover:transform hover:scale-105">
              <Wrench className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Garden & Maintenance</h3>
              <p className="text-gray-300">
                Conceptual gardening, maintenance, and warehouse facility management with skilled manpower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Security Services */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Security Services</span> Portfolio
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#d4af37] flex items-center gap-3">
                <Shield className="w-8 h-8" />
                Security Solutions
              </h3>
              <ul className="space-y-3">
                {[
                  "Hospital Security & Services",
                  "Security of Residential Colonies",
                  "Security of Commercial Establishments",
                  "Armed Escorts",
                  "Security of Housing Complex",
                  "BPO's and IT Companies Security",
                  "Bank Security Services",
                  "Retail Security Solutions",
                  "Hotel Security Management",
                  "All other types of Security Services",
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#d4af37] flex items-center gap-3">
                <Camera className="w-8 h-8" />
                Technology Integration
              </h3>
              <ul className="space-y-3">
                {[
                  "Patrolling Systems",
                  "Time and Attendance Systems",
                  "CCTV Surveillance System",
                  "Access Control System",
                  "Public Address System",
                  "RFID Integrations",
                  "Attendance System on Cloud",
                  "Visitor Management System",
                  "Canteen Management System",
                  "Parking Management System",
                  "Vehicle Tracking System",
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Facility Services</span> Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center">
              <Sparkles className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Housekeeping</h3>
              <p className="text-gray-300 text-sm">
                Mechanized & hygienic cleaning services with trained professionals and quality equipment.
              </p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center">
              <Users className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Hospitality</h3>
              <p className="text-gray-300 text-sm">
                Complete canteen and hospitality services with quality food preparation and service.
              </p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center">
              <Wrench className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Gardening</h3>
              <p className="text-gray-300 text-sm">
                Conceptual gardening and maintenance services for aesthetic and functional landscapes.
              </p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center">
              <Award className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Manpower</h3>
              <p className="text-gray-300 text-sm">
                Skilled manpower services for warehouses, facilities, and various operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-[#d4af37]">Coverage Areas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-[#d4af37]">Maharashtra</h3>
              <p className="text-gray-300 text-sm mb-2">Complete state coverage</p>
              <p className="text-xs text-gray-400">Mumbai, Pune, Nagpur, Nashik, Aurangabad</p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-[#d4af37]">Gujarat</h3>
              <p className="text-gray-300 text-sm mb-2">Major industrial areas</p>
              <p className="text-xs text-gray-400">Ahmedabad, Surat, Vadodara, Rajkot</p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-[#d4af37]">Goa</h3>
              <p className="text-gray-300 text-sm mb-2">Tourism & hospitality</p>
              <p className="text-xs text-gray-400">Panaji, Margao, Vasco da Gama</p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg text-center hover:border-[#d4af37]/40 transition-colors">
              <h3 className="text-lg font-bold mb-2 text-[#d4af37]">UAE</h3>
              <p className="text-gray-300 text-sm mb-2">International operations</p>
              <p className="text-xs text-gray-400">Dubai, Abu Dhabi, Sharjah</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">
              <strong>Coverage Radius:</strong> 450 km from our headquarters
            </p>
            <p className="text-gray-300">
              <strong>Team Size:</strong> 12 dedicated professionals with 24/7 availability
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Our <span className="text-[#d4af37]">Facility Management</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-[#d4af37]/20 rounded-lg">
              <Clock className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-300">
                Round-the-clock service availability across all our coverage areas with emergency response capability.
              </p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg">
              <Award className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3">Trained Professionals</h3>
              <p className="text-gray-300">
                All our staff undergo rigorous training and background checks to ensure quality service delivery.
              </p>
            </div>
            <div className="p-6 border border-[#d4af37]/20 rounded-lg">
              <CheckCircle className="w-10 h-10 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold mb-3">Technology Integration</h3>
              <p className="text-gray-300">
                Advanced systems for monitoring, tracking, and managing all facility operations efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#d4af37]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your <span className="text-[#d4af37]">Facility Operations</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle your facility management needs across Maharashtra, Gujarat, Goa & UAE so you can focus on your
            core business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-3">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
