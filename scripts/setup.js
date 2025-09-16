const bcrypt = require("bcryptjs")

// Generate password hash for admin user
async function generatePasswordHash() {
  const password = "admin123"
  const hash = await bcrypt.hash(password, 12)
  console.log("Password hash for admin123:", hash)
  console.log("Use this hash in your database initialization script")
}

// Run the function
generatePasswordHash().catch(console.error)
