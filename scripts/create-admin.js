import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, setDoc } from "firebase/firestore"

// Your Firebase config - REPLACE WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

async function createAdminUser() {
  try {
    console.log("🔥 Creating admin user in Firebase...")

    // Create admin user
    const userCredential = await createUserWithEmailAndPassword(auth, "admin@jaydevassociates.com", "Admin@123456")

    const user = userCredential.user
    console.log("✅ Admin user created with ID:", user.uid)

    // Add admin role to Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: "admin@jaydevassociates.com",
      role: "admin",
      name: "Admin User",
      createdAt: new Date(),
    })

    console.log("✅ Admin user setup complete!")
    console.log("📧 Email: admin@jaydevassociates.com")
    console.log("🔑 Password: Admin@123456")
    console.log("🌐 Admin URL: http://localhost:3000/admin")

    process.exit(0)
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("✅ Admin user already exists!")
      console.log("📧 Email: admin@jaydevassociates.com")
      console.log("🔑 Password: Admin@123456")
      console.log("🌐 Admin URL: http://localhost:3000/admin")
    } else {
      console.error("❌ Error creating admin user:", error.message)
    }
    process.exit(1)
  }
}

createAdminUser()
