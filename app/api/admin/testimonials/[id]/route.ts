import { type NextRequest, NextResponse } from "next/server"
import { testimonialStore } from "@/lib/data-store"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const testimonial = testimonialStore.getById(params.id)
    if (!testimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 })
    }
    return NextResponse.json(testimonial)
  } catch (error) {
    console.error("Error fetching testimonial:", error)
    return NextResponse.json({ error: "Failed to fetch testimonial" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const updatedTestimonial = testimonialStore.update(params.id, body)

    if (!updatedTestimonial) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 })
    }

    return NextResponse.json(updatedTestimonial)
  } catch (error) {
    console.error("Error updating testimonial:", error)
    return NextResponse.json({ error: "Failed to update testimonial" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deleted = testimonialStore.delete(params.id)
    if (!deleted) {
      return NextResponse.json({ error: "Testimonial not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting testimonial:", error)
    return NextResponse.json({ error: "Failed to delete testimonial" }, { status: 500 })
  }
}
