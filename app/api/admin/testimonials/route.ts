import { type NextRequest, NextResponse } from "next/server"
import { testimonialStore } from "@/lib/data-store"

export async function GET() {
  try {
    const testimonials = testimonialStore.getAll()
    return NextResponse.json(testimonials)
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, position, company, content, rating, image, isActive } = body

    if (!name || !position || !company || !content) {
      return NextResponse.json({ error: "Name, position, company, and content are required" }, { status: 400 })
    }

    const newTestimonial = testimonialStore.add({
      name,
      position,
      company,
      content,
      rating: Number(rating) || 5,
      image: image || "/placeholder.svg",
      isActive: Boolean(isActive),
    })

    return NextResponse.json(newTestimonial)
  } catch (error) {
    console.error("Error creating testimonial:", error)
    return NextResponse.json({ error: "Failed to create testimonial" }, { status: 500 })
  }
}
