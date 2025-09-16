const { initializeApp } = require("firebase/app")
const { getFirestore, collection, addDoc, doc, setDoc, serverTimestamp } = require("firebase/firestore")

// Your Firebase configuration - replace with your actual values
const firebaseConfig = {
  apiKey: "AIzaSyDq48rnKmS7IhuAb93jzU6cDP5BZ4FHlR4",
  authDomain: "jaydev-associates-website.firebaseapp.com",
  projectId: "jaydev-associates-website",
  storageBucket: "jaydev-associates-website.firebasestorage.app",
  messagingSenderId: "255241795232",
  appId: "1:255241795232:web:6fa1c726438c7b9ee0fbc5",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function addTestData() {
  try {
    console.log("Test data script is no longer needed. Data is now managed in-memory.")
    console.log("Check lib/data-store.ts for initial data setup.")
    process.exit(0)
  } catch (error) {
    console.error("Error adding test data:", error)
    process.exit(1)
  }
}

addTestData()
