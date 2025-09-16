// Shared data store for the application
interface Contact {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: "new" | "contacted" | "closed"
  createdAt: string
  updatedAt: string
}

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
  updatedAt: string
}

interface WebsiteStats {
  successfulPlacements: number
  facilitiesManaged: number
  itSolutionsDelivered: number
  propertiesTransacted: number
  yearsExperience: number
  happyClients: number
}

// Initial data
const contacts: Contact[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@techcorp.com",
    phone: "+91 98765 43210",
    service: "recruitment",
    message: "We need to hire 5 software developers for our new project. Please contact us to discuss requirements.",
    status: "new",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya@manufacturing.com",
    phone: "+91 87654 32109",
    service: "facility-management",
    message: "Looking for housekeeping and security services for our 50,000 sq ft facility in Pune.",
    status: "contacted",
    createdAt: "2024-01-14T14:20:00Z",
    updatedAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.k@startup.in",
    phone: "+91 76543 21098",
    service: "hardware-software",
    message:
      "Need complete IT setup for our new office - laptops, servers, networking equipment and software licenses.",
    status: "new",
    createdAt: "2024-01-13T09:15:00Z",
    updatedAt: "2024-01-13T09:15:00Z",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    email: "sneha.reddy@realty.com",
    phone: "+91 65432 10987",
    service: "real-estate",
    message: "Looking to buy commercial property in Bangalore for our expanding business. Budget around 2-3 crores.",
    status: "closed",
    createdAt: "2024-01-12T16:45:00Z",
    updatedAt: "2024-01-12T16:45:00Z",
  },
  {
    id: "5",
    name: "Vikash Singh",
    email: "vikash@logistics.co.in",
    phone: "+91 54321 09876",
    service: "multiple",
    message: "We need recruitment services for warehouse staff and facility management for our distribution centers.",
    status: "contacted",
    createdAt: "2024-01-11T11:30:00Z",
    updatedAt: "2024-01-11T11:30:00Z",
  },
]

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    position: "HR Director",
    company: "TechCorp Solutions",
    content:
      "Jaydev Associates helped us find excellent candidates quickly and efficiently. Their recruitment process is thorough and professional.",
    rating: 5,
    image: "/professional-indian-businessman.png",
    isActive: true,
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z",
  },
  {
    id: "2",
    name: "Sunita Sharma",
    position: "Operations Manager",
    company: "Manufacturing Ltd",
    content:
      "Their facility management services are top-notch. Our office has never been cleaner and more organized. Highly recommended!",
    rating: 5,
    image: "/professional-indian-manager.png",
    isActive: true,
    createdAt: "2024-01-08T16:30:00Z",
    updatedAt: "2024-01-08T16:30:00Z",
  },
  {
    id: "3",
    name: "Amit Patel",
    position: "IT Manager",
    company: "Digital Solutions Inc",
    content:
      "The IT solutions provided by Jaydev Associates transformed our business operations. Excellent technical support and implementation.",
    rating: 5,
    image: "/indian-it-director.png",
    isActive: true,
    createdAt: "2024-01-06T14:20:00Z",
    updatedAt: "2024-01-06T14:20:00Z",
  },
  {
    id: "4",
    name: "Neha Gupta",
    position: "Property Manager",
    company: "Real Estate Corp",
    content:
      "Professional real estate services with great market knowledge. They helped us close deals faster than expected.",
    rating: 4,
    image: "/professional-indian-woman-property-investor.png",
    isActive: true,
    createdAt: "2024-01-04T11:45:00Z",
    updatedAt: "2024-01-04T11:45:00Z",
  },
  {
    id: "5",
    name: "Vikram Joshi",
    position: "CEO",
    company: "StartupTech",
    content:
      "Complete business solution provider. From recruitment to IT setup, they handled everything professionally.",
    rating: 5,
    image: "/placeholder.svg",
    isActive: false,
    createdAt: "2024-01-02T10:30:00Z",
    updatedAt: "2024-01-02T10:30:00Z",
  },
]

let websiteStats: WebsiteStats = {
  successfulPlacements: 2847,
  facilitiesManaged: 186,
  itSolutionsDelivered: 342,
  propertiesTransacted: 234,
  yearsExperience: 6,
  happyClients: 1250,
}

// Contact operations
export const contactStore = {
  getAll: () => [...contacts],
  getById: (id: string) => contacts.find((c) => c.id === id),
  add: (contact: Omit<Contact, "id" | "createdAt" | "updatedAt">) => {
    const newContact: Contact = {
      ...contact,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    contacts.unshift(newContact)
    return newContact
  },
  update: (id: string, updates: Partial<Contact>) => {
    const index = contacts.findIndex((c) => c.id === id)
    if (index !== -1) {
      contacts[index] = {
        ...contacts[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      }
      return contacts[index]
    }
    return null
  },
  delete: (id: string) => {
    const index = contacts.findIndex((c) => c.id === id)
    if (index !== -1) {
      contacts.splice(index, 1)
      return true
    }
    return false
  },
}

// Testimonial operations
export const testimonialStore = {
  getAll: () => [...testimonials],
  getActive: () => testimonials.filter((t) => t.isActive),
  getById: (id: string) => testimonials.find((t) => t.id === id),
  add: (testimonial: Omit<Testimonial, "id" | "createdAt" | "updatedAt">) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    testimonials.unshift(newTestimonial)
    return newTestimonial
  },
  update: (id: string, updates: Partial<Testimonial>) => {
    const index = testimonials.findIndex((t) => t.id === id)
    if (index !== -1) {
      testimonials[index] = {
        ...testimonials[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      }
      return testimonials[index]
    }
    return null
  },
  delete: (id: string) => {
    const index = testimonials.findIndex((t) => t.id === id)
    if (index !== -1) {
      testimonials.splice(index, 1)
      return true
    }
    return false
  },
}

// Website stats operations
export const statsStore = {
  get: () => ({ ...websiteStats }),
  update: (updates: Partial<WebsiteStats>) => {
    websiteStats = { ...websiteStats, ...updates }
    return websiteStats
  },
}

// Admin stats
export const getAdminStats = () => {
  const recentContacts = contacts.filter((c) => {
    const contactDate = new Date(c.createdAt)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return contactDate > weekAgo
  }).length

  return {
    totalContacts: contacts.length,
    totalTestimonials: testimonials.length,
    totalViews: 15420 + Math.floor(Math.random() * 100),
    recentContacts,
  }
}
