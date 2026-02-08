"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/codna.png";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Floating Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Value Proposition */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Available for new projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-black">
            <span
              className="inline-block animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              We Build
            </span>
            <br />
            <span
              className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              style={{ animationDelay: "0.2s" }}
            >
              Web Systems
            </span>
            <br />
            <span
              className="inline-block animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              That Scale
            </span>
            <br />
            <span
              className="inline-block relative animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              Businesses
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/50 -z-10 animate-expand-width" />
            </span>
          </h1>

          <p
            className="mt-8 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            CODNA designs and develops{" "}
            <span className="font-semibold text-black">
              high-performance web applications
            </span>{" "}
            using Next.js—focused on speed, reliability, and measurable business
            outcomes.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link
              href="/contact"
              className="group px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-300" />
            </Link>

            <Link
              href="/work"
              className="group px-8 py-4 border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Our Work
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-12 flex flex-wrap gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-black">20+</span>
              <span className="text-sm text-gray-500">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-black">91%</span>
              <span className="text-sm text-gray-500">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-black">4x</span>
              <span className="text-sm text-gray-500">
                Avg. Performance Boost
              </span>
            </div>
          </div>
        </div>

        {/* Right: Brand Visual */}
        <div
          className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse-slow" />

            {/* Logo Container */}
            <div className="relative animate-float">
              <Image
                src={Logo}
                alt="CODNA Logo"
                width={420}
                height={420}
                priority
                className="drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
              />

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full animate-orbit" />
                <div
                  className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full animate-orbit-reverse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-orbit"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black/40 rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes expand-width {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(250px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(250px) rotate(-360deg);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: rotate(0deg) translateX(250px) rotate(0deg);
          }
          to {
            transform: rotate(-360deg) translateX(250px) rotate(360deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(16px);
            opacity: 0;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-expand-width {
          animation: expand-width 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 10s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 12s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
