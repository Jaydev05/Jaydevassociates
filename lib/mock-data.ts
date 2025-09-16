// Mock data for testing without database
export const mockContacts = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul.sharma@techcorp.com",
    phone: "+91 98765 43210",
    service: "recruitment",
    message: "We need to hire 5 software developers for our new project. Please contact us to discuss requirements.",
    status: "new" as const,
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya@manufacturing.com",
    phone: "+91 87654 32109",
    service: "facility-management",
    message: "Looking for housekeeping and security services for our 50,000 sq ft facility in Pune.",
    status: "contacted" as const,
    createdAt: "2024-01-14T14:20:00Z",
  },
  {
    id: "3",
    name: "Amit Kumar",
    email: "amit.k@startup.in",
    phone: "+91 76543 21098",
    service: "hardware-software",
    message:
      "Need complete IT setup for our new office - laptops, servers, networking equipment and software licenses.",
    status: "new" as const,
    createdAt: "2024-01-13T09:15:00Z",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    email: "sneha.reddy@realty.com",
    phone: "+91 65432 10987",
    service: "real-estate",
    message: "Looking to buy commercial property in Bangalore for our expanding business. Budget around 2-3 crores.",
    status: "closed" as const,
    createdAt: "2024-01-12T16:45:00Z",
  },
  {
    id: "5",
    name: "Vikash Singh",
    email: "vikash@logistics.co.in",
    phone: "+91 54321 09876",
    service: "multiple",
    message: "We need recruitment services for warehouse staff and facility management for our distribution centers.",
    status: "contacted" as const,
    createdAt: "2024-01-11T11:30:00Z",
  },
]

export const mockTestimonials = [
  {
    id: "1",
    name: "Rajesh Kumar",
    position: "CEO",
    company: "TechVision Solutions",
    content:
      "Jaydev Associates helped us scale our team efficiently. Their recruitment process is thorough and they understand our technical requirements perfectly. We've hired 15+ developers through them and the quality has been exceptional.",
    rating: 5,
    image: "/professional-indian-businessman.png",
    isActive: true,
    createdAt: "2024-01-10T00:00:00Z",
  },
  {
    id: "2",
    name: "Priya Sharma",
    position: "Operations Manager",
    company: "Manufacturing Corp",
    content:
      "Their facility management services have been exceptional. Our office maintenance, security, and housekeeping are handled seamlessly. Highly professional team with 24/7 support that we can always rely on.",
    rating: 5,
    image: "/team-member-2.png",
    isActive: true,
    createdAt: "2024-01-09T00:00:00Z",
  },
  {
    id: "3",
    name: "Amit Patel",
    position: "IT Director",
    company: "Financial Services Ltd",
    content:
      "We've been using their IT solutions and AMC services for 3 years. Their hardware procurement and software licensing services have saved us significant costs while ensuring quality. Best IT partner we've worked with.",
    rating: 5,
    image: "/indian-it-director.png",
    isActive: true,
    createdAt: "2024-01-08T00:00:00Z",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    position: "Property Investor",
    company: "Real Estate Portfolio",
    content:
      "Found my dream commercial property through Jaydev Associates. Their market knowledge and negotiation skills helped me get the best deal. Professional service from start to finish with complete transparency.",
    rating: 5,
    image: "/professional-indian-woman-property-investor.png",
    isActive: true,
    createdAt: "2024-01-07T00:00:00Z",
  },
  {
    id: "5",
    name: "Arjun Mehta",
    position: "Founder",
    company: "StartupHub India",
    content:
      "As a startup, we needed reliable partners across multiple services. Jaydev Associates provided recruitment, IT setup, and office management - all with the same level of excellence. Highly recommended!",
    rating: 5,
    image: "/placeholder-rj9cn.png",
    isActive: true,
    createdAt: "2024-01-06T00:00:00Z",
  },
  {
    id: "6",
    name: "Kavya Nair",
    position: "HR Head",
    company: "Global Enterprises",
    content:
      "Their recruitment team understands our company culture and finds candidates who are not just skilled but also the right fit. The screening process is thorough and saves us tremendous time in hiring.",
    rating: 5,
    image: "/professional-indian-woman-hr.png",
    isActive: true,
    createdAt: "2024-01-05T00:00:00Z",
  },
]

export const mockWebsiteStats = {
  successfulPlacements: 2847,
  facilitiesManaged: 186,
  itSolutionsDelivered: 342,
  propertiesTransacted: 234,
  yearsExperience: 6,
  happyClients: 1250,
}

export const mockAdminStats = {
  totalContacts: mockContacts.length,
  totalTestimonials: mockTestimonials.length,
  totalViews: 15420,
  recentContacts: mockContacts.filter((c) => {
    const contactDate = new Date(c.createdAt)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return contactDate > weekAgo
  }).length,
}
