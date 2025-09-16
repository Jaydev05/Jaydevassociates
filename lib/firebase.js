import { initializeApp, getApps } from "firebase/app"

// Firebase integration has been removed. Using in-memory data store instead.
console.log("Firebase integration has been removed. Using in-memory data store instead.")

// Initialize Firebase only if it hasn't been initialized already
let app
if (getApps().length === 0) {
  app = initializeApp({})
} else {
  app = getApps()[0]
}

// Initialize Firestore
const db = null

// Initialize Auth
const auth = null

export { db, auth }
export default app
