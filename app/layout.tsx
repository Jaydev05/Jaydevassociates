import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Providers } from "@/components/providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaydev Associates LLP - Your Growth, Our Commitment",
  description:
    "Comprehensive business solutions across recruitment, facility management, IT solutions, and real estate services. Your trusted partner for sustainable growth.",
  keywords:
    "recruitment services, facility management, IT solutions, real estate, business solutions, Jaydev Associates",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
