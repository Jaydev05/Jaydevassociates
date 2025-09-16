import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Import Firebase auth here to avoid SSR issues
          const { getAuth, signInWithEmailAndPassword } = await import("firebase/auth")
          const { auth } = await import("./firebase")

          // Sign in with Firebase Auth
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)

          const user = userCredential.user

          // Get user role from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid))
          const userData = userDoc.data()

          if (!userData || userData.role !== "admin") {
            return null
          }

          return {
            id: user.uid,
            email: user.email,
            name: userData.name || "Admin User",
            role: userData.role,
          }
        } catch (error) {
          console.error("Authentication error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub
        session.user.role = token.role
      }
      return session
    },
  },
  pages: {
    signIn: "/admin/login",
  },
}
