import React from 'react';
import { Target, Eye, Award, Users, Globe, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every service we deliver',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your growth and success are our top priorities',
    },
    {
      icon: Globe,
      title: 'Reliability',
      description: 'Trusted partner for businesses across multiple regions',
    },
    {
      icon: Clock,
      title: 'Commitment',
      description: 'Available 24/7 to meet your service needs',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              About <span className="text-[#F5C842]">Jaydev Associates LLP</span>
            </h1>
            <p className="text-[#F5C842] text-xl md:text-2xl font-semibold">
              Your Growth, Our Commitment
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A trusted multi-domain service provider offering comprehensive solutions in Recruitment, Security, Facility Management, IT Solutions, and Real Estate.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Who <span className="text-[#F5C842]">We Are</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Established in 2025, Jaydev Associates LLP has quickly positioned itself as a reliable partner for organizations and individuals seeking operational excellence, efficiency, and security.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With our headquarters in Goregaon, Mangaon, Raigad, we serve clients across Maharashtra, Gujarat, Goa, and UAE. Our multi-domain expertise allows us to provide end-to-end solutions tailored to meet the unique needs of each client.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our team of 12+ dedicated professionals works around the clock to ensure that your business operations run smoothly and securely. We pride ourselves on our 90% client satisfaction rate and 90% repeat client rate.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 text-center space-y-2">
                  <div className="text-4xl font-bold text-[#F5C842]">2025</div>
                  <div className="text-gray-400">Established</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 text-center space-y-2">
                  <div className="text-4xl font-bold text-[#F5C842]">67+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 text-center space-y-2">
                  <div className="text-4xl font-bold text-[#F5C842]">90%</div>
                  <div className="text-gray-400">Satisfaction Rate</div>
                </div>
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 text-center space-y-2">
                  <div className="text-4xl font-bold text-[#F5C842]">12+</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-black/60 p-10 rounded-2xl border border-[#F5C842]/30 space-y-6">
                <div className="w-16 h-16 bg-[#F5C842]/10 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#F5C842]" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver comprehensive, reliable, and innovative solutions that empower organizations and individuals to achieve their goals. We are committed to building long-term partnerships based on trust, professionalism, and excellence.
                </p>
              </div>

              <div className="bg-black/60 p-10 rounded-2xl border border-[#F5C842]/30 space-y-6">
                <div className="w-16 h-16 bg-[#F5C842]/10 rounded-lg flex items-center justify-center">
                  <Eye className="w-8 h-8 text-[#F5C842]" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Jaydev Associates LLP can help your company source skilled workers by streamlining the recruitment process. We provide early access to new open positions, offer resume and job application guidance, host networking events and job fairs, and follow up with feedback after interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Core <span className="text-[#F5C842]">Values</span>
              </h2>
              <p className="text-gray-400 text-lg">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300 hover:scale-105 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-[#F5C842]/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-[#F5C842]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Our <span className="text-[#F5C842]">Presence</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We proudly serve clients across multiple regions including <span className="text-[#F5C842] font-semibold">Maharashtra, Gujarat, Goa, and UAE</span>, with primary operations in major cities like Mumbai, Pune, Bangalore, Hyderabad, Delhi, Dubai, Gurgaon, and UK.
            </p>
            <div className="bg-black/60 p-8 rounded-xl border border-[#F5C842]/30 inline-block">
              <p className="text-gray-400 mb-4">Service Coverage</p>
              <p className="text-5xl font-bold text-[#F5C842]">450 km+</p>
              <p className="text-gray-400 mt-4">24/7 Availability</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;