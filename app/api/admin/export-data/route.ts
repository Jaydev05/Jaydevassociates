import { NextResponse } from "next/server"
import { contactStore, testimonialStore, statsStore } from "@/lib/data-store"

export async function GET() {
  try {
    const exportData = {
      contacts: contactStore.getAll(),
      testimonials: testimonialStore.getAll(),
      websiteStats: statsStore.get(),
      exportedAt: new Date().toISOString(),
    }

    return NextResponse.json(exportData)
  } catch (error) {
    console.error("Error exporting data:", error)
    return NextResponse.json({ error: "Failed to export data" }, { status: 500 })
  }
}
