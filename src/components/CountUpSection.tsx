import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

function CountUp({ end, duration, suffix = "", prefix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
    </div>
  );
}

const stats = [
  {
    number: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Delivering quality since 1998"
  },
  {
    number: 99.99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Reliable logistics network"
  },
  {
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Trusted partnerships"
  },
  {
    number: 1000,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful deliveries"
  }
];

export function CountUpSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-800 relative">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Track Record</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and quality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp 
                end={stat.number} 
                duration={2.5}
                suffix={stat.suffix}
              />
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-blue-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}