"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Star, Save, X } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  position: string
  company: string
  content: string
  rating: number
  image?: string
  isActive: boolean
  createdAt: string
}

interface TestimonialsManagerProps {
  onStatsUpdate: () => void
}

export default function TestimonialsManager({ onStatsUpdate }: TestimonialsManagerProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    company: "",
    content: "",
    rating: 5,
    image: "",
    isActive: true,
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/admin/testimonials")
      const data = await response.json()
      setTestimonials(data)
      onStatsUpdate()
    } catch (error) {
      console.error("Failed to fetch testimonials:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const url = editingId ? `/api/admin/testimonials/${editingId}` : "/api/admin/testimonials"
      const method = editingId ? "PUT" : "POST"

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      fetchTestimonials()
      resetForm()
    } catch (error) {
      console.error("Failed to save testimonial:", error)
    }
  }

  const deleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return

    try {
      await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" })
      fetchTestimonials()
    } catch (error) {
      console.error("Failed to delete testimonial:", error)
    }
  }

  const toggleActive = async (id: string, isActive: boolean) => {
    try {
      await fetch(`/api/admin/testimonials/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive }),
      })
      fetchTestimonials()
    } catch (error) {
      console.error("Failed to update testimonial:", error)
    }
  }

  const startEdit = (testimonial: Testimonial) => {
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      content: testimonial.content,
      rating: testimonial.rating,
      image: testimonial.image || "",
      isActive: testimonial.isActive,
    })
    setEditingId(testimonial.id)
    setShowAddForm(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      position: "",
      company: "",
      content: "",
      rating: 5,
      image: "",
      isActive: true,
    })
    setEditingId(null)
    setShowAddForm(false)
  }

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#d4af37]">Testimonials Management</h2>
        <Button onClick={() => setShowAddForm(true)} className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </div>

      {/* Add/Edit Form */}
      {showAddForm && (
        <Card className="bg-gray-900 border-[#d4af37]/20">
          <CardHeader>
            <CardTitle className="text-[#d4af37]">{editingId ? "Edit Testimonial" : "Add New Testimonial"}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black border-[#d4af37]/30 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
                  <Input
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="bg-black border-[#d4af37]/30 text-white"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-black border-[#d4af37]/30 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
                  <select
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number.parseInt(e.target.value) })}
                    className="w-full px-3 py-2 bg-black border border-[#d4af37]/30 rounded-md text-white"
                  >
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Image URL (optional)</label>
                <Input
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="bg-black border-[#d4af37]/30 text-white"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Testimonial Content</label>
                <Textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="bg-black border-[#d4af37]/30 text-white"
                  rows={4}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="rounded"
                />
                <label htmlFor="isActive" className="text-sm text-gray-300">
                  Active (show on website)
                </label>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="bg-[#d4af37] text-black hover:bg-[#d4af37]/90">
                  <Save className="w-4 h-4 mr-2" />
                  {editingId ? "Update" : "Save"}
                </Button>
                <Button type="button" onClick={resetForm} variant="outline" className="border-gray-600 bg-transparent">
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
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => startEdit(testimonial)}
                    className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleActive(testimonial.id, !testimonial.isActive)}
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
      </div>

      {testimonials.length === 0 && <div className="text-center py-8 text-gray-400">No testimonials found.</div>}
    </div>
  )
}
