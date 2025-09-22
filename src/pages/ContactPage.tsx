import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const facilities = [
    {
      name: "Gurgaon Unit 1",
      address: "Industrial Area Phase 1, Gurgaon, Haryana 122001",
      phone: "+91 124-XXX-XXXX",
      email: "gurgaon@superbright.com",
      services: ["Automatic Plating", "Semi-Automatic Plating", "Manual Barrel Plating"]
    },
    {
      name: "Delhi Unit 2", 
      address: "Industrial Area, New Delhi, Delhi 110001",
      phone: "+91 11-XXX-XXXX",
      email: "delhi@superbright.com",
      services: ["Automatic Plating", "Semi-Automatic Plating", "Manual Barrel Plating"]
    },
    {
      name: "Bhiwadi Unit 3",
      address: "Industrial Area, Bhiwadi, Rajasthan 301019",
      phone: "+91 1493-XXX-XXX",
      email: "bhiwadi@superbright.com", 
      services: ["Manual Plating", "Automatic Plating", "Semi-Automatic Plating", "Manual Barrel Plating"]
    },
    {
      name: "Khushkhera Unit 4",
      address: "Industrial Area, Khushkhera, Rajasthan 301707",
      phone: "+91 1493-XXX-XXX",
      email: "khushkhera@superbright.com",
      services: ["Manual Plating", "Automatic Plating", "Semi-Automatic Plating", "Barrel Plating"]
    }
  ];

  const contactMethods = [
    {
      title: "Phone",
      description: "Speak directly with our experts",
      value: "+91 124-XXX-XXXX",
      icon: "📞"
    },
    {
      title: "Email", 
      description: "Send us your requirements",
      value: "info@superbright.com",
      icon: "✉️"
    },
    {
      title: "WhatsApp",
      description: "Quick responses on WhatsApp",
      value: "+91 98XXX-XXXXX",
      icon: "💬"
    },
    {
      title: "Address",
      description: "Visit our main facility",
      value: "Gurgaon, Haryana, India", 
      icon: "📍"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your inquiry. We'll get back to you soon!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600339346882-5df07221e4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMGNvbnRhY3R8ZW58MXx8fHwxNzU4Mzc5OTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Contact us"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600 text-white">Contact Us</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch With Our Experts
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to discuss your electroplating needs? Contact us for expert consultation, 
              custom quotes, and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                    <p className="font-medium text-blue-600">{method.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="mt-1"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service Required</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gold">Gold Plating</SelectItem>
                          <SelectItem value="silver">Silver Plating</SelectItem>
                          <SelectItem value="copper">Copper Plating</SelectItem>
                          <SelectItem value="nickel">Nickel Plating</SelectItem>
                          <SelectItem value="zinc">Zinc Plating</SelectItem>
                          <SelectItem value="zinc-nickel">Zinc Nickel Plating</SelectItem>
                          <SelectItem value="tin">Tin Plating</SelectItem>
                          <SelectItem value="dull-copper-tin">Dull Copper & Tin Plating</SelectItem>
                          <SelectItem value="alkaline-zinc">Alkaline Zinc Plating</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        className="mt-1 min-h-32"
                        placeholder="Please describe your requirements, quantity, specifications, and any other relevant details..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Super Bright?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">25+ Years Experience</h3>
                      <p className="text-gray-600 text-sm">Trusted expertise since 1998 in electroplating services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">ISO 9001:2015 Certified</h3>
                      <p className="text-gray-600 text-sm">Quality management system ensuring consistent results</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">99.99% On-Time Delivery</h3>
                      <p className="text-gray-600 text-sm">Reliable delivery schedule you can count on</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">4 Modern Facilities</h3>
                      <p className="text-gray-600 text-sm">State-of-the-art equipment across multiple locations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We aim to respond to all inquiries within 24 hours during business days. 
                  For urgent requirements, please call us directly.
                </p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Call Now: +91 124-XXX-XXXX
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Locations</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four state-of-the-art facilities strategically located to serve you better
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{facility.name}</h3>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <span className="text-gray-400 text-sm mt-1">📍</span>
                        <p className="text-gray-600 text-sm">{facility.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">📞</span>
                        <p className="text-gray-600 text-sm">{facility.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">✉️</span>
                        <p className="text-gray-600 text-sm">{facility.email}</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 mb-2">Services:</p>
                      <div className="flex flex-wrap gap-2">
                        {facility.services.map((service, serviceIndex) => (
                          <Badge key={serviceIndex} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}