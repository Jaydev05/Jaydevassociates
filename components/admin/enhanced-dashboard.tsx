"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MessageSquare,
  LogOut,
  Eye,
  TrendingUp,
  Settings,
  BarChart3,
  Calendar,
  Download,
  RefreshCw,
  Activity,
  Shield,
  Database,
  Server,
  AlertTriangle,
  CheckCircle,
  Clock,
  Mail,
} from "lucide-react"
import ContactsManager from "./contacts-manager"
import TestimonialsManager from "./testimonials-manager"
import StatsManager from "./stats-manager"
import SettingsManager from "./settings-manager"

interface AdminDashboardProps {
  onLogout: () => void
}

interface DashboardStats {
  totalContacts: number
  totalTestimonials: number
  totalViews: number
  recentContacts: number
  newContactsToday: number
  activeTestimonials: number
}

interface SystemHealth {
  database: "healthy" | "warning" | "error"
  api: "healthy" | "warning" | "error"
  security: "healthy" | "warning" | "error"
  lastCheck: string
}

interface RecentActivity {
  id: string
  type: "contact" | "testimonial" | "login" | "export"
  description: string
  timestamp: string
  status: "success" | "warning" | "error"
}

export default function EnhancedDashboard({ onLogout }: AdminDashboardProps) {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    totalTestimonials: 0,
    totalViews: 0,
    recentContacts: 0,
    newContactsToday: 0,
    activeTestimonials: 0,
  })
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    database: "healthy",
    api: "healthy",
    security: "healthy",
    lastCheck: new Date().toISOString(),
  })
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    const healthTimer = setInterval(checkSystemHealth, 30000) // Check every 30 seconds
    return () => {
      clearInterval(timer)
      clearInterval(healthTimer)
    }
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      await Promise.all([fetchStats(), checkSystemHealth(), fetchRecentActivity()])
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats")
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error)
    }
  }

  const checkSystemHealth = async () => {
    try {
      const response = await fetch("/api/health")
      if (response.ok) {
        const data = await response.json()
        setSystemHealth(data)
      }
    } catch (error) {
      console.error("Failed to check system health:", error)
      setSystemHealth({
        database: "error",
        api: "error",
        security: "warning",
        lastCheck: new Date().toISOString(),
      })
    }
  }

  const fetchRecentActivity = async () => {
    try {
      const response = await fetch("/api/admin/recent-activity")
      if (response.ok) {
        const data = await response.json()
        setRecentActivity(data)
      }
    } catch (error) {
      console.error("Failed to fetch recent activity:", error)
    }
  }

  const handleRefresh = () => {
    fetchDashboardData()
  }

  const handleExportData = async () => {
    try {
      const response = await fetch("/api/admin/export-data")
      if (response.ok) {
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `jaydev-associates-backup-${new Date().toISOString().split("T")[0]}.json`
        a.click()
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error("Export failed:", error)
      alert("Export failed. Please try again.")
    }
  }

  const getHealthIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case "error":
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      default:
        return <AlertTriangle className="w-4 h-4 text-gray-400" />
    }
  }

  const getHealthColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "text-green-400"
      case "warning":
        return "text-yellow-400"
      case "error":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "contact":
        return <Mail className="w-4 h-4" />
      case "testimonial":
        return <MessageSquare className="w-4 h-4" />
      case "login":
        return <Shield className="w-4 h-4" />
      case "export":
        return <Download className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#d4af37] text-lg">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Enhanced Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-[#d4af37]/30 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img src="/images/logo.png" alt="Jaydev Associates" className="h-12" />
                  <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-lg"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#d4af37]">Business Management Portal</h1>
                  <p className="text-sm text-gray-400">Comprehensive business administration</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{currentTime.toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentTime.toLocaleTimeString()}</span>
                </div>
              </div>

              <Button
                onClick={handleRefresh}
                variant="outline"
                size="sm"
                className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 bg-transparent"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>

              <Button
                onClick={handleExportData}
                variant="outline"
                size="sm"
                className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>

              <Button
                onClick={onLogout}
                variant="outline"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* System Health Status */}
        <Card className="mb-6 bg-gray-900/50 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37] flex items-center gap-2">
              <Shield className="w-5 h-5" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  <span>Database</span>
                </div>
                <div className="flex items-center gap-2">
                  {getHealthIcon(systemHealth.database)}
                  <span className={getHealthColor(systemHealth.database)}>{systemHealth.database}</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  <span>API</span>
                </div>
                <div className="flex items-center gap-2">
                  {getHealthIcon(systemHealth.api)}
                  <span className={getHealthColor(systemHealth.api)}>{systemHealth.api}</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Security</span>
                </div>
                <div className="flex items-center gap-2">
                  {getHealthIcon(systemHealth.security)}
                  <span className={getHealthColor(systemHealth.security)}>{systemHealth.security}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Last checked: {new Date(systemHealth.lastCheck).toLocaleString()}
            </p>
          </CardContent>
        </Card>

        {/* Enhanced Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-300 text-sm font-medium">Total Contacts</p>
                  <p className="text-3xl font-bold text-white">{stats.totalContacts}</p>
                  <p className="text-xs text-gray-400 mt-1">+{stats.newContactsToday} today</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/30 hover:border-green-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300 text-sm font-medium">Testimonials</p>
                  <p className="text-3xl font-bold text-white">{stats.totalTestimonials}</p>
                  <p className="text-xs text-gray-400 mt-1">{stats.activeTestimonials} active</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-full">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm font-medium">Page Views</p>
                  <p className="text-3xl font-bold text-white">{stats.totalViews.toLocaleString()}</p>
                  <p className="text-xs text-gray-400 mt-1">This month</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-300 text-sm font-medium">Recent Inquiries</p>
                  <p className="text-3xl font-bold text-white">{stats.recentContacts}</p>
                  <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                </div>
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <TrendingUp className="w-8 h-8 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mb-8 bg-gray-900/50 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37] flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="p-2 bg-[#d4af37]/20 rounded-full">{getActivityIcon(activity.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{activity.description}</p>
                    <p className="text-xs text-gray-400">{new Date(activity.timestamp).toLocaleString()}</p>
                  </div>
                  <Badge
                    className={
                      activity.status === "success"
                        ? "bg-green-500"
                        : activity.status === "warning"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }
                  >
                    {activity.status}
                  </Badge>
                </div>
              ))}
              {recentActivity.length === 0 && <p className="text-center text-gray-400 py-4">No recent activity</p>}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Main Content */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-[#d4af37]/20 p-1 rounded-xl">
            <TabsTrigger
              value="contacts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg transition-all duration-300"
            >
              <Users className="w-4 h-4 mr-2" />
              Contact Management
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Testimonials
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg transition-all duration-300"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Website Analytics
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4af37] data-[state=active]:text-black rounded-lg transition-all duration-300"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            <ContactsManager onStatsUpdate={fetchStats} />
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6">
            <TestimonialsManager onStatsUpdate={fetchStats} />
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <StatsManager />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <SettingsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
