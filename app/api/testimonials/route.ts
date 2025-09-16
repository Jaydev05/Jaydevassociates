import { NextResponse } from "next/server"
import { testimonialStore } from "@/lib/data-store"

export async function GET() {
  try {
    // Get only active testimonials for public display
    const testimonials = testimonialStore.getActive()
    return NextResponse.json(testimonials)
  } catch (error) {
    console.error("Error fetching public testimonials:", error)
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 })
  }
}
