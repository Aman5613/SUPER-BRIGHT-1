import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const certificates = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    issuer: "International Organization for Standardization",
    year: "2023",
    status: "Active"
  },
  {
    title: "ISO 14001:2015", 
    description: "Environmental Management System",
    issuer: "ISO Certification Body",
    year: "2023",
    status: "Active"
  },
  {
    title: "OHSAS 18001",
    description: "Occupational Health and Safety Assessment",
    issuer: "BSI Group",
    year: "2022",
    status: "Active"
  },
  {
    title: "RoHS Compliance",
    description: "Restriction of Hazardous Substances Directive",
    issuer: "European Union",
    year: "2023",
    status: "Certified"
  }
];

export function CertificatesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest standards through rigorous certification processes and continuous improvement
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback 
              src="https://ik.imagekit.io/vpofwrsgy/img/image-6.jpeg?updatedAt=1758472018961"
              alt="Quality control laboratory"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our commitment to quality is reflected in our comprehensive certification portfolio. 
              We continuously invest in maintaining and upgrading our quality management systems 
              to ensure consistent, reliable results for our clients.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Rigorous testing protocols</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Regular audits and inspections</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Environmental compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Safety-first approach</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {cert.status}
                  </Badge>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                <div className="text-xs text-gray-500">
                  <p className="mb-1">Issued by: {cert.issuer}</p>
                  <p>Year: {cert.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}