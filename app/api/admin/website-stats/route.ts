import { type NextRequest, NextResponse } from "next/server"
import { statsStore } from "@/lib/data-store"

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200))

    const stats = statsStore.get()
    console.log("Returning website stats:", stats)
    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching website stats:", error)
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      successfulPlacements,
      facilitiesManaged,
      itSolutionsDelivered,
      propertiesTransacted,
      yearsExperience,
      happyClients,
    } = body

    console.log("Updating website stats:", body)

    // Update the stats using the store
    const updatedStats = statsStore.update({
      successfulPlacements: Number(successfulPlacements) || 0,
      facilitiesManaged: Number(facilitiesManaged) || 0,
      itSolutionsDelivered: Number(itSolutionsDelivered) || 0,
      propertiesTransacted: Number(propertiesTransacted) || 0,
      yearsExperience: Number(yearsExperience) || 0,
      happyClients: Number(happyClients) || 0,
    })

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log("Website stats updated successfully:", updatedStats)

    return NextResponse.json({
      success: true,
      message: "Website statistics updated successfully!",
      stats: updatedStats,
    })
  } catch (error) {
    console.error("Error updating website stats:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to update website stats",
      },
      { status: 500 },
    )
  }
}
