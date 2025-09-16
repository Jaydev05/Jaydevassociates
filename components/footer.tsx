import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/logo.png" alt="Jaydev Associates LLP" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-4">
              Your Growth, Our Commitment. Comprehensive business solutions across Maharashtra, Gujarat, Goa & UAE
              serving manufacturing, production, and service sectors.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 9AM-7PM, Sat: 9AM-6PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/recruitment" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link href="/facility-management" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Facility Management
                </Link>
              </li>
              <li>
                <Link href="/hardware-software" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/real-estate" className="text-gray-300 hover:text-[#d4af37] transition-colors">
                  Real Estate Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#d4af37]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  489, Near SBI Bank Old Bazar Peth
                  <br />
                  Goregaon Mangaon Raigad
                  <br />
                  Maharashtra 402103, India
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>+91 9322021991</div>
                  <div className="text-xs text-gray-400">WhatsApp Available</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <div className="text-gray-300 text-sm">jaydevassociates25@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Jaydev Associates LLP. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#d4af37] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
