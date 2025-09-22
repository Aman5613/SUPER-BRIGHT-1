import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    title: "Advanced Processing Capabilities",
    description: "Cutting-edge technology for superior results",
    icon: "⚙️",
  },
  {
    title: "Customized Solutions",
    description: "Tailored solutions for every need",
    icon: "🎯",
  },
  {
    title: "Fast Turnaround Times",
    description: "Quick delivery without compromising quality",
    icon: "⚡",
  },
  {
    title: "Primary Quality",
    description: "Uncompromising standards in every process",
    icon: "✨",
  },
  {
    title: "Strategically Located",
    description: "Convenient access and efficient logistics",
    icon: "📍",
  },
  {
    title: "Team of Efficient Professionals",
    description: "Skilled experts dedicated to excellence",
    icon: "👥",
  },
  {
    title: "Cost Effective Solutions",
    description: "Premium quality at competitive prices",
    icon: "💰",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine decades of experience with cutting-edge
            technology to deliver superior electroplating
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  TEAM & WORKER
                </h4>
                <p className="text-gray-700">
                  A highly skilled and seasoned team with
                  extensive industry experience, consistently
                  delivering high-quality results through
                  collaborative efforts.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  TRANSPORT FACILITY
                </h4>
                <p className="text-gray-700">
                  We have achieved 99.99% on time delivery ever
                  since 1998. We have our own transport
                  facility. We are now with GPS tracking all
                  vehicles.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  EXPERIENCE
                </h4>
                <p className="text-gray-700">
                  Super bright electroplating solutions with 25
                  years of industry experience.
                </p>
              </div>
            </div>
          </div>
          <div>
            <ImageWithFallback
              src="https://ik.imagekit.io/vpofwrsgy/img/Why%20Choose%20Us%202.png?updatedAt=1758472035308"
              alt="Industrial metal processing facility"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}