"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Trash2, Download, Search, Eye, Mail, Phone, Calendar } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  service: string
  message: string
  createdAt: string
  status: "new" | "contacted" | "closed"
}

interface ContactsManagerProps {
  onStatsUpdate?: () => void
}

export default function ContactsManager({ onStatsUpdate }: ContactsManagerProps) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch("/api/admin/contacts")
      const data = await response.json()
      setContacts(data)
      if (onStatsUpdate) onStatsUpdate()
    } catch (error) {
      console.error("Failed to fetch contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: string, status: Contact["status"]) => {
    try {
      await fetch(`/api/admin/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      fetchContacts()
    } catch (error) {
      console.error("Failed to update contact:", error)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return

    try {
      await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" })
      fetchContacts()
    } catch (error) {
      console.error("Failed to delete contact:", error)
    }
  }

  const exportContacts = () => {
    const csv = [
      ["Name", "Email", "Phone", "Service", "Message", "Status", "Date"],
      ...contacts.map((contact) => [
        contact.name,
        contact.email,
        contact.phone || "",
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
    a.download = "contacts.csv"
    a.click()
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.service.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: Contact["status"]) => {
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

  if (loading) {
    return <div className="text-center py-8">Loading contacts...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#d4af37]">Contact Management</h2>
          <p className="text-gray-400">Manage customer inquiries and communications</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-900 border-[#d4af37]/30 text-white"
            />
          </div>
          <Button onClick={exportContacts} className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Contacts Grid */}
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
                    {contact.phone && (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{contact.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(contact.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm">
                      <strong>Service:</strong> {contact.service}
                    </p>
                    <p className="text-sm">
                      <strong>Message:</strong> {contact.message.substring(0, 100)}
                      {contact.message.length > 100 && "..."}
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
                  <select
                    value={contact.status}
                    onChange={(e) => updateContactStatus(contact.id, e.target.value as Contact["status"])}
                    className="bg-gray-800 border border-[#d4af37]/30 rounded px-2 py-1 text-sm text-white"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
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
      </div>

      {filteredContacts.length === 0 && <div className="text-center py-8 text-gray-400">No contacts found.</div>}

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
              {selectedContact.phone && (
                <div>
                  <label className="text-sm font-medium text-gray-400">Phone</label>
                  <p className="text-white">{selectedContact.phone}</p>
                </div>
              )}
              <div>
                <label className="text-sm font-medium text-gray-400">Service Interest</label>
                <p className="text-white">{selectedContact.service}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Message</label>
                <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-400">Date</label>
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
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
