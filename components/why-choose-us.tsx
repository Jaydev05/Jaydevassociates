"use client"

import { Shield, Award, Users, Clock, Globe, Heart } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Years of industry experience with a proven track record of successful project delivery.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Commitment to excellence with rigorous quality control processes and standards.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Professional team of experts committed to understanding and meeting your unique needs.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Reliable service delivery within agreed timelines without compromising on quality.",
  },
  {
    icon: Globe,
    title: "Pan-India Presence",
    description: "Strategic presence across Maharashtra, Gujarat, Goa, and UAE for comprehensive coverage.",
  },
  {
    icon: Heart,
    title: "Long-term Partnership",
    description: "Building lasting relationships through consistent service and ongoing support.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#d4af37]">Jaydev Associates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine industry expertise with personalized service to deliver exceptional results for our clients
            across all business verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl hover:border-[#d4af37]/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center group-hover:bg-[#d4af37]/30 transition-colors duration-300">
                  <reason.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
