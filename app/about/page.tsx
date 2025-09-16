import type { Metadata } from "next"
import { Target, Eye, Users, Globe, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - Jaydev Associates LLP",
  description:
    "Learn about Jaydev Associates LLP - your trusted partner for comprehensive business solutions across recruitment, facility management, IT, and real estate.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering exceptional quality in every project and service we provide.",
  },
  {
    icon: Users,
    title: "Integrity",
    description: "Building trust through transparent communication and ethical business practices.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "Embracing new technologies and methodologies to stay ahead of industry trends.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Fostering sustainable growth for our clients, partners, and our organization.",
  },
]

const team = [
  {
    name: "Rajesh Kumar",
    position: "Managing Director",
    image: "/professional-indian-businessman.png",
    description: "20+ years of experience in business development and strategic planning.",
  },
  {
    name: "Priya Sharma",
    position: "Head of Operations",
    image: "/professional-indian-woman-hr.png",
    description: "Expert in operational excellence and process optimization across all verticals.",
  },
  {
    name: "Amit Patel",
    position: "IT Director",
    image: "/indian-it-director.png",
    description: "Technology leader with expertise in digital transformation and IT solutions.",
  },
  {
    name: "Sunita Desai",
    position: "Real Estate Head",
    image: "/professional-indian-woman-property-investor.png",
    description: "Real estate specialist with deep market knowledge and investment expertise.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-team.png" alt="Our Team" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-[#d4af37]">Jaydev Associates</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your trusted partner for comprehensive business solutions. Building success through expertise, integrity,
            and innovation.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-[#d4af37]">Story</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Founded with a vision to provide comprehensive business solutions, Jaydev Associates LLP has grown to
              become a trusted partner for organizations across India and UAE. Our journey began with a simple belief:
              that every business deserves access to exceptional talent, reliable facility management, cutting-edge IT
              solutions, and strategic real estate services.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, we serve clients across Maharashtra, Gujarat, Goa, and UAE, delivering measurable results through
              our four core business verticals. Our success is built on the foundation of trust, expertise, and an
              unwavering commitment to our clients' growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="text-center md:text-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with comprehensive solutions that drive growth, efficiency, and success. We are
                committed to being the bridge between potential and achievement, delivering excellence in every
                interaction.
              </p>
            </div>

            <div className="text-center md:text-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the most trusted and innovative business solutions provider in the region, known for our
                integrity, expertise, and commitment to client success. We envision a future where every business has
                access to world-class services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#d4af37]">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and define our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-black/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-[#d4af37]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="text-[#d4af37]">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals leading our mission to deliver exceptional business solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#d4af37]/30"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#d4af37] font-semibold mb-4">{member.position}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37]/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner <span className="text-[#d4af37]">With Us</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help your business achieve its goals with our comprehensive solutions.
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
