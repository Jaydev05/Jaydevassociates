import React from 'react';
import { Users, Shield, Building2, Cpu, Home as HomeIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'recruitment',
      icon: Users,
      title: 'Recruitment Solutions',
      tagline: 'Connecting Talent with Opportunity',
      description: 'Comprehensive recruitment services connecting companies with skilled professionals across multiple industries.',
      features: [
        'Streamlined hiring process',
        'Candidate screening & assessment',
        'Interview coordination',
        'Job fairs & networking events',
        'Resume guidance & best practices',
        'Employer partnerships',
      ],
      industries: ['Information Technology', 'Healthcare', 'Manufacturing', 'Finance & Banking', 'Retail & E-commerce', 'Construction', 'Hospitality', 'Education', 'Logistics'],
      positions: ['Entry Level (0-2 years)', 'Mid Level (2-5 years)', 'Senior Level (5-10 years)', 'Executive Level (10+ years)'],
      locations: 'Mumbai, Pune, Bangalore, Hyderabad, Delhi, Dubai, Goa, Gurgaon, UK',
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security Services',
      tagline: 'Your Safety, Our Priority',
      description: 'Professional security solutions tailored to protect your assets, people, and premises 24/7.',
      features: [
        'Hospital Security & Services',
        'Security of Residential Colonies',
        'Commercial Establishments Security',
        'Armed Escorts',
        'Housing Complex Security',
        'BPO & IT Companies Security',
        'Bank Security',
        'Retail Security',
        'Hotel Security',
      ],
      coverage: '24/7 security services with trained professionals',
    },
    {
      id: 'facility',
      icon: Building2,
      title: 'Facility Management',
      tagline: 'Complete Facility Solutions',
      description: 'End-to-end facility management services ensuring smooth operations of your premises.',
      features: [
        'Mechanized & Hygienic Housekeeping',
        'Conservancy Services',
        'Hospitality & Canteen Management',
        'Conceptual Gardening & Maintenance',
        'Warehouse Facility Management',
        'Manpower Services',
        'Event Support Services',
        'Reception Services',
      ],
      facilities: ['Corporate Offices', 'Manufacturing Plants', 'Hospitals', 'Educational Institutions', 'Shopping Malls', 'Residential Complexes', 'Hotels'],
    },
    {
      id: 'it',
      icon: Cpu,
      title: 'IT Solutions',
      tagline: 'Smart Technology for Modern Business',
      description: 'Advanced IT systems and solutions to streamline your business operations and enhance security.',
      features: [
        'Patrolling Systems',
        'Time and Attendance Systems',
        'CCTV Surveillance Systems',
        'Access Control Systems',
        'Public Address Systems',
        'RFID Integrations',
        'Cloud-based Attendance System',
        'Visitor Management System',
        'Canteen Management System',
        'Parking Management System',
        'Vehicle Tracking System',
      ],
      partnerships: ['Dell', 'HP', 'Lenovo', 'Microsoft', 'Apple'],
    },
    {
      id: 'realestate',
      icon: HomeIcon,
      title: 'Real Estate Services',
      tagline: 'Your Property Partner',
      description: 'Comprehensive real estate solutions for all your property needs across Maharashtra.',
      features: [
        'Property Selling',
        'Property Renting',
        'Property Management',
        'Investment Consulting',
        'Legal Documentation',
        'Property Valuation',
      ],
      propertyTypes: ['Residential Apartments', 'Independent Houses', 'Commercial Offices', 'Retail Spaces', 'Industrial Land', 'Warehouses', 'Plots/Land', 'Investment Properties'],
      specialization: 'Agriculture and Farm Properties',
      coverage: 'All across Maharashtra',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Our <span className="text-[#F5C842]">Services</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Comprehensive multi-domain solutions designed to meet your business needs with excellence and reliability
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${isEven ? 'bg-black' : 'bg-gradient-to-br from-[#1a1a1a] to-black'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Service Info */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 bg-[#F5C842]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-[#F5C842]" />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-[#F5C842] text-xl font-semibold">{service.tagline}</p>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-[#F5C842] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#F5C842]/30">
                      {/* Industries */}
                      {service.industries && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-4">Industries We Serve:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-black/60 text-gray-300 text-sm rounded-full border border-[#F5C842]/20"
                              >
                                {industry}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Positions */}
                      {service.positions && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-4">Position Types:</h4>
                          <div className="space-y-2">
                            {service.positions.map((position, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-[#F5C842] rounded-full"></div>
                                <span className="text-gray-300 text-sm">{position}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Facilities */}
                      {service.facilities && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-4">Facility Types:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.facilities.map((facility, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-black/60 text-gray-300 text-sm rounded-full border border-[#F5C842]/20"
                              >
                                {facility}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Property Types */}
                      {service.propertyTypes && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-4">Property Types:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.propertyTypes.map((type, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-black/60 text-gray-300 text-sm rounded-full border border-[#F5C842]/20"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Partnerships */}
                      {service.partnerships && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-4">Technology Partners:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.partnerships.map((partner, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-black/60 text-gray-300 text-sm rounded-full border border-[#F5C842]/20"
                              >
                                {partner}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Locations */}
                      {service.locations && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-2">Service Locations:</h4>
                          <p className="text-gray-300 text-sm">{service.locations}</p>
                        </div>
                      )}

                      {/* Coverage */}
                      {service.coverage && (
                        <div>
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-2">Coverage:</h4>
                          <p className="text-gray-300 text-sm">{service.coverage}</p>
                        </div>
                      )}

                      {/* Specialization */}
                      {service.specialization && (
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold text-[#F5C842] mb-2">Special Expertise:</h4>
                          <p className="text-gray-300 text-sm">{service.specialization}</p>
                        </div>
                      )}
                    </div>

                    <Link
                      to="/contact"
                      className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C842]/50 hover:scale-105"
                    >
                      <span>Get Started with {service.title}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-black border border-[#F5C842]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We understand that every business is unique. Let's discuss your specific requirements and create a tailored solution.
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

export default Services;