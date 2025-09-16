"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Save, TrendingUp, Users, Building, Award } from "lucide-react"

interface WebsiteStats {
  successfulPlacements: number
  facilitiesManaged: number
  itSolutionsDelivered: number
  propertiesTransacted: number
  yearsExperience: number
  happyClients: number
}

export default function StatsManager() {
  const [stats, setStats] = useState<WebsiteStats>({
    successfulPlacements: 2500,
    facilitiesManaged: 150,
    itSolutionsDelivered: 300,
    propertiesTransacted: 200,
    yearsExperience: 5,
    happyClients: 1000,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/website-stats")
      const data = await response.json()
      if (data) {
        setStats(data)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await fetch("/api/admin/website-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stats),
      })
      alert("Stats updated successfully!")
    } catch (error) {
      console.error("Failed to save stats:", error)
      alert("Failed to save stats")
    } finally {
      setSaving(false)
    }
  }

  const updateStat = (key: keyof WebsiteStats, value: number) => {
    setStats({ ...stats, [key]: value })
  }

  if (loading) {
    return <div className="text-center py-8">Loading stats...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#d4af37]">Website Statistics</h2>
        <Button onClick={handleSave} disabled={saving} className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
          <Save className="w-4 h-4 mr-2" />
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gray-900 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37] flex items-center gap-2">
              <Users className="w-5 h-5" />
              Recruitment Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Successful Placements</label>
              <Input
                type="number"
                value={stats.successfulPlacements}
                onChange={(e) => updateStat("successfulPlacements", Number.parseInt(e.target.value) || 0)}
                className="bg-black border-[#d4af37]/30 text-white"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37] flex items-center gap-2">
              <Building className="w-5 h-5" />
              Facility Management Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Facilities Managed</label>
              <Input
                type="number"
                value={stats.facilitiesManaged}
                onChange={(e) => updateStat("facilitiesManaged", Number.parseInt(e.target.value) || 0)}
                className="bg-black border-[#d4af37]/30 text-white"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37] flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              IT Solutions Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">IT Solutions Delivered</label>
              <Input
                type="number"
                value={stats.itSolutionsDelivered}
                onChange={(e) => updateStat("itSolutionsDelivered", Number.parseInt(e.target.value) || 0)}
                className="bg-black border-[#d4af37]/30 text-white"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37] flex items-center gap-2">
              <Award className="w-5 h-5" />
              Real Estate Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Properties Transacted</label>
              <Input
                type="number"
                value={stats.propertiesTransacted}
                onChange={(e) => updateStat("propertiesTransacted", Number.parseInt(e.target.value) || 0)}
                className="bg-black border-[#d4af37]/30 text-white"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37]">Company Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience</label>
              <Input
                type="number"
                value={stats.yearsExperience}
                onChange={(e) => updateStat("yearsExperience", Number.parseInt(e.target.value) || 0)}
                className="bg-black border-[#d4af37]/30 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Happy Clients</label>
              <Input
                type="number"
                value={stats.happyClients}
                onChange={(e) => updateStat("happyClients", Number.parseInt(e.target.value) || 0)}
                className="bg-black border-[#d4af37]/30 text-white"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
