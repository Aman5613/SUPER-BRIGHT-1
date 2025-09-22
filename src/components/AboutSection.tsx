import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function AboutSection() {
  const facilities = [
    {
      name: "Gurgaon Unit 1",
      services: ["Automatic Plating", "Semi-Automatic Plating", "Manual Barrel Plating"]
    },
    {
      name: "Bhiwadi Unit 3",
      services: ["Manual Plating", "Automatic Plating",  "Manual Barrel Plating"]
    },
    {
      name: "Khushkhera Unit 4",
      services: ["Manual Plating", "Automatic Plating", "Semi-Automatic Plating", "Barrel Plating"]
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Company Founded",
      description: "Started operations with basic electroplating services"
    },
    {
      year: "2005",
      title: "ISO Certification",
      description: "Expanded facility and obtained ISO certification"
    },
    {
      year: "2010", 
      title: "Major Expansion",
      description: "Significant growth in capacity and capabilities"
    },
    {
      year: "2018",
      title: "Technology Upgrade", 
      description: "Implemented advanced automation and control systems"
    },
    {
      year: "2025",
      title: "Present Day",
      description: "Expanding to new markets and services"
    }
  ];

  const values = [
    {
      title: "Customer Focus",
      description: "We are committed to understanding and meeting the needs of our customers.",
      icon: "👥"
    },
    {
      title: "Quality",
      description: "We strive for excellence in all aspects of our operations.",
      icon: "⭐"
    },
    {
      title: "Integrity", 
      description: "We conduct our business with honesty, transparency, and ethical practices.",
      icon: "🤝"
    }
  ];

  const advantages = [
    {
      title: "ISO Certified",
      description: "Quality management system certified to ISO 9001:2015 standards",
      icon: "🏆"
    },
    {
      title: "Advanced Technology",
      description: "State-of-the-art equipment and processes",
      icon: "⚙️"
    },
    {
      title: "Expert Team",
      description: "Highly skilled and experienced professionals",
      icon: "👨‍🔬"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">About Us</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Electroplating Since 1998
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to deliver exceptional quality and precision in metal finishing
          </p>
        </motion.div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src="https://ik.imagekit.io/vpofwrsgy/img/SB.LOGO.png?updatedAt=1758472029659"
                    alt="Mr. Manoj Kansal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2"> Mr. Manoj Kansal</h4>
                  <p className="text-blue-600 font-medium">Founder & Managing Director</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <ImageWithFallback
                    src="https://ik.imagekit.io/vpofwrsgy/img/sb%20logo.png?updatedAt=1758472028692"
                    alt="Mr. Sahil Kansal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Mr. Sahil Kansal</h4>
                  <p className="text-blue-600 font-medium">Director</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998, Super Bright Electroplating Company has grown from a small local business 
                  to a leading provider of electroplating services in India. Our journey began with a vision 
                  to deliver exceptional quality and precision in metal finishing, and today we stand as an 
                  ISO 9001:2015 certified company serving diverse industries across the nation.
                </p>
                <p>
                  With state-of-the-art facilities and a team of skilled professionals, we offer comprehensive 
                  electroplating solutions including zinc, nickel, tin, silver, gold, and copper plating. 
                  Our commitment to quality and customer satisfaction has earned us the trust of leading 
                  manufacturers and industries.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://ik.imagekit.io/vpofwrsgy/img/image.png?updatedAt=1758503395869"
                alt="Industrial facility"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Manufacturing Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services & Manufacturing Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{facility.name}</h4>
                  <ul className="space-y-2">
                    {facility.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-600 text-sm flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission Statement</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide exceptional electroplating services that meet the highest industry standards 
                  while ensuring customer satisfaction through innovation, quality, and reliable service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision Statement</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the preferred choice for electroplating services in India, known for our commitment 
                  to excellence, innovation, and sustainable practices in metal finishing solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Badge className="bg-blue-600 text-white mr-3">{item.year}</Badge>
                          <h4 className="font-bold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Advantages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://ik.imagekit.io/vpofwrsgy/img/fischer-gold-testing-machine-1000x1000.jpg?updatedAt=1758472018913"
                alt="Modern factory automation"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">State-of-the-Art Technology</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our facilities are equipped with the latest electroplating technology and automation systems 
                  that ensure consistent quality and precision in every project. We continuously invest in 
                  upgrading our equipment to stay at the forefront of the industry.
                </p>
                <p>
                  From automatic plating lines to precision control systems, our technology enables us to 
                  deliver superior finishes while maintaining the highest standards of efficiency and 
                  environmental responsibility.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800">Advanced Automation</Badge>
                <Badge className="bg-green-100 text-green-800">Eco-Friendly Processes</Badge>
                <Badge className="bg-purple-100 text-purple-800">Precision Control</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}