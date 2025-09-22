import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source
            src="https://ik.imagekit.io/vpofwrsgy/img/why%20choose%20us%20video.mp4?updatedAt=1758472047166"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHZpZGVvfGVufDF8fHx8MTc1ODQxODM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial manufacturing facility"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex items-center min-h-screen">
        <div className="max-w-4xl">
          <div className="text-white mb-8">
            <div className="mb-6">
              <span className="inline-block bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
                25 Years of Excellence Since 1998
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Super <span className="text-blue-400">Bright</span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-4">Group of Companies</p>
            <p className="text-2xl sm:text-3xl lg:text-4xl mb-6 leading-tight">
              Electroplating Innovation, <span className="text-blue-300">Every Layer</span>
            </p>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Precision finishes, consistent performance, and scalable solutions for demanding industries.
              From gold to zinc plating, we deliver excellence with 99.99% on-time delivery.
            </p>
          </div>

         { /*<div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Get a Quote Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm">
              View Our Services
            </Button>
          </div>*/}

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-300 mb-1">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-300 mb-1">9+</div>
              <div className="text-sm text-gray-300">Plating Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-300 mb-1">99.99%</div>
              <div className="text-sm text-gray-300">On-Time Delivery</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">AR</span>
              </div>
              <div className="text-white">
                <h4 className="font-semibold mb-1">Anita Rao</h4>
                <p className="text-sm text-blue-200 mb-2">Operations Head, NovoTech Components</p>
                <p className="text-sm text-gray-300 italic">
                  "Super Bright elevated our product reliability. Their turnaround time and finish quality are unmatched in the industry."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}