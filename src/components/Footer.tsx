import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <button 
              onClick={() => handleNavigation("home")}
              className="flex items-center space-x-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            >
              <ImageWithFallback
                src="https://ik.imagekit.io/vpofwrsgy/img/SB.LOGO.png?updatedAt=1758472029659"
                alt="Super Bright Logo"
                className=" w-12 h-12 rounded-full object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">
                  Super <span className="text-blue-400">Bright</span>
                </h3>
                <p className="text-sm text-gray-400">Electroplating Innovation, Every Layer</p>
              </div>
            </button>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Super bright electroplating solutions with 25 years of industry experience. 
              We deliver precision finishes, consistent performance, and scalable solutions 
              for demanding industries.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("home")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("about")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  About SB
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("contact")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Gold Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Silver Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Copper Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Nickel Plating
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("services")} 
                  className="text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:text-blue-400"
                >
                  Zinc Plating
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 Super Bright Electroplating. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}