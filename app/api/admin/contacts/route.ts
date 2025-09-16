import { type NextRequest, NextResponse } from "next/server"
import { contactStore } from "@/lib/data-store"

export async function GET() {
  try {
    const contacts = contactStore.getAll()
    return NextResponse.json(contacts)
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    const newContact = contactStore.add({
      name,
      email,
      phone: phone || "",
      service: service || "general",
      message,
      status: "new",
    })

    return NextResponse.json(newContact)
  } catch (error) {
    console.error("Error creating contact:", error)
    return NextResponse.json({ error: "Failed to create contact" }, { status: 500 })
  }
}
