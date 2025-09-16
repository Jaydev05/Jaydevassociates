import { Users, Target, CheckCircle, ArrowRight, Briefcase, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecruitmentPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/recruitment-hero-bg.png"
            alt="Professional Recruitment Services"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-[#d4af37]">Recruitment</span>
              <br />
              Excellence
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Connecting exceptional talent with outstanding opportunities across Maharashtra, Gujarat, Goa & UAE. Your
              success is our mission.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4 shadow-lg"
            >
              <Link href="/contact">
                Start Recruiting
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
              Our <span className="text-[#d4af37]">Recruitment Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive recruitment solutions tailored to your industry needs and organizational culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Executive Search</h3>
              <p className="text-gray-300 mb-6">
                Senior-level recruitment for C-suite and leadership positions across all industries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  CEO & CTO Positions
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Department Heads
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Senior Managers
                </li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Specialized Hiring</h3>
              <p className="text-gray-300 mb-6">Industry-specific recruitment for technical and specialized roles.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  IT & Technology
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Healthcare
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Engineering
                </li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Volume Recruitment</h3>
              <p className="text-gray-300 mb-6">
                Large-scale hiring solutions for operational and entry-level positions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Campus Recruitment
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Bulk Hiring
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Seasonal Staff
                </li>
              </ul>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">International Placement</h3>
              <p className="text-gray-300 mb-6">Global recruitment services connecting talent across borders.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  UAE Placements
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Visa Assistance
                </li>
                <li className="flex items-center text-gray-400">
                  <CheckCircle className="w-5 h-5 text-[#d4af37] mr-3" />
                  Relocation Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#d4af37]">Industries</span> We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep industry expertise across diverse sectors for targeted recruitment solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Information Technology",
              "Healthcare & Pharmaceuticals",
              "Manufacturing & Engineering",
              "Financial Services",
              "Retail & E-commerce",
              "Real Estate & Construction",
              "Education & Training",
              "Hospitality & Tourism",
              "Logistics & Supply Chain",
              "Media & Entertainment",
              "Automotive",
              "Telecommunications",
            ].map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="text-white font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#d4af37]">Recruitment Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach ensuring the perfect match between talent and opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Requirement Analysis</h3>
              <p className="text-gray-300">
                Deep understanding of your needs, culture, and expectations for the perfect role definition.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Talent Sourcing</h3>
              <p className="text-gray-300">
                Multi-channel sourcing using our extensive network, databases, and industry connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Screening & Assessment</h3>
              <p className="text-gray-300">
                Rigorous evaluation including technical, behavioral, and cultural fit assessments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-black">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Final Selection</h3>
              <p className="text-gray-300">
                Presentation of top candidates with detailed profiles and interview coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37]/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your <span className="text-[#d4af37]">Perfect Match</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether you're looking for top talent or your next career opportunity, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4">
              <Link href="/contact">Hire Talent</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/careers">Find Jobs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
