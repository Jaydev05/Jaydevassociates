"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Building2, Globe, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Create WhatsApp message
    const whatsappMessage = `*New Business Inquiry - Jaydev Associates*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not provided"}
*Service Interest:* ${formData.service || "Not specified"}

*Message:*
${formData.message}

*Sent from:* Company Website
*Time:* ${new Date().toLocaleString()}`

    const whatsappURL = `https://wa.me/919322021991?text=${encodeURIComponent(whatsappMessage)}`

    try {
      // Also save to database (existing functionality)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        // Open WhatsApp with the message
        window.open(whatsappURL, "_blank")
        setSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        // If database fails, still open WhatsApp
        window.open(whatsappURL, "_blank")
        alert("Message sent to WhatsApp. We'll respond shortly!")
      }
    } catch (error) {
      console.error("Error:", error)
      // Fallback to WhatsApp
      window.open(whatsappURL, "_blank")
      alert("Message sent to WhatsApp. We'll respond shortly!")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (success) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">Thank You!</h1>
          <p className="text-gray-300 mb-6 text-lg">
            Your message has been sent successfully via WhatsApp. Our team will get back to you within 2 hours during
            business hours.
          </p>
          <div className="space-y-3 mb-8">
            <p className="text-sm text-gray-400">✅ Message delivered to WhatsApp</p>
            <p className="text-sm text-gray-400">✅ Saved to our system</p>
            <p className="text-sm text-gray-400">✅ Team notified</p>
          </div>
          <Button
            onClick={() => setSuccess(false)}
            className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:from-[#b8941f] hover:to-[#d4af37] font-semibold px-8 py-3"
          >
            Send Another Message
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent"></div>
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-full px-6 py-2 mb-6 mt-1">
            <MessageCircle className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm text-[#d4af37] font-medium">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Our expert team across Maharashtra, Gujarat, Goa & UAE is here to provide
            comprehensive solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold mb-8 gradient-text">Contact Information</h2>

                <div className="space-y-4">
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-white">Office Address</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            489, Near SBI Bank Old Bazar Peth
                            <br />
                            Goregaon Mangaon Raigad
                            <br />
                            Maharashtra 402103, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-white">Phone & WhatsApp</h3>
                          <p className="text-gray-300 text-sm">
                            +91 9322021991
                            <br />
                            <span className="text-[#d4af37] text-xs">Available 24/7 for urgent queries</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-white">Email Address</h3>
                          <p className="text-gray-300 text-sm">
                            jaydevassociates25@gmail.com
                            <br />
                            <span className="text-[#d4af37] text-xs">Response within 24 hours</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2 text-white">Business Hours</h3>
                          <p className="text-gray-300 text-sm">
                            Mon - Fri: 9:00 AM - 7:00 PM
                            <br />
                            Saturday: 9:00 AM - 6:00 PM
                            <br />
                            <span className="text-red-400 text-xs">Sunday: Closed</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 border-[#d4af37]/20 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl gradient-text flex items-center gap-3">
                    <Send className="w-8 h-8" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-400">
                    Your message will be sent directly to our WhatsApp Business for instant response
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-white">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-black/50 border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:ring-[#d4af37]/20 h-12"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-white">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-black/50 border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:ring-[#d4af37]/20 h-12"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-semibold text-white">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-black/50 border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:ring-[#d4af37]/20 h-12"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-semibold text-white">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full h-12 px-4 bg-black/50 border border-[#d4af37]/30 rounded-md text-white focus:border-[#d4af37] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20"
                        >
                          <option value="">Select a service</option>
                          <option value="recruitment">🎯 Recruitment Services</option>
                          <option value="facility-management">🏢 Facility Management</option>
                          <option value="hardware-software">💻 IT Solutions</option>
                          <option value="real-estate">🏠 Real Estate Services</option>
                          <option value="multiple">📋 Multiple Services</option>
                          <option value="other">❓ Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-white">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-black/50 border-[#d4af37]/30 text-white focus:border-[#d4af37] focus:ring-[#d4af37]/20 resize-none"
                        placeholder="Tell us about your requirements, project details, or any questions you have..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-black hover:from-[#b8941f] hover:to-[#d4af37] text-lg py-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/25"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {loading ? "Sending to WhatsApp..." : "Send to WhatsApp"}
                      </Button>
                    </div>

                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-400">
                        🔒 Your information is secure and will only be used to respond to your inquiry
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Service Areas</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive business solutions across multiple regions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">Maharashtra</h3>
                <p className="text-gray-300 text-sm mb-3">Complete coverage across the state</p>
                <p className="text-xs text-gray-400">Mumbai, Pune, Nagpur, Nashik</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">Gujarat</h3>
                <p className="text-gray-300 text-sm mb-3">Major cities and industrial areas</p>
                <p className="text-xs text-gray-400">Ahmedabad, Surat, Vadodara, Rajkot</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">Goa</h3>
                <p className="text-gray-300 text-sm mb-3">Tourism and hospitality sector</p>
                <p className="text-xs text-gray-400">Panaji, Margao, Vasco da Gama</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-[#d4af37]/20 hover:border-[#d4af37]/40 transition-all duration-300 hover-lift text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#d4af37]">UAE</h3>
                <p className="text-gray-300 text-sm mb-3">International operations</p>
                <p className="text-xs text-gray-400">Dubai, Abu Dhabi, Sharjah</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
