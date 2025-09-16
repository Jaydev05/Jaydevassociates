"use client"
import { useState, useEffect } from "react"
import { Users, Building, Laptop, Home, Calendar, Heart } from "lucide-react"

interface WebsiteStats {
  successfulPlacements: number
  facilitiesManaged: number
  itSolutionsDelivered: number
  propertiesTransacted: number
  yearsExperience: number
  happyClients: number
}

export default function StatsSection() {
  const [stats, setStats] = useState<WebsiteStats>({
    successfulPlacements: 2847,
    facilitiesManaged: 186,
    itSolutionsDelivered: 342,
    propertiesTransacted: 234,
    yearsExperience: 6,
    happyClients: 1250,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/website-stats")
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error("Failed to fetch stats:", error)
      // Keep default stats on error
    } finally {
      setLoading(false)
    }
  }

  const statsData = [
    {
      icon: Users,
      number: stats.successfulPlacements,
      label: "Successful Placements",
      color: "text-blue-400",
    },
    {
      icon: Building,
      number: stats.facilitiesManaged,
      label: "Facilities Managed",
      color: "text-green-400",
    },
    {
      icon: Laptop,
      number: stats.itSolutionsDelivered,
      label: "IT Solutions Delivered",
      color: "text-purple-400",
    },
    {
      icon: Home,
      number: stats.propertiesTransacted,
      label: "Properties Transacted",
      color: "text-orange-400",
    },
    {
      icon: Calendar,
      number: stats.yearsExperience,
      label: "Years Experience",
      color: "text-[#d4af37]",
    },
    {
      icon: Heart,
      number: stats.happyClients,
      label: "Happy Clients",
      color: "text-red-400",
    },
  ]

  if (loading) {
    return (
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4"></div>
                <div className="h-8 bg-gray-700 rounded w-16 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-[#d4af37]">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and client satisfaction across all our service domains.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-4">
                <stat.icon className={`w-12 h-12 mx-auto ${stat.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number.toLocaleString()}
                {stat.label === "Years Experience" ? "+" : ""}
              </div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
