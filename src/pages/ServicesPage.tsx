import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AutoCarousel } from "../components/AutoCarousel";
import { ServicesSection } from "../components/ServicesSection";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { title } from "process";

export function ServicesPage() {
  // Transportation fleet images
  const transportationImages = [
    {
      src: "https://images.unsplash.com/photo-1715704397484-e3f0cc96aa7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGVsaXZlcnklMjB0cnVjayUyMHRyYW5zcG9ydHxlbnwxfHx8fDE3NTg0NzQ5NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Industrial delivery truck",
      title: "Heavy Transport Vehicle",
      description: "Specialized for heavy equipment and large component delivery"
    },
    {
      src: "https://images.unsplash.com/photo-1665521032636-e8d2f6927053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHZhbiUyMHRyYW5zcG9ydCUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NTg0NzU0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Delivery van logistics",
      title: "Medium Delivery Van",
      description: "Perfect for medium-sized shipments and regular deliveries"
    },
    {
      src: "https://images.unsplash.com/photo-1601912552080-0fb89fd08042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkZWxpdmVyeSUyMHRydWNrJTIwbG9hZGluZ3xlbnwxfHx8fDE3NTg0NzU0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Warehouse loading truck",
      title: "Rapid Response Vehicle",
      description: "Quick delivery for urgent requirements and emergency shipments"
    },
    
  ];

  // Industrial equipment images
  const equipmentImages = [
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/fischer-gold-testing-machine-1000x1000.jpg?updatedAt=1758472018913",
      alt: "XRF testing machine",
      title: "XRF Analysis Equipment",
      description: "State-of-the-art X-ray fluorescence (XRF) analyzers for precise material composition analysis"

    },
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/oven.jpeg?updatedAt=1758472024304",
      alt: "Industrial oven",
      title: "Industrial Ovens",
      description: "High-temperature ovens for curing and heat treatment processes"
    },
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/THICKNESS%20TESTER.jpg?updatedAt=1758472028816",
      alt: "Coating thickness tester",
      title: "Coating Thickness Testers",
      description: "Precision instruments for measuring coating thickness and uniformity"
    },
   
  ];

  // Laboratory images
  const labImages = [
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/sst.jpeg?updatedAt=1758472029149",
      alt: "Salt spray testing",
      title: "Corrosion Testing Chambers",
      description: "Simulated environmental testing for corrosion resistance and durability"
    },
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/pH%20Meter%202.jpg?updatedAt=1758472024058",
      alt: "Scientific instruments",
      title: "Precision Analysis Instruments",
      description: "High-precision instruments for material analysis and testing"
    },
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/pH%20meter.jpg?updatedAt=1758472025283",
      alt: "Quality control testing",
      title: "Chemical Analysis & Testing",
      description: "Rigorous quality control and chemical composition analysis"
    }
  ,
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/MUFFE%20FURNACE.jpg?updatedAt=1758472024203",
      alt: "Muffle furnace",
      title: "Heat Treatment Furnaces",
      description: "Controlled heat treatment for material strengthening and coating adhesion"
    }
  ];

  // Safety images
  const safetyImages = [
    {
      src: "https://images.unsplash.com/photo-1754494977436-a5c202306fe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwc2VjdXJpdHklMjBzdXJ2ZWlsbGFuY2V8ZW58MXx8fHwxNzU4NDc0OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Safety surveillance",
      title: "Comprehensive Safety Systems",
      description: "24/7 monitoring and safety protocols for all personnel"
    },
    {
      src: "https://images.unsplash.com/photo-1574313462720-50e62ba298d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50JTIwd29ya2Vyc3xlbnwxfHx8fDE3NTg0NzU0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Industrial safety equipment",
      title: "Safety Equipment & Training",
      description: "Comprehensive safety gear and training programs for all employees"
    }
  ];

  // Production images
  const productionImages = [
    {
      src: "https://images.unsplash.com/photo-1592385456792-dfef3ae5fa87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJvZHVjdGlvbiUyMGNhcGFjaXR5JTIwbWV0cmljc3xlbnwxfHx8fDE3NTg0NzQ5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Production capacity metrics",
      title: "High-Volume Production",
      description: "Large-scale production capabilities with consistent quality"
    },
    {
      src: "https://images.unsplash.com/photo-1574184383650-5f859b6793c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aW9uJTIwbGluZSUyMG1hbnVmYWN0dXJpbmclMjBtZXRyaWNzfGVufDF8fHx8MTc1ODQ3NTQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Manufacturing production line",
      title: "Automated Production Lines",
      description: "Efficient automated systems for maximum throughput"
    }
  ];

  // Technical support images
  const supportImages = [
    {
      src: "https://ik.imagekit.io/vpofwrsgy/img/image-8.jpeg?updatedAt=1758472024215",
      alt: "Technical support team",
      title: "Expert Technical Team",
      description: "Experienced engineers providing round-the-clock support"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Analysis",
      description: "We analyze your requirements and recommend the most suitable plating solution for your specific needs."
    },
    {
      step: "02", 
      title: "Surface Preparation",
      description: "Thorough cleaning and preparation of parts to ensure optimal adhesion and finish quality."
    },
    {
      step: "03",
      title: "Electroplating Process", 
      description: "Precision application of metal coating using our advanced automated and semi-automated systems."
    },
    {
      step: "04",
      title: "Quality Control",
      description: "Rigorous inspection and testing to ensure all specifications and standards are met."
    },
    {
      step: "05",
      title: "Finishing & Delivery",
      description: "Final inspection, packaging, and on-time delivery with full documentation."
    }
  ];

  const industries = [
    {
      name: "Automotive",
      description: "Precision plating for automotive components, ensuring durability and corrosion resistance.",
      applications: ["Engine components", "Electrical contacts", "Decorative trim", "Fasteners"]
    },
    {
      name: "Electronics",
      description: "High-quality finishes for electronic components requiring excellent conductivity.",
      applications: ["PCB components", "Connectors", "Semiconductor parts", "Contact points"]
    },
    {
      name: "Aerospace",
      description: "Critical applications requiring the highest standards of quality and precision.",
      applications: ["Aircraft components", "Navigation equipment", "Control systems", "Safety mechanisms"]
    },
    {
      name: "Manufacturing",
      description: "Industrial plating solutions for manufacturing equipment and machinery.",
      applications: ["Machine parts", "Tools & dies", "Industrial hardware", "Production equipment"]
    }
  ];

  const qualityFeatures = [
    {
      title: "ISO 9001:2015 Certified",
      description: "Quality management system ensures consistent, reliable results",
      icon: "🏆"
    },
    {
      title: "Advanced Testing",
      description: "Comprehensive quality control with modern testing equipment",
      icon: "🔬"
    },
    {
      title: "Precision Control",
      description: "Automated systems for consistent thickness and coverage", 
      icon: "⚙️"
    },
    {
      title: "Environmental Compliance",
      description: "Eco-friendly processes meeting all environmental standards",
      icon: "🌿"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1582273953509-3972288b909e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvcGxhdGluZyUyMGluZHVzdHJpYWwlMjBwcm9jZXNzfGVufDF8fHx8MTc1ODQxOTg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Electroplating process"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-blue-600 text-white">Our Services</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Complete Electroplating Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From gold to zinc plating, we provide comprehensive metal finishing services 
              with precision, quality, and reliability for over 25 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Download Capabilities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <ServicesSection />

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              5-Step Quality Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent quality and precision in every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Industries</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized electroplating solutions across diverse industries and applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{industry.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-900">Applications:</p>
                      <ul className="space-y-1">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-600 text-white">Quality Assurance</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Uncompromising Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced quality control systems ensure every project meets the highest standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Transportation</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Transportation Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three dedicated vehicles ensuring timely material delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Transport Vehicle 1",
                title: "Delivery Truck A",
                description: "Specialized for heavy equipment transportation",
                icon: "🚛"
              },
              {
                name: "Transport Vehicle 2", 
                title: "Delivery Van B",
                description: "Perfect for medium-sized deliveries",
                icon: "🚐"
              },
              {
                name: "Transport Vehicle 3",
                title: "Utility Vehicle C", 
                description: "Rapid response and urgent deliveries",
                icon: "🚗"
              }
            ].map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-5xl mb-4">{vehicle.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                    <h4 className="text-blue-600 font-medium mb-3">{vehicle.title}</h4>
                    <p className="text-gray-600 text-sm">{vehicle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <AutoCarousel 
              images={transportationImages}
              interval={5000}
              className="shadow-xl"
              showContent={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Industrial Equipment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Equipment</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industrial Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art machinery for superior service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "CHILLER", icon: "❄️", description: "Temperature control systems" },
              { name: "OVEN", icon: "🔥", description: "High-temperature processing" },
              { name: "SCRUBBER", icon: "🌪️", description: "Air purification systems" },
              { name: "ETP", icon: "💧", description: "Effluent treatment plant" },
              { name: "DG BACKUP", icon: "⚡", description: "Diesel generator backup" },
              { name: "XRF TESTING", icon: "🔬", description: "X-ray fluorescence analysis" }
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{equipment.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{equipment.name}</h3>
                    <p className="text-gray-600 text-sm">{equipment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="group"
          >
            <AutoCarousel 
              images={equipmentImages}
              interval={6000}
              className="shadow-xl"
              showContent={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Analytical Lab Instruments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Laboratory</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analytical Lab Instruments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced testing and measurement equipment for precise analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "pH Meter", icon: "🧪", description: "Acidity measurement" },
              { name: "TDS Meter", icon: "💧", description: "Total dissolved solids" },
              { name: "Salt Spray Test Machine", icon: "🌊", description: "Corrosion testing" },
              { name: "Hot Plate", icon: "🔥", description: "Sample heating" },
              { name: "Lab Glassware Set", icon: "🧪", description: "Precision vessels" },
              { name: "MUFFE FURNACE", icon: "🔥", description: "High-temp furnace" },
              { name: "Lux Level Test", icon: "💡", description: "Light measurement" },
              { name: "Burette Stand", icon: "🧪", description: "Titration equipment" }
            ].map((instrument, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="text-3xl mb-3">{instrument.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2 text-sm">{instrument.name}</h3>
                    <p className="text-gray-600 text-xs">{instrument.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <AutoCarousel 
              images={labImages}
              interval={4500}
              className="shadow-xl"
              showContent={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Safety</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Safety & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive measures for employee safety and facility security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "CCTV Surveillance",
                description: "24/7 monitoring of facility premises with advanced CCTV cameras and recording systems.",
                icon: "📹"
              },
              {
                title: "Fire Safety",
                description: "Comprehensive fire safety systems including smoke detectors, fire alarms, and extinguishers.",
                icon: "🚨"
              },
              {
                title: "Emergency Response",
                description: "Dedicated emergency response team for immediate action in case of accidents or incidents.",
                icon: "🚑"
              },
              {
                title: "Safety Gear",
                description: "Mandatory safety gear for all employees including helmets, gloves, and protective clothing.",
                icon: "🦺"
              },
              {
                title: "Security Personnel",
                description: "Trained security personnel for round-the-clock monitoring and access control.",
                icon: "👮"
              },
              {
                title: "Safety Training",
                description: "Regular safety training programs for employees to ensure awareness and preparedness.",
                icon: "📚"
              }
            ].map((safety, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{safety.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{safety.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{safety.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="group"
          >
            <AutoCarousel 
              images={safetyImages}
              interval={5500}
              className="shadow-xl"
              showContent={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Production</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Production Capacity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Annual Production Metrics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-medium">Process</th>
                        <th className="px-6 py-4 text-left font-medium">Annual Capacity (INR)</th>
                        <th className="px-6 py-4 text-left font-medium">Daily Production (MT)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { process: "Alkaline Zinc", annual: "7.5 Cr", daily: "225" },
                        { process: "Alkaline Zinc Nickel (Silver)", annual: "4 Cr", daily: "100" },
                        { process: "Alkaline Zinc Iron Silver", annual: "1.5 Cr", daily: "5" },
                        { process: "Alkaline Zinc Iron Black", annual: "0.5 Cr", daily: "5" },
                        { process: "Electroless Nickel", annual: "1.9 Cr", daily: "-" },
                        { process: "Acid Zinc", annual: "0.5 Cr", daily: "4" },
                        { process: "Tin Plating", annual: "1.5 Cr", daily: "-" }
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.process}</td>
                          <td className="px-6 py-4 text-gray-600">{row.annual}</td>
                          <td className="px-6 py-4 text-gray-600">{row.daily}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <AutoCarousel 
              images={productionImages}
              interval={4000}
              className="shadow-xl"
              showContent={true}
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800">Support</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Technical Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert Partners Ensuring Quality Service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "24/7 Support",
                description: "Round-the-clock technical assistance for all services",
                icon: "🔧"
              },
              {
                title: "Expert Team", 
                description: "Qualified technicians with years of industry experience",
                icon: "👨‍🔬"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality control and testing procedures",
                icon: "✅"
              },
              {
                title: "Technical Training",
                description: "Continuous training and skill development programs",
                icon: "📖"
              }
            ].map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{support.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{support.title}</h3>
                    <p className="text-gray-600 text-sm">{support.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <AutoCarousel 
              images={supportImages}
            
              interval={7000}
              className="shadow-xl mb-12"
              showContent={true}
            />
            
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Technical Partners</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Grauer & Well India Ltd.",
                "Artek Surfin Chemicals Ltd.",
                "CMF Pvt. Ltd.",
                "MACDERMID (COVENTYA)",
                "SCT",
                "GTZ"
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-blue-600 font-bold text-lg">🤝</span>
                      </div>
                      <h4 className="font-bold text-gray-900">{partner}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts for a consultation and custom quote for your electroplating needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}