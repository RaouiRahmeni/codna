"use client";
import { useState, useEffect, useRef } from "react";

interface Service {
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
  color: "blue" | "purple" | "green" | "yellow";
}

const services: Service[] = [
  {
    title: "Custom Web Applications",
    description:
      "We build tailored web platforms that streamline operations, reduce manual work, and scale seamlessly with your business.",
    outcomes: [
      "Operational efficiency",
      "Faster workflows",
      "Long-term scalability",
    ],
    icon: "⚡",
    color: "blue",
  },
  {
    title: "Business Websites That Convert",
    description:
      "Not just nice design. We create fast, SEO-ready websites built to generate leads and close deals.",
    outcomes: [
      "Increased visibility",
      "More qualified leads",
      "Higher conversion rates",
    ],
    icon: "🎯",
    color: "purple",
  },
  {
    title: "Dashboards & Internal Tools",
    description:
      "Custom admin panels, analytics dashboards, and internal systems built specifically for how your team works.",
    outcomes: [
      "Better decision-making",
      "Real-time insights",
      "Reduced operational friction",
    ],
    icon: "📊",
    color: "green",
  },
  {
    title: "Performance & Optimization",
    description:
      "We optimize existing applications for speed, stability, and long-term maintainability using modern best practices.",
    outcomes: [
      "Lower bounce rates",
      "Improved user experience",
      "Future-proof systems",
    ],
    icon: "🚀",
    color: "yellow",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    glow: "bg-blue-400/20",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    glow: "bg-purple-400/20",
  },
  green: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-600",
    glow: "bg-green-400/20",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-600",
    glow: "bg-yellow-400/20",
  },
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  const colors = colorClasses[service.color];

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left Side */}
        <div className="relative">
          {/* Animated Icon */}
          <div
            className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${colors.border} border-2`}
          >
            <span className="text-3xl transition-transform duration-500 group-hover:scale-125">
              {service.icon}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            {service.title}
          </h3>

          <p className="mt-4 text-lg text-gray-600 max-w-xl leading-relaxed">
            {service.description}
          </p>

          {/* Decorative Line */}
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-black to-gray-300 rounded-full transition-all duration-500 group-hover:w-32" />
        </div>

        {/* Right Side - Outcomes */}
        <div className="relative">
          <div
            className={`border-l-2 ${colors.border} pl-8 transition-all duration-500 group-hover:border-l-4`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                Business Outcomes
              </span>
              <div
                className={`w-2 h-2 rounded-full ${colors.text} animate-pulse`}
              />
            </div>

            <ul className="space-y-4">
              {service.outcomes.map((outcome, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <span
                    className={`inline-block w-6 h-6 ${
                      colors.bg
                    } rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 transition-transform duration-300 ${
                      isHovered ? "scale-110 rotate-12" : ""
                    }`}
                  >
                    <span className={`text-sm ${colors.text} font-bold`}>
                      ✓
                    </span>
                  </span>
                  <span className="text-black font-medium leading-relaxed">
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Glow Effect on Hover */}
          <div
            className={`absolute -inset-4 ${colors.glow} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
          />
        </div>
      </div>

      {/* Separator Line */}
      {index < services.length - 1 && (
        <div className="mt-24 mb-24 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <div
              className={`w-3 h-3 ${colors.bg} border-2 ${colors.border} rounded-full transition-all duration-500 group-hover:scale-150`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white border-t border-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-40 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`max-w-3xl mb-24 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">
              What We Deliver
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
            Services Built for{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Business Outcomes
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/50 -z-10" />
            </span>
          </h2>

          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Every engagement is designed to solve real problems and deliver
            measurable impact.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-32 text-center transition-all duration-1000 delay-500 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-600 mb-6">
            Ready to transform your business?
          </p>
          <button className="group px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <span className="relative z-10">
              Let&apos;s Talk About Your Project
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
