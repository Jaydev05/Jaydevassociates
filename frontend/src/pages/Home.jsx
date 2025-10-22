import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Shield, Building2, Cpu, Home as HomeIcon, CheckCircle, Award, TrendingUp, Target } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'Recruitment Solutions',
      description: 'Connecting companies with skilled professionals across IT, Healthcare, Manufacturing, and more.',
      link: '/services#recruitment',
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Comprehensive security solutions for hospitals, residential, commercial, and retail establishments.',
      link: '/services#security',
    },
    {
      icon: Building2,
      title: 'Facility Management',
      description: 'Complete facility services including housekeeping, hospitality, canteen management, and gardening.',
      link: '/services#facility',
    },
    {
      icon: Cpu,
      title: 'IT Solutions',
      description: 'Advanced systems including CCTV, access control, attendance management, and tracking solutions.',
      link: '/services#it',
    },
    {
      icon: HomeIcon,
      title: 'Real Estate Services',
      description: 'Property management, leasing, selling, and investment consulting across Maharashtra.',
      link: '/services#realestate',
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '1+', label: 'Year of Excellence' },
    { icon: Users, value: '67+', label: 'Happy Clients' },
    { icon: Award, value: '90%', label: 'Client Satisfaction' },
    { icon: Target, value: '450km', label: 'Coverage Area' },
  ];

  const whyChooseUs = [
    'Trusted multi-domain service provider',
    'Experienced team of 12+ professionals',
    'Pan-India and International coverage',
    'Available 24/7 for your needs',
    '90% repeat client rate',
    'Comprehensive end-to-end solutions',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #F5C842 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <img
                src="https://customer-assets.emergentagent.com/job_7e015201-97ad-4ef2-a812-8a1721981a86/artifacts/e0n0q32q_WhatsApp%20Image%202025-08-11%20at%2019.45.27_4b0fb809.jpg"
                alt="Jaydev Associates Logo"
                className="h-32 md:h-40 w-auto"
              />
            </div>

            {/* Tagline */}
            <h1 className="text-[#F5C842] text-2xl md:text-3xl font-bold tracking-wide animate-slide-up">
              YOUR GROWTH, OUR COMMITMENT
            </h1>

            {/* Main Heading */}
            <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight animate-slide-up-delay-1">
              Trusted Multi-Domain
              <br />
              <span className="text-[#F5C842]">Service Provider</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-slide-up-delay-2">
              Comprehensive solutions in Recruitment, Security, Facility Management, IT Solutions, and Real Estate across Maharashtra, Gujarat, Goa, and UAE.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up-delay-3">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C842]/50 hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-[#F5C842] text-[#F5C842] font-semibold rounded-lg hover:bg-[#F5C842] hover:text-black transition-all duration-300"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Moved lower */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#F5C842] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#F5C842] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-xl bg-black/40 border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-10 h-10 text-[#F5C842] mx-auto" />
                  <div className="text-4xl font-bold text-[#F5C842]">{stat.value}</div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-[#F5C842]">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#F5C842]/10"
                >
                  <div className="w-16 h-16 bg-[#F5C842]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#F5C842]/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#F5C842]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#F5C842] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-[#F5C842] font-semibold hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Why Choose <span className="text-[#F5C842]">Jaydev Associates</span>?
              </h2>
              <p className="text-gray-400 text-lg">
                Your trusted partner for operational excellence, efficiency, and security
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-black/40 border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-[#F5C842] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F5C842]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let's discuss how we can help your organization achieve operational excellence
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-8 py-4 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C842]/50 hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919322021991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1ea952] transition-all duration-300 hover:scale-105"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;