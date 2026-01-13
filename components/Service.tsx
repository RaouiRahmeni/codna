const services = [
  {
    title: "Custom Web Applications",
    description:
      "We build tailored web platforms that streamline operations, reduce manual work, and scale seamlessly with your business.",
    outcomes: [
      "Operational efficiency",
      "Faster workflows",
      "Long-term scalability",
    ],
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
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Services Built for Business Outcomes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Every engagement is designed to solve real problems and deliver
            measurable impact.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
            >
              {/* Left */}
              <div>
                <h3 className="text-2xl font-semibold text-black">
                  {service.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Right */}
              <div className="border-l border-gray-200 pl-8">
                <p className="text-sm uppercase tracking-wider text-gray-500">
                  Business Outcomes
                </p>
                <ul className="mt-6 space-y-4 text-black">
                  {service.outcomes.map((outcome, i) => (
                    <li key={i}>• {outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
