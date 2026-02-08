"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({ name: "", company: "", email: "", project: "" });
    setIsSubmitting(false);

    alert("Thanks! We'll be in touch soon.");
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left - Header */}
          <div>
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9] mb-8">
              Ready to
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                start building?
              </span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              Share your vision. We&apos;ll handle the execution.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us</p>
                  <a
                    href="mailto:hello@codna.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    hello@codna.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Response time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Company <span className="text-gray-600">(optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your Company Inc."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="What problem are you trying to solve?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-gray-500 text-center">
                No spam. No sales calls. Just honest conversation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
