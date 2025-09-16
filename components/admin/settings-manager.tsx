"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Save, Download, Upload, Shield, Globe, AlertCircle, Eye, EyeOff } from "lucide-react"

interface CompanySettings {
  companyName: string
  email: string
  phone: string
  address: string
  description: string
  socialMedia: {
    linkedin: string
    twitter: string
    facebook: string
  }
}

interface SEOSettings {
  metaTitle: string
  metaDescription: string
  keywords: string
  ogImage: string
}

interface SecuritySettings {
  twoFactorEnabled: boolean
  sessionTimeout: number
  passwordExpiry: number
  loginAttempts: number
}

export default function SettingsManager() {
  const [activeTab, setActiveTab] = useState("company")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")

  const [companySettings, setCompanySettings] = useState<CompanySettings>({
    companyName: "Jaydev Associates LLP",
    email: "info@jaydevassociates.com",
    phone: "+91 98765 43210",
    address: "Mumbai, Maharashtra, India",
    description: "Leading business solutions provider",
    socialMedia: {
      linkedin: "https://linkedin.com/company/jaydev-associates",
      twitter: "https://twitter.com/jaydevassociates",
      facebook: "https://facebook.com/jaydevassociates",
    },
  })

  const [seoSettings, setSeoSettings] = useState<SEOSettings>({
    metaTitle: "Jaydev Associates LLP - Business Solutions",
    metaDescription: "Leading provider of recruitment, real estate, IT solutions and facility management services",
    keywords: "recruitment, real estate, IT solutions, facility management, business services",
    ogImage: "/images/og-image.jpg",
  })

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    twoFactorEnabled: false,
    sessionTimeout: 30,
    passwordExpiry: 90,
    loginAttempts: 5,
  })

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings")
      if (response.ok) {
        const data = await response.json()
        if (data.company) setCompanySettings(data.company)
        if (data.seo) setSeoSettings(data.seo)
        if (data.security) setSecuritySettings(data.security)
      }
    } catch (error) {
      console.error("Failed to load settings:", error)
    }
  }

  const saveSettings = async (type: string, settings: any) => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, settings }),
      })

      if (response.ok) {
        alert(`${type} settings saved successfully!`)
      } else {
        throw new Error("Failed to save settings")
      }
    } catch (error) {
      console.error("Save error:", error)
      alert("Failed to save settings")
    } finally {
      setLoading(false)
    }
  }

  const changePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords don't match!")
      return
    }

    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long!")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/admin/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      })

      if (response.ok) {
        alert("Password changed successfully!")
        setCurrentPassword("")
        setNewPassword("")
        setConfirmPassword("")
      } else {
        const error = await response.json()
        alert(error.message || "Failed to change password")
      }
    } catch (error) {
      console.error("Password change error:", error)
      alert("Failed to change password")
    } finally {
      setLoading(false)
    }
  }

  const exportData = async () => {
    try {
      const response = await fetch("/api/admin/export-data")
      const data = await response.json()

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `jaydev-associates-backup-${new Date().toISOString().split("T")[0]}.json`
      a.click()
      URL.revokeObjectURL(url)

      alert("Data exported successfully!")
    } catch (error) {
      console.error("Export error:", error)
      alert("Failed to export data")
    }
  }

  const importData = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/admin/import-data", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("Data imported successfully!")
        loadSettings()
      } else {
        throw new Error("Failed to import data")
      }
    } catch (error) {
      console.error("Import error:", error)
      alert("Failed to import data")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#d4af37]">System Settings</h2>
          <p className="text-gray-400">Manage your website configuration and preferences</p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={exportData}
            variant="outline"
            className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Data
          </Button>
          <label className="cursor-pointer">
            <Button
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black bg-transparent"
            >
              <Upload className="w-4 h-4 mr-2" />
              Import Data
            </Button>
            <input type="file" accept=".json" onChange={importData} className="hidden" />
          </label>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-gray-800">
          <TabsTrigger value="company" className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-black">
            <Globe className="w-4 h-4 mr-2" />
            Company
          </TabsTrigger>
          <TabsTrigger value="seo" className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-black">
            <Settings className="w-4 h-4 mr-2" />
            SEO
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-black">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </TabsTrigger>
          <TabsTrigger value="password" className="data-[state=active]:bg-[#d4af37] data-[state=active]:text-black">
            <Shield className="w-4 h-4 mr-2" />
            Password
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-[#d4af37]">Company Information</CardTitle>
              <CardDescription>Update your company details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={companySettings.companyName}
                    onChange={(e) => setCompanySettings({ ...companySettings, companyName: e.target.value })}
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={companySettings.email}
                    onChange={(e) => setCompanySettings({ ...companySettings, email: e.target.value })}
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={companySettings.phone}
                    onChange={(e) => setCompanySettings({ ...companySettings, phone: e.target.value })}
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={companySettings.address}
                    onChange={(e) => setCompanySettings({ ...companySettings, address: e.target.value })}
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={companySettings.description}
                  onChange={(e) => setCompanySettings({ ...companySettings, description: e.target.value })}
                  className="bg-gray-700 border-gray-600"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>Social Media Links</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={companySettings.socialMedia.linkedin}
                      onChange={(e) =>
                        setCompanySettings({
                          ...companySettings,
                          socialMedia: { ...companySettings.socialMedia, linkedin: e.target.value },
                        })
                      }
                      className="bg-gray-700 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={companySettings.socialMedia.twitter}
                      onChange={(e) =>
                        setCompanySettings({
                          ...companySettings,
                          socialMedia: { ...companySettings.socialMedia, twitter: e.target.value },
                        })
                      }
                      className="bg-gray-700 border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input
                      id="facebook"
                      value={companySettings.socialMedia.facebook}
                      onChange={(e) =>
                        setCompanySettings({
                          ...companySettings,
                          socialMedia: { ...companySettings.socialMedia, facebook: e.target.value },
                        })
                      }
                      className="bg-gray-700 border-gray-600"
                    />
                  </div>
                </div>
              </div>
              <Button
                onClick={() => saveSettings("company", companySettings)}
                disabled={loading}
                className="bg-[#d4af37] text-black hover:bg-[#f4d03f]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Company Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-[#d4af37]">SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="metaTitle">Meta Title</Label>
                <Input
                  id="metaTitle"
                  value={seoSettings.metaTitle}
                  onChange={(e) => setSeoSettings({ ...seoSettings, metaTitle: e.target.value })}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="metaDescription">Meta Description</Label>
                <Textarea
                  id="metaDescription"
                  value={seoSettings.metaDescription}
                  onChange={(e) => setSeoSettings({ ...seoSettings, metaDescription: e.target.value })}
                  className="bg-gray-700 border-gray-600"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="keywords">Keywords (comma-separated)</Label>
                <Input
                  id="keywords"
                  value={seoSettings.keywords}
                  onChange={(e) => setSeoSettings({ ...seoSettings, keywords: e.target.value })}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="ogImage">Open Graph Image URL</Label>
                <Input
                  id="ogImage"
                  value={seoSettings.ogImage}
                  onChange={(e) => setSeoSettings({ ...seoSettings, ogImage: e.target.value })}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <Button
                onClick={() => saveSettings("seo", seoSettings)}
                disabled={loading}
                className="bg-[#d4af37] text-black hover:bg-[#f4d03f]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save SEO Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-[#d4af37]">Security Settings</CardTitle>
              <CardDescription>Configure security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-400">Add an extra layer of security to your account</p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorEnabled}
                  onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorEnabled: checked })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={securitySettings.sessionTimeout}
                    onChange={(e) =>
                      setSecuritySettings({ ...securitySettings, sessionTimeout: Number.parseInt(e.target.value) })
                    }
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                  <Input
                    id="passwordExpiry"
                    type="number"
                    value={securitySettings.passwordExpiry}
                    onChange={(e) =>
                      setSecuritySettings({ ...securitySettings, passwordExpiry: Number.parseInt(e.target.value) })
                    }
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
                <div>
                  <Label htmlFor="loginAttempts">Max Login Attempts</Label>
                  <Input
                    id="loginAttempts"
                    type="number"
                    value={securitySettings.loginAttempts}
                    onChange={(e) =>
                      setSecuritySettings({ ...securitySettings, loginAttempts: Number.parseInt(e.target.value) })
                    }
                    className="bg-gray-700 border-gray-600"
                  />
                </div>
              </div>
              <Button
                onClick={() => saveSettings("security", securitySettings)}
                disabled={loading}
                className="bg-[#d4af37] text-black hover:bg-[#f4d03f]"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-[#d4af37]">Change Password</CardTitle>
              <CardDescription>Update your admin account password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="bg-gray-700 border-gray-600 pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-gray-700 border-gray-600"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <AlertCircle className="w-4 h-4" />
                Password must be at least 8 characters long
              </div>
              <Button
                onClick={changePassword}
                disabled={loading || !currentPassword || !newPassword || !confirmPassword}
                className="bg-[#d4af37] text-black hover:bg-[#f4d03f]"
              >
                <Shield className="w-4 h-4 mr-2" />
                Change Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
