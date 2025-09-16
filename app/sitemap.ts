import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jaydevassociates.com" // Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/recruitment`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/facility-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hardware-software`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/real-estate`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
