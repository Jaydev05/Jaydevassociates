"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  MessageSquare,
  BarChart3,
  Mail,
  Phone,
  Building,
  Star,
  Edit,
  Trash2,
  Save,
  PlusCircle,
  Download,
  RefreshCw,
  Eye,
  X,
  Search,
} from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: "new" | "contacted" | "closed"
  createdAt: string
}

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  rating: number
  isActive: boolean
  createdAt: string
}

interface WebsiteStats {
  successfulPlacements: number
  facilitiesManaged: number
  itSolutionsDelivered: number
  propertiesTransacted: number
  yearsExperience: number
  happyClients: number
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })

  // States
  const [contacts, setContacts] = useState<Contact[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [websiteStats, setWebsiteStats] = useState<WebsiteStats>({
    successfulPlacements: 2500,
    facilitiesManaged: 150,
    itSolutionsDelivered: 300,
    propertiesTransacted: 200,
    yearsExperience: 5,
    happyClients: 1000,
  })
  const [dashboardStats, setDashboardStats] = useState({
    totalContacts: 0,
    totalTestimonials: 0,
    totalViews: 0,
    recentContacts: 0,
  })

  // Form states
  const [contactSearch, setContactSearch] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [showAddTestimonial, setShowAddTestimonial] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
    rating: 5,
    isActive: true,
  })

  useEffect(() => {
    // Check if user is authenticated (simple check for demo)
    const isAuth = localStorage.getItem("adminAuth") === "true"
    setIsAuthenticated(isAuth)

    if (isAuth) {
      fetchAllData()
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication for demo
    if (loginForm.email === "admin@jaydevassociates.com" && loginForm.password === "Admin@123456") {
      localStorage.setItem("adminAuth", "true")
      setIsAuthenticated(true)
      fetchAllData()
    } else {
      alert("Invalid credentials")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    setIsAuthenticated(false)
    setLoginForm({ email: "", password: "" })
  }

  const fetchAllData = async () => {
    await Promise.all([fetchContacts(), fetchTestimonials(), fetchWebsiteStats(), fetchDashboardStats()])
  }

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts")
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error)
    }
  }

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/admin/testimonials")
      if (response.ok) {
        const data = await response.json()
        setTestimonials(data)
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error)
    }
  }

  const fetchWebsiteStats = async () => {
    try {
      const response = await fetch("/api/admin/website-stats")
      if (response.ok) {
        const data = await response.json()
        setWebsiteStats(data)
      }
    } catch (error) {
      console.error("Error fetching website stats:", error)
    }
  }

  const fetchDashboardStats = async () => {
    try {
      const response = await fetch("/api/admin/stats")
      if (response.ok) {
        const data = await response.json()
        setDashboardStats(data)
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error)
    }
  }

  const updateContactStatus = async (id: string, status: Contact["status"]) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })

      if (response.ok) {
        setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, status } : contact)))
      } else {
        alert("Failed to update contact status")
      }
    } catch (error) {
      console.error("Error updating contact status:", error)
      alert("Failed to update contact status")
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return

    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact.id !== id))
        fetchDashboardStats()
      } else {
        alert("Failed to delete contact")
      }
    } catch (error) {
      console.error("Error deleting contact:", error)
      alert("Failed to delete contact")
    }
  }

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingTestimonial ? `/api/admin/testimonials/${editingTestimonial.id}` : "/api/admin/testimonials"
      const method = editingTestimonial ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialForm),
      })

      if (response.ok) {
        await fetchTestimonials()
        await fetchDashboardStats()
        setTestimonialForm({
          name: "",
          position: "",
          company: "",
          content: "",
          rating: 5,
          isActive: true,
        })
        setShowAddTestimonial(false)
        setEditingTestimonial(null)
        alert(editingTestimonial ? "Testimonial updated successfully!" : "Testimonial added successfully!")
      } else {
        alert("Failed to save testimonial")
      }
    } catch (error) {
      console.error("Error saving testimonial:", error)
      alert("Failed to save testimonial")
    }
  }

  const editTestimonial = (testimonial: Testimonial) => {
    setTestimonialForm({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      content: testimonial.content,
      rating: testimonial.rating,
      isActive: testimonial.isActive,
    })
    setEditingTestimonial(testimonial)
    setShowAddTestimonial(true)
  }

  const deleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return

    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await fetchTestimonials()
        await fetchDashboardStats()
        alert("Testimonial deleted successfully!")
      } else {
        alert("Failed to delete testimonial")
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error)
      alert("Failed to delete testimonial")
    }
  }

  const toggleTestimonialActive = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive }),
      })

      if (response.ok) {
        setTestimonials(testimonials.map((t) => (t.id === id ? { ...t, isActive } : t)))
      } else {
        alert("Failed to update testimonial status")
      }
    } catch (error) {
      console.error("Error updating testimonial status:", error)
      alert("Failed to update testimonial status")
    }
  }

  const updateWebsiteStats = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/admin/website-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(websiteStats),
      })

      if (response.ok) {
        alert("Website statistics updated successfully!")
      } else {
        alert("Failed to update website statistics")
      }
    } catch (error) {
      console.error("Error updating website stats:", error)
      alert("Failed to update website statistics")
    } finally {
      setLoading(false)
    }
  }

  const exportContacts = () => {
    const csv = [
      ["Name", "Email", "Phone", "Service", "Message", "Status", "Date"],
      ...contacts.map((contact) => [
        contact.name,
        contact.email,
        contact.phone,
        contact.service,
        contact.message,
        contact.status,
        new Date(contact.createdAt).toLocaleDateString(),
      ]),
    ]
      .map((row) => row.map((field) => `"${field}"`).join(","))
      .join("\n")

    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `contacts-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(contactSearch.toLowerCase()) ||
      contact.email.toLowerCase().includes(contactSearch.toLowerCase()) ||
      contact.service.toLowerCase().includes(contactSearch.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500"
      case "contacted":
        return "bg-yellow-500"
      case "closed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <Card className="w-full max-w-md bg-gray-900 border-[#d4af37]/20">
          <CardHeader className="text-center">
            <img src="/images/logo.png" alt="Jaydev Associates" className="h-16 mx-auto mb-4" />
            <CardTitle className="text-2xl text-[#d4af37]">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <Input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="bg-black border-[#d4af37]/30 text-white"
                  placeholder="admin@jaydevassociates.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <Input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="bg-black border-[#d4af37]/30 text-white"
                  placeholder="Admin@123456"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main admin dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-[#d4af37]/30 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/images/logo.png" alt="Jaydev Associates" className="h-12" />
              <div>
                <h1 className="text-2xl font-bold text-[#d4af37]">Admin Dashboard</h1>
                <p className="text-sm text-gray-400">Firebase-Powered Management Portal</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={fetchAllData}
                variant="outline"
                size="sm"
                className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 bg-transparent"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? "animate-spin" : ""}`} />
                Refresh
              </Button>

              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-300 text-sm font-medium">Total Contacts</p>
                  <p className="text-3xl font-bold text-white">{dashboardStats.totalContacts}</p>
                  <p className="text-xs text-gray-400 mt-1">{contacts.filter((c) => c.status === "new").length} new</p>
                </div>
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-300 text-sm font-medium">Testimonials</p>
                  <p className="text-3xl font-bold text-white">{dashboardStats.totalTestimonials}</p>
                  <p className="text-xs text-gray-400 mt-1">{testimonials.filter((t) => t.isActive).length} active</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded-full">
                  <MessageSquare className="w-8 h-8 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-300 text-sm font-medium">Placements</p>
                  <p className="text-3xl font-bold text-white">{websiteStats.successfulPlacements}</p>
                  <p className="text-xs text-gray-400 mt-1">Successful</p>
                </div>
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-500/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-300 text-sm font-medium">Recent Inquiries</p>
                  <p className="text-3xl font-bold text-white">{dashboardStats.recentContacts}</p>
                  <p className="text-xs text-gray-400 mt-1">Last 7 days</p>
                </div>
                <div className="p-3 bg-orange-500/20 rounded-full">
                  <Mail className="w-8 h-8 text-orange-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-[#d4af37]/20 p-1 rounded-xl">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="contacts"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg"
            >
              <Users className="w-4 h-4 mr-2" />
              Contacts ({dashboardStats.totalContacts})
            </TabsTrigger>
            <TabsTrigger
              value="testimonials"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Testimonials ({dashboardStats.totalTestimonials})
            </TabsTrigger>
            <TabsTrigger
              value="stats"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4d03f] data-[state=active]:text-black rounded-lg"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Website Stats
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-[#d4af37]/20">
                <CardHeader>
                  <CardTitle className="text-[#d4af37]">Recent Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contacts.slice(0, 5).map((contact) => (
                      <div key={contact.id} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                        <div className="p-2 bg-[#d4af37]/20 rounded-full">
                          <Mail className="w-4 h-4 text-[#d4af37]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{contact.name}</p>
                          <p className="text-xs text-gray-400">{contact.service}</p>
                        </div>
                        <Badge className={`${getStatusColor(contact.status)} text-white`}>{contact.status}</Badge>
                      </div>
                    ))}
                    {contacts.length === 0 && <p className="text-center text-gray-400 py-4">No contacts yet</p>}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-[#d4af37]/20">
                <CardHeader>
                  <CardTitle className="text-[#d4af37]">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={() => setActiveTab("contacts")}
                    className="w-full justify-start bg-gray-700 hover:bg-gray-600"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Manage Contacts ({dashboardStats.totalContacts})
                  </Button>
                  <Button
                    onClick={() => {
                      setActiveTab("testimonials")
                      setShowAddTestimonial(true)
                    }}
                    className="w-full justify-start bg-gray-700 hover:bg-gray-600"
                  >
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add New Testimonial
                  </Button>
                  <Button
                    onClick={() => setActiveTab("stats")}
                    className="w-full justify-start bg-gray-700 hover:bg-gray-600"
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Update Website Stats
                  </Button>
                  <Button onClick={exportContacts} className="w-full justify-start bg-gray-700 hover:bg-gray-600">
                    <Download className="w-4 h-4 mr-2" />
                    Export Contacts CSV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contacts Tab */}
          <TabsContent value="contacts" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#d4af37]">Contact Management</h2>
                <p className="text-gray-400">Manage customer inquiries from Firebase</p>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search contacts..."
                    value={contactSearch}
                    onChange={(e) => setContactSearch(e.target.value)}
                    className="pl-10 bg-gray-900 border-[#d4af37]/30 text-white"
                  />
                </div>
                <Button onClick={exportContacts} className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {filteredContacts.map((contact) => (
                <Card key={contact.id} className="bg-gray-900 border-[#d4af37]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg text-white">{contact.name}</h3>
                          <Badge className={`${getStatusColor(contact.status)} text-white`}>{contact.status}</Badge>
                        </div>
                        <div className="space-y-2 text-gray-300">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>{contact.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>{contact.phone || "Not provided"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            <span>{contact.service}</span>
                          </div>
                          <p className="text-sm mt-2">
                            <strong>Message:</strong> {contact.message}
                          </p>
                          <p className="text-xs text-gray-500">
                            Received: {new Date(contact.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedContact(contact)}
                          className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Select
                          value={contact.status}
                          onValueChange={(value) => updateContactStatus(contact.id, value as Contact["status"])}
                        >
                          <SelectTrigger className="w-32 bg-gray-800 border-[#d4af37]/30">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteContact(contact.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {filteredContacts.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  {contactSearch ? "No contacts match your search." : "No contacts found."}
                </div>
              )}
            </div>

            {/* Contact Detail Modal */}
            {selectedContact && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                <Card className="bg-gray-900 border-[#d4af37]/20 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                  <CardHeader>
                    <CardTitle className="text-[#d4af37]">Contact Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-400">Name</label>
                      <p className="text-white">{selectedContact.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Email</label>
                      <p className="text-white">{selectedContact.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Phone</label>
                      <p className="text-white">{selectedContact.phone || "Not provided"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Service</label>
                      <p className="text-white">{selectedContact.service}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Message</label>
                      <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Status</label>
                      <Badge className={`${getStatusColor(selectedContact.status)} text-white ml-2`}>
                        {selectedContact.status}
                      </Badge>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-400">Received</label>
                      <p className="text-white">{new Date(selectedContact.createdAt).toLocaleString()}</p>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={() => setSelectedContact(null)}
                        variant="outline"
                        className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                      >
                        Close
                      </Button>
                      <Button
                        onClick={() => window.open(`mailto:${selectedContact.email}`)}
                        className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Reply via Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#d4af37]">Testimonials Management</h2>
                <p className="text-gray-400">Manage customer testimonials in Firebase</p>
              </div>
              <Button
                onClick={() => setShowAddTestimonial(true)}
                className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Testimonial
              </Button>
            </div>

            {/* Add/Edit Testimonial Form */}
            {showAddTestimonial && (
              <Card className="bg-gray-900 border-[#d4af37]/20">
                <CardHeader>
                  <CardTitle className="text-[#d4af37]">
                    {editingTestimonial ? "Edit Testimonial" : "Add New Testimonial"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTestimonialSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <Input
                          value={testimonialForm.name}
                          onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                          className="bg-black border-[#d4af37]/30 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                        <Input
                          value={testimonialForm.position}
                          onChange={(e) => setTestimonialForm({ ...testimonialForm, position: e.target.value })}
                          className="bg-black border-[#d4af37]/30 text-white"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                        <Input
                          value={testimonialForm.company}
                          onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                          className="bg-black border-[#d4af37]/30 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                        <Select
                          value={testimonialForm.rating.toString()}
                          onValueChange={(value) =>
                            setTestimonialForm({ ...testimonialForm, rating: Number.parseInt(value) })
                          }
                        >
                          <SelectTrigger className="bg-black border-[#d4af37]/30 text-white">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 Stars</SelectItem>
                            <SelectItem value="4">4 Stars</SelectItem>
                            <SelectItem value="3">3 Stars</SelectItem>
                            <SelectItem value="2">2 Stars</SelectItem>
                            <SelectItem value="1">1 Star</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Testimonial Content</label>
                      <Textarea
                        value={testimonialForm.content}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                        className="bg-black border-[#d4af37]/30 text-white"
                        rows={4}
                        required
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="isActive"
                        checked={testimonialForm.isActive}
                        onChange={(e) => setTestimonialForm({ ...testimonialForm, isActive: e.target.checked })}
                        className="rounded"
                      />
                      <label htmlFor="isActive" className="text-sm text-gray-300">
                        Active (show on website)
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
                        <Save className="w-4 h-4 mr-2" />
                        {editingTestimonial ? "Update" : "Save"}
                      </Button>
                      <Button
                        type="button"
                        onClick={() => {
                          setShowAddTestimonial(false)
                          setEditingTestimonial(null)
                          setTestimonialForm({
                            name: "",
                            position: "",
                            company: "",
                            content: "",
                            rating: 5,
                            isActive: true,
                          })
                        }}
                        variant="outline"
                        className="border-gray-600 bg-transparent"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Testimonials List */}
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-gray-900 border-[#d4af37]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg text-white">{testimonial.name}</h3>
                          <Badge className={testimonial.isActive ? "bg-green-500" : "bg-gray-500"}>
                            {testimonial.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                        <p className="text-[#d4af37] text-sm mb-1">{testimonial.position}</p>
                        <p className="text-gray-400 text-sm mb-3">{testimonial.company}</p>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#d4af37] fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-300 text-sm">"{testimonial.content}"</p>
                        <p className="text-xs text-gray-500 mt-2">
                          Added: {new Date(testimonial.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => editTestimonial(testimonial)}
                          className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleTestimonialActive(testimonial.id, !testimonial.isActive)}
                          className={
                            testimonial.isActive
                              ? "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                              : "border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                          }
                        >
                          {testimonial.isActive ? "Hide" : "Show"}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteTestimonial(testimonial.id)}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {testimonials.length === 0 && (
                <div className="text-center py-8 text-gray-400">No testimonials found.</div>
              )}
            </div>
          </TabsContent>

          {/* Website Stats Tab */}
          <TabsContent value="stats" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#d4af37]">Website Statistics</h2>
                <p className="text-gray-400">Update your business achievements stored in Firebase</p>
              </div>
              <Button
                onClick={updateWebsiteStats}
                disabled={loading}
                className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Saving..." : "Save Changes"}
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
                      value={websiteStats.successfulPlacements}
                      onChange={(e) =>
                        setWebsiteStats({
                          ...websiteStats,
                          successfulPlacements: Number.parseInt(e.target.value) || 0,
                        })
                      }
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
                      value={websiteStats.facilitiesManaged}
                      onChange={(e) =>
                        setWebsiteStats({ ...websiteStats, facilitiesManaged: Number.parseInt(e.target.value) || 0 })
                      }
                      className="bg-black border-[#d4af37]/30 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-[#d4af37]/20">
                <CardHeader>
                  <CardTitle className="text-[#d4af37] flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    IT Solutions Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">IT Solutions Delivered</label>
                    <Input
                      type="number"
                      value={websiteStats.itSolutionsDelivered}
                      onChange={(e) =>
                        setWebsiteStats({
                          ...websiteStats,
                          itSolutionsDelivered: Number.parseInt(e.target.value) || 0,
                        })
                      }
                      className="bg-black border-[#d4af37]/30 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-[#d4af37]/20">
                <CardHeader>
                  <CardTitle className="text-[#d4af37] flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Real Estate Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Properties Transacted</label>
                    <Input
                      type="number"
                      value={websiteStats.propertiesTransacted}
                      onChange={(e) =>
                        setWebsiteStats({
                          ...websiteStats,
                          propertiesTransacted: Number.parseInt(e.target.value) || 0,
                        })
                      }
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
                      value={websiteStats.yearsExperience}
                      onChange={(e) =>
                        setWebsiteStats({ ...websiteStats, yearsExperience: Number.parseInt(e.target.value) || 0 })
                      }
                      className="bg-black border-[#d4af37]/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Happy Clients</label>
                    <Input
                      type="number"
                      value={websiteStats.happyClients}
                      onChange={(e) =>
                        setWebsiteStats({ ...websiteStats, happyClients: Number.parseInt(e.target.value) || 0 })
                      }
                      className="bg-black border-[#d4af37]/30 text-white"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
