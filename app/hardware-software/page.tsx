import type { Metadata } from "next"
import { Laptop, Server, Code, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hardware & Software Solutions - Jaydev Associates LLP",
  description:
    "Complete IT solutions including hardware procurement, software development, and technical support services.",
}

const services = [
  {
    icon: Laptop,
    title: "Hardware Procurement",
    description: "Complete hardware solutions for your business needs",
    features: ["Desktop & Laptops", "Servers & Networking", "Printers & Peripherals", "Custom Configurations"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your requirements",
    features: ["Web Applications", "Mobile Apps", "Desktop Software", "Database Solutions"],
  },
  {
    icon: Server,
    title: "System Integration",
    description: "Seamless integration of hardware and software systems",
    features: ["Network Setup", "System Migration", "Cloud Integration", "Data Synchronization"],
  },
  {
    icon: Shield,
    title: "IT Support & Maintenance",
    description: "Ongoing support and maintenance for your IT infrastructure",
    features: ["24/7 Support", "Preventive Maintenance", "Security Updates", "Performance Optimization"],
  },
]

const technologies = [
  "Microsoft Technologies",
  "Java & Spring",
  "Python & Django",
  "React & Node.js",
  "Cloud Platforms",
  "Database Systems",
  "Mobile Development",
  "DevOps Tools",
]

export default function HardwareSoftwarePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/it-hero.png" alt="IT Solutions" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="text-[#d4af37]">IT Solutions</span>
              <br />
              That Drive Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto drop-shadow-md">
              Comprehensive hardware and software solutions to power your business growth and digital transformation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4 shadow-lg"
            >
              <Link href="/contact">
                Get IT Solutions
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
              Our <span className="text-[#d4af37]">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hardware procurement to custom software development, we provide end-to-end IT solutions.
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

      {/* Technologies Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#d4af37]">Technologies</span> We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="text-white font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#d4af37]/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-[#d4af37]">IT Infrastructure</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust and scalable technology foundation for your business.
          </p>
          <Button asChild size="lg" className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-4">
            <Link href="/contact">Start Your IT Journey</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
