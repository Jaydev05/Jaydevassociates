import Hero from "@/components/hero"
import BusinessDivisions from "@/components/business-divisions"
import WhyChooseUs from "@/components/why-choose-us"
import StatsSection from "@/components/stats-section"
import CompanyOverview from "@/components/company-overview"
import Testimonials from "@/components/testimonials"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BusinessDivisions />
      <WhyChooseUs />
      <StatsSection />
      <CompanyOverview />
      <Testimonials />
    </main>
  )
}
