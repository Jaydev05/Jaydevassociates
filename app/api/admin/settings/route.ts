import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

// Mock storage - in production, use a database
const settings = {
  company: {
    name: "Jaydev Associates LLP",
    description:
      "Comprehensive business solutions across recruitment, facility management, IT solutions, and real estate services.",
    email: "info@jaydevassociates.com",
    phone: "+91 98765 43210",
    address: "Business District, Mumbai, Maharashtra, India",
    website: "https://jaydevassociates.com",
    seoTitle: "Jaydev Associates LLP - Your Growth, Our Commitment",
    seoDescription:
      "Comprehensive business solutions across recruitment, facility management, IT solutions, and real estate services. Your trusted partner for sustainable growth.",
    seoKeywords:
      "recruitment services, facility management, IT solutions, real estate, business solutions, Jaydev Associates",
  },
  security: {
    twoFactorEnabled: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
  },
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json(settings)
  } catch (error) {
    console.error("Settings fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch settings" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { type, data } = await request.json()

    if (type === "company") {
      settings.company = { ...settings.company, ...data }
    } else if (type === "security") {
      settings.security = { ...settings.security, ...data }
    }

    return NextResponse.json({ success: true, message: "Settings updated successfully" })
  } catch (error) {
    console.error("Settings update error:", error)
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 })
  }
}
