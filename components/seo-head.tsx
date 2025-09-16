import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
}

export function SEOHead({
  title = "Jaydev Associates LLP - Your Growth, Our Commitment",
  description = "Comprehensive business solutions across recruitment, facility management, IT solutions, and real estate services. Your trusted partner for sustainable growth.",
  keywords = "recruitment services, facility management, IT solutions, real estate, business solutions, Jaydev Associates",
  ogImage = "/images/logo.png",
  canonical,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/logo.png" />
    </Head>
  )
}
