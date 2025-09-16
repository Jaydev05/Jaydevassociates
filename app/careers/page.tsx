import { Users, TrendingUp, Award, Heart, Send, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Recruitment Consultant",
      department: "Recruitment",
      location: "Goregaon Mangaon, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description: "Looking for experienced recruitment consultant to join our growing team.",
    },
    {
      title: "Facility Management Executive",
      department: "Facility Management",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description: "Manage facility operations and coordinate with clients across multiple locations.",
    },
    {
      title: "IT Solutions Specialist",
      department: "IT Solutions",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "2-6 years",
      description: "Handle hardware/software solutions and provide technical support to clients.",
    },
    {
      title: "Real Estate Associate",
      department: "Real Estate",
      location: "Goa",
      type: "Full-time",
      experience: "1-3 years",
      description: "Assist clients with property transactions and market research.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-[#d4af37]">Join Our</span> Growing Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of Jaydev Associates LLP's mission to drive business growth across Maharashtra, Gujarat, Goa & UAE.
            We're looking for passionate professionals to join our diverse team.
          </p>
          <Button asChild className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-3">
            <Link href="#open-positions">View Open Positions</Link>
          </Button>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-[#d4af37]">Work With Us</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
              <TrendingUp className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-300 text-sm">
                Advance your career with our expanding operations across multiple states and countries.
              </p>
            </div>
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
              <Users className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Diverse Team</h3>
              <p className="text-gray-300 text-sm">
                Work with professionals from various backgrounds and gain experience across multiple industries.
              </p>
            </div>
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
              <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Recognition</h3>
              <p className="text-gray-300 text-sm">
                Your contributions are valued and recognized with competitive compensation and benefits.
              </p>
            </div>
            <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
              <Heart className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Work-Life Balance</h3>
              <p className="text-gray-300 text-sm">
                Enjoy flexible working arrangements and a supportive work environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#d4af37]">Open</span> Positions
          </h2>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-black/50 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-[#d4af37]" />
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                        <span>📈 {position.experience}</span>
                      </div>
                      <p className="text-gray-300">{position.description}</p>
                    </div>
                    <Button asChild className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 whitespace-nowrap">
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Application <span className="text-[#d4af37]">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Apply</h3>
              <p className="text-gray-300 text-sm">
                Submit your application through our contact form or email your resume directly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Review</h3>
              <p className="text-gray-300 text-sm">
                Our HR team will review your application and contact you within 48 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Interview</h3>
              <p className="text-gray-300 text-sm">
                Participate in our interview process to discuss your experience and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-black">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Join</h3>
              <p className="text-gray-300 text-sm">
                Welcome to the team! Begin your journey with comprehensive onboarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#d4af37]/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-[#d4af37]">Start Your Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't see a position that matches your skills? We're always looking for talented individuals. Send us your
            resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90 text-lg px-8 py-3">
              <Link href="/contact">
                <Send className="w-5 h-5 mr-2" />
                Send Your Resume
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Contact HR Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
