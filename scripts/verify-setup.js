// Verification script to check if everything is set up correctly

async function verifySetup() {
  console.log("🔍 Verifying Jaydev Associates Website Setup...\n")

  // Check environment variables
  console.log("📋 Environment Variables:")
  console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL ? "✅ Set" : "❌ Missing")
  console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET ? "✅ Set" : "❌ Missing")
  console.log("POSTGRES_URL:", process.env.POSTGRES_URL ? "✅ Set" : "❌ Missing")

  // Check if running in development
  console.log("\n🔧 Environment:")
  console.log("NODE_ENV:", process.env.NODE_ENV || "development")

  // Database connection test
  if (process.env.POSTGRES_URL) {
    try {
      const { sql } = require("@vercel/postgres")
      const result = await sql`SELECT NOW() as current_time`
      console.log("🗄️  Database:", "✅ Connected")
      console.log("Current time from DB:", result.rows[0].current_time)
    } catch (error) {
      console.log("🗄️  Database:", "❌ Connection failed")
      console.log("Error:", error.message)
    }
  }

  console.log("\n🚀 Setup Status:")
  const allGood = process.env.NEXTAUTH_URL && process.env.NEXTAUTH_SECRET && process.env.POSTGRES_URL
  console.log(allGood ? "✅ Ready for deployment!" : "❌ Please fix missing environment variables")

  if (allGood) {
    console.log("\n📝 Next Steps:")
    console.log("1. Run: npm run build")
    console.log("2. Deploy to Vercel")
    console.log("3. Run database initialization script")
    console.log("4. Test admin login at /admin")
  }
}

verifySetup().catch(console.error)
