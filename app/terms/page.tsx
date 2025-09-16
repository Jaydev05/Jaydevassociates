import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Jaydev Associates LLP",
  description: "Terms of Service for Jaydev Associates LLP - Legal terms and conditions for using our services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#d4af37] mb-8">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the services provided by Jaydev Associates LLP, you accept and agree to be bound
                by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. Services</h2>
              <p className="text-gray-300 mb-4">
                Jaydev Associates LLP provides comprehensive business solutions including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Recruitment and talent acquisition services</li>
                <li>Facility management solutions</li>
                <li>IT hardware and software services</li>
                <li>Real estate consulting and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">Users of our services agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any fraudulent or harmful activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Payments are due as specified in the service agreement</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                Jaydev Associates LLP shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, trademarks, and intellectual property on this website are owned by Jaydev Associates LLP
                and are protected by applicable copyright and trademark laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">7. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct
                that we believe violates these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">8. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via
                email or through our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">9. Contact Information</h2>
              <p className="text-gray-300 mb-4">For questions about these Terms of Service, please contact us:</p>
              <div className="text-gray-300">
                <p>
                  <strong>Email:</strong> legal@jaydevassociates.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 98765 43210
                </p>
                <p>
                  <strong>Address:</strong> Business District, Mumbai, Maharashtra, India
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
