import { NextResponse } from "next/server"
import { contactStore, testimonialStore } from "@/lib/data-store"

export async function GET() {
  try {
    const contacts = contactStore.getAll()
    const testimonials = testimonialStore.getAll()

    // Get recent activities (last 10)
    const recentContacts = contacts.slice(0, 5).map((contact) => ({
      id: contact.id,
      type: "contact",
      title: `New contact from ${contact.name}`,
      description: `${contact.service} inquiry`,
      timestamp: contact.createdAt,
    }))

    const recentTestimonials = testimonials.slice(0, 5).map((testimonial) => ({
      id: testimonial.id,
      type: "testimonial",
      title: `New testimonial from ${testimonial.name}`,
      description: `${testimonial.company} - ${testimonial.rating} stars`,
      timestamp: testimonial.createdAt,
    }))

    const activities = [...recentContacts, ...recentTestimonials]
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10)

    return NextResponse.json(activities)
  } catch (error) {
    console.error("Error fetching recent activity:", error)
    return NextResponse.json({ error: "Failed to fetch recent activity" }, { status: 500 })
  }
}
