import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Jaydev Associates LLP",
  description: "Privacy Policy for Jaydev Associates LLP - How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#d4af37] mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Fill out our contact forms</li>
                <li>Request our services</li>
                <li>Subscribe to our newsletter</li>
                <li>Communicate with us via email or phone</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#d4af37] mb-4">6. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-gray-300">
                <p>
                  <strong>Email:</strong> privacy@jaydevassociates.com
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
