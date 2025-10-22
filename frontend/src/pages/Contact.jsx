import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (frontend only)
    setTimeout(() => {
      toast({
        title: 'Success!',
        description: 'Thank you for contacting us. We will get back to you soon!',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Contact <span className="text-[#F5C842]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Get in touch with us to discuss how we can help your business grow
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Let's Start a <span className="text-[#F5C842]">Conversation</span>
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    Whether you have a question about our services, need assistance, or want to discuss a partnership, our team is ready to help.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Address */}
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#F5C842]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#F5C842]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Office Address</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          489, Near SBI Bank, Old Bazar Peth,<br />
                          Goregaon, Mangaon, Raigad,<br />
                          Maharashtra - 402103, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#F5C842]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#F5C842]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Phone Numbers</h3>
                        <p className="text-gray-400 text-sm">
                          Main: <a href="tel:7744975512" className="text-[#F5C842] hover:underline">+91 7744975512</a>
                        </p>
                        <p className="text-gray-400 text-sm">
                          WhatsApp: <a href="https://wa.me/919322021991" className="text-[#F5C842] hover:underline">+91 9322021991</a>
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          Emergency: <a href="tel:9322021991" className="text-[#F5C842] hover:underline">+91 9322021991</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#F5C842]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#F5C842]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Email Address</h3>
                        <p className="text-gray-400 text-sm">
                          <a href="mailto:jaydevassociates25@gmail.com" className="text-[#F5C842] hover:underline">
                            jaydevassociates25@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/20 hover:border-[#F5C842]/60 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#F5C842]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#F5C842]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                        <p className="text-gray-400 text-sm">Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-400 text-sm">Saturday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-400 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Connect */}
                <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 rounded-xl border border-[#F5C842]/30">
                  <h3 className="text-white font-semibold mb-4">Quick Connect</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:7744975512"
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href="https://wa.me/919322021991"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#1ea952] transition-all duration-300 hover:scale-105"
                    >
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-xl border border-[#F5C842]/30">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-[#F5C842]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#F5C842]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F5C842] transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-[#F5C842]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-[#F5C842]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F5C842] transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#F5C842]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F5C842] transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-[#F5C842]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F5C842] transition-colors duration-300"
                      placeholder="Enter subject"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-[#F5C842]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-black border border-[#F5C842]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#F5C842] transition-colors duration-300 resize-none"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-[#F5C842] text-black font-semibold rounded-lg hover:bg-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#F5C842]/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;