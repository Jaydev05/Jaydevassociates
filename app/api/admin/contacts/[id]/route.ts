import { type NextRequest, NextResponse } from "next/server"
import { contactStore } from "@/lib/data-store"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const contact = contactStore.getById(params.id)
    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }
    return NextResponse.json(contact)
  } catch (error) {
    console.error("Error fetching contact:", error)
    return NextResponse.json({ error: "Failed to fetch contact" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const updatedContact = contactStore.update(params.id, body)

    if (!updatedContact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json(updatedContact)
  } catch (error) {
    console.error("Error updating contact:", error)
    return NextResponse.json({ error: "Failed to update contact" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deleted = contactStore.delete(params.id)
    if (!deleted) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 })
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ error: "Failed to delete contact" }, { status: 500 })
  }
}
