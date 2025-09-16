import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { currentPassword, newPassword } = body

    // Simulate password validation
    if (currentPassword !== "Admin@123456") {
      return NextResponse.json({ success: false, error: "Current password is incorrect" }, { status: 400 })
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ success: false, error: "New password must be at least 8 characters" }, { status: 400 })
    }

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Mock: Password changed successfully")

    return NextResponse.json({
      success: true,
      message: "Password changed successfully!",
    })
  } catch (error) {
    console.error("Error changing password:", error)
    return NextResponse.json({ error: "Failed to change password" }, { status: 500 })
  }
}
