import { type NextRequest, NextResponse } from "next/server"
import { contactStore } from "@/lib/data-store"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required" }, { status: 400 })
    }

    console.log("New contact submission:", { name, email, phone, service, message })

    // Add to contact store
    const newContact = contactStore.add({
      name,
      email,
      phone: phone || "",
      service: service || "general",
      message,
      status: "new",
    })

    console.log("Contact saved:", newContact)

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
      contactId: newContact.id,
    })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Failed to submit contact form" }, { status: 500 })
  }
}
