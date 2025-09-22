import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const services = [
  {
    title: "Gold Plating",
    description:
      "Premium gold electroplating services for superior conductivity and corrosion resistance.",
    fullDescription:
      "Our gold plating service provides exceptional conductivity and corrosion resistance for high-end applications. We use pure gold solutions with precise thickness control from 0.5 to 50 microns. Perfect for electronics, jewelry, and aerospace components requiring the highest quality finish.",
  },
  {
    title: "Silver Plating",
    description:
      "High-quality silver plating for excellent electrical conductivity and aesthetic appeal.",
    fullDescription:
      "Silver plating offers the best electrical conductivity among all metals. Our process ensures uniform coating thickness and excellent adhesion. Ideal for electrical contacts, printed circuit boards, and decorative applications where both function and appearance matter.",
  },
  {
    title: "Copper Plating",
    description:
      "Reliable copper plating solutions for enhanced conductivity and durability.",
    fullDescription:
      "Copper plating provides excellent electrical and thermal conductivity with superior adhesion properties. We offer both acid and alkaline copper plating processes. Commonly used as a base layer for other platings and for PCB manufacturing.",
  },
  {
    title: "Nickel Plating",
    description:
      "Professional nickel plating for superior wear resistance and protection.",
    fullDescription:
      "Nickel plating offers excellent corrosion resistance and wear protection. Our bright and semi-bright nickel processes provide uniform coverage with controlled stress levels. Perfect for automotive parts, tools, and decorative applications.",
  },
  {
    title: "Zinc Plating",
    description:
      "Expert zinc plating services for excellent corrosion protection.",
    fullDescription:
      "Zinc plating provides cost-effective corrosion protection for steel components. We offer various zinc finishes including clear, yellow, and black chromate conversions. Ideal for fasteners, hardware, and automotive components requiring corrosion resistance.",
  },
  {
    title: "Zinc Nickel Plating",
    description:
      "Advanced zinc nickel alloy plating for maximum protection and performance.",
    fullDescription:
      "Zinc-nickel alloy plating provides superior corrosion protection compared to pure zinc. Our process maintains 12-15% nickel content for optimal performance. Excellent for automotive brake systems, fuel systems, and other critical applications.",
  },
  {
    title: "Tin Plating",
    description:
      "Tin good resistance to oxidation in moderately corrosive environments. Many will apply it to equipment and machines used in the food industry.",
    fullDescription:
      "Tin plating offers excellent solderability and corrosion resistance in mild environments. Our bright tin process provides uniform coating with low whisker formation. FDA approved for food contact applications and widely used in electronics manufacturing.",
  },
  {
    title: "Dull Copper & Tin Plating",
    description:
      "Advanced highly conductive material that's used in electrical applications like wiring and electrical components.",
    fullDescription:
      "Dull copper and tin plating combines the conductivity of copper with the corrosion resistance of tin. This matte finish process is ideal for electrical connections where high conductivity and solderability are required without reflective surfaces.",
  },
  {
    title: "Alkaline Zinc Plating",
    description:
      "Advantages, including corrosion resistance, a uniform finish, and environmental benefits.",
    fullDescription:
      "Alkaline zinc plating is an environmentally friendly alternative to acid zinc processes. It provides excellent throwing power for complex geometries and uniform deposits. This process eliminates the use of cyanide while maintaining high-quality results.",
  },
];

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1666800715778-4b0409bb66bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGxhdGluZyUyMGpld2VscnklMjBwcm9jZXNzfGVufDF8fHx8MTc1ODI0ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Gold Plating Process",
    title: "Gold Plating",
  },
  {
    src: "https://ik.imagekit.io/vpofwrsgy/img/27786124-2a34-4730-9f32-50d82def0a5f.jpg?updatedAt=1758503061842",
    alt: "Silver Plating Process",
    title: "Silver Plating",
  },
  {
    src: "https://ik.imagekit.io/vpofwrsgy/img/4e9974af-5e54-46b5-8bde-d7fca4898be6.jpg?updatedAt=1758503032128",
    alt: " Zinc Plating Process",
    title: "Copper Plating",
  },
  {
    src: "https://images.unsplash.com/photo-1698934688914-a10ca7168968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWNrZWwlMjBwbGF0aW5nJTIwbWV0YWwlMjBmaW5pc2h8ZW58MXx8fHwxNzU4MjQ4NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Nickel Plating Process",
    title: "Nickel Plating",
  },
  {
    src: "https://ik.imagekit.io/vpofwrsgy/img/80530c29-bd1e-4df4-a557-cce53d193e38.jpg?updatedAt=1758503002051",
    alt: "Zinc Plating Process",
    title: "Zinc Plating",
  },
  {
    src: "https://images.unsplash.com/photo-1731317734838-12da6c9a6139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6aW5jJTIwbmlja2VsJTIwYWxsb3klMjBwbGF0aW5nfGVufDF8fHx8MTc1ODI0ODU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Zinc Nickel Plating Process",
    title: "Zinc Nickel Plating",
  },
  {
    src: "https://ik.imagekit.io/vpofwrsgy/img/8c534202-2826-41e8-91f6-adcad59dcceb.jpg?updatedAt=1758503085510",
    alt: "Tin Plating Process",
    title: "Tin Plating",
  },
  {
    src: "https://ik.imagekit.io/vpofwrsgy/img/b7fdb6db-e731-4e4e-a78c-737e871a0360.jpg?updatedAt=1758503143639",
    alt: "Dull Copper & Tin Plating Process",
    title: "Dull Copper & Tin Plating",
  },
  {
    src: "https://ik.imagekit.io/vpofwrsgy/img/8a9dd7b8-35b2-4775-b552-c388ddfbeeb8.jpg?updatedAt=1758503112503",
    alt: "Alkaline Zinc Plating Process",
    title: "Alkaline Zinc Plating",
  },
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length,
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) %
        carouselImages.length,
    );
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length,
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full relative"
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Service title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h4 className="text-white text-xl font-semibold">
                {image.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
      >
        <span className="text-lg">‹</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 transition-all duration-200 opacity-0 group-hover:opacity-100 shadow-lg"
      >
        <span className="text-lg">›</span>
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div
          className="h-full bg-blue-500 transition-all duration-700 ease-in-out"
          style={{
            width: `${((currentIndex + 1) / carouselImages.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [expandedCards, setExpandedCards] = useState<
    Set<number>
  >(new Set());

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Electroplating Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of electroplating
            solutions to meet your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {expandedCards.has(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-4"
                  >
                    <p className="text-gray-700 leading-relaxed text-sm border-t pt-4">
                      {service.fullDescription}
                    </p>
                  </motion.div>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleCard(index)}
                  className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  {expandedCards.has(index)
                    ? "Read Less"
                    : "Read More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageCarousel />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Quality You Can Trust
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>25 Years Experience:</strong>{" "}
                    Trusted expertise in delivering quality
                    electroplating solutions since 1998.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Modern Machinery:</strong>{" "}
                    State-of-the-art equipment and facilities
                    for precise results.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Multiple Processes:</strong>{" "}
                    Automatic, semi-automatic, and manual barrel
                    processing options available.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Quality Certified:</strong> ISO
                    9001:2015 certified operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}