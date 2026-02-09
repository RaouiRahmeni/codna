"use client";
import { useState } from "react";
import Image from "next/image";

const projects: Project[] = [
  {
    title: "E-Commerce Platform Redesign",
    client: "RetailCo",
    category: "Web Application",
    description:
      "Rebuilt their legacy platform with Next.js, reducing page load times by 60% and increasing conversions by 35%.",
    metrics: [
      { label: "Speed Increase", value: "60%" },
      { label: "Conversion Lift", value: "35%" },
      { label: "Timeline", value: "12 weeks" },
    ],
    image: "/project-1.jpg", // Replace with your image path
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    color: "blue",
  },
  {
    title: "Healthcare Dashboard",
    client: "MedTech Solutions",
    category: "Internal Tools",
    description:
      "Custom admin panel for managing patient data, appointments, and analytics with real-time updates.",
    metrics: [
      { label: "Time Saved", value: "40hrs/week" },
      { label: "User Satisfaction", value: "98%" },
      { label: "Timeline", value: "8 weeks" },
    ],
    image: "/project-2.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    color: "purple",
  },
  {
    title: "Real Estate Marketplace",
    client: "PropFinder",
    category: "Business Website",
    description:
      "SEO-optimized property listing platform with advanced search, filters, and map integration.",
    metrics: [
      { label: "Organic Traffic", value: "+180%" },
      { label: "Lead Generation", value: "+250%" },
      { label: "Timeline", value: "10 weeks" },
    ],
    image: "/project-3.jpg",
    tags: ["Next.js", "Tailwind", "Google Maps", "Sanity CMS"],
    color: "green",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-600",
    border: "border-blue-200",
    glow: "shadow-blue-500/20",
  },
  purple: {
    bg: "bg-purple-500",
    text: "text-purple-600",
    border: "border-purple-200",
    glow: "shadow-purple-500/20",
  },
  green: {
    bg: "bg-green-500",
    text: "text-green-600",
    border: "border-green-200",
    glow: "shadow-green-500/20",
  },
};

interface Project {
  title: string;
  client: string;
  category: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  image: string;
  tags: string[];
  color: "blue" | "purple" | "green";
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const colors = colorClasses[project.color];

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {/* Image Section */}
        <div className="relative h-64 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
          {/* Placeholder gradient - replace with actual Image component when you have images */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${
              project.color === "blue"
                ? "from-blue-400/20 to-blue-600/20"
                : project.color === "purple"
                ? "from-purple-400/20 to-purple-600/20"
                : "from-green-400/20 to-green-600/20"
            } transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Category Badge */}
          <div className="absolute top-6 left-6">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700">
              {project.category}
            </span>
          </div>

          {/* Overlay on Hover */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors">
              View Case Study
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Client & Title */}
          <div className="mb-4">
            <p className={`text-sm font-semibold ${colors.text} mb-2`}>
              {project.client}
            </p>
            <h3 className="text-2xl font-bold text-black leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-100">
            {project.metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <p className={`text-2xl font-bold ${colors.text}`}>
                  {metric.value}
                </p>
                <p className="text-xs text-gray-500 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Accent Line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${
            colors.bg
          } transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-20 bg-linear-to-b from-white to-black overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
      </div>
      {/* Floating Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_55%,transparent_85%)]" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">Our Work</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-6">
            Projects That{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Deliver Results
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-300/50 -z-10" />
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Real businesses. Real challenges. Real impact. Here&apos;s how
            we&apos;ve helped companies scale with Next.js.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 mb-6">
            Want to see more detailed case studies?
          </p>
          <button className="group px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
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
      `}</style>
    </section>
  );
}
