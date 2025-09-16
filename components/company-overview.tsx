import { Target, Users, Award, TrendingUp } from "lucide-react"

export default function CompanyOverview() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#d4af37]">Jaydev Associates LLP</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Established in 2025, we are a dynamic business conglomerate serving clients across Maharashtra, Gujarat,
              Goa, and UAE. Our integrated approach combines recruitment expertise, comprehensive facility management,
              cutting-edge IT solutions, and specialized real estate services.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              With our headquarters in Goregaon Mangaon Raigad and a dedicated team of 10 professionals, we have
              successfully served clients across manufacturing, production, and service sectors with a 90% client
              satisfaction rate and 90% repeat client rate.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 border border-[#d4af37]/20 rounded-lg">
                <div className="text-2xl font-bold text-[#d4af37] mb-1">6+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 border border-[#d4af37]/20 rounded-lg">
                <div className="text-2xl font-bold text-[#d4af37] mb-1">90%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/about-team.png"
              alt="Jaydev Associates Team"
              className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
            <Target className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Excellence</h3>
            <p className="text-gray-300 text-sm">
              Committed to delivering the highest quality in every service we provide across all sectors.
            </p>
          </div>
          <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
            <Users className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Partnership</h3>
            <p className="text-gray-300 text-sm">Building long-term relationships based on trust and mutual success.</p>
          </div>
          <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
            <Award className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Innovation</h3>
            <p className="text-gray-300 text-sm">Embracing new technologies and methods to stay ahead of the curve.</p>
          </div>
          <div className="text-center p-6 border border-[#d4af37]/20 rounded-lg hover:border-[#d4af37]/40 transition-colors">
            <TrendingUp className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Growth</h3>
            <p className="text-gray-300 text-sm">Focused on sustainable growth for our clients and our organization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
