"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  rating: number
  image?: string
  isActive: boolean
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/testimonials")
      const data = await response.json()
      setTestimonials(data)
    } catch (error) {
      console.error("Failed to fetch testimonials:", error)
      // Keep empty array on error
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-[#d4af37]">Clients Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="bg-gray-900/50 border-[#d4af37]/20 animate-pulse">
                <CardContent className="p-8">
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2 mb-6"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                    <div>
                      <div className="h-4 bg-gray-700 rounded w-20 mb-2"></div>
                      <div className="h-3 bg-gray-700 rounded w-16"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-[#d4af37]">Clients Say</span>
            </h2>
            <p className="text-gray-400">No testimonials available at the moment.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-[#d4af37]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gray-900/50 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-[#d4af37] mb-4" />
                  <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
