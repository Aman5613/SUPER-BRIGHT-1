import { motion } from "motion/react";

const logoData = [
  { name: "Goel industrial", logo: "GI" },
  { name: "Federal mogul", logo: "FM" },
  { name: "Asiatic electrical", logo: "AE" },
  { name: "Sunitech", logo: "ST" },
  { name: "Moden Eng.", logo: "ME" },
  { name: "Caparo eng.", logo: "CE" },
  { name: "New Swan ", logo: "NS" },
  { name: "Pasupaty Springs", logo: "PS" },
  { name: "Anu industries", logo: "AI" },
  { name: "Skyimax industry", logo: "SI" }
];

export function LogoLoopSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">
            Over 500+ companies trust us with their electroplating needs
          </p>
        </div>
        
        <div className="relative">
          <div 
            className="flex space-x-8"
            style={{
              animation: 'logoScroll 30s linear infinite'
            }}
          >
            {[...logoData, ...logoData].map((company, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-600 font-bold text-sm">{company.logo}</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{company.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes logoScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}