export default function Contact() {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Let’s Build Something That Works.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Tell us about your project. We’ll respond with clarity, not sales
            noise.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div>
            <label className="block text-sm text-gray-500 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Company <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Project summary
            </label>
            <textarea
              rows={4}
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black resize-none"
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="px-10 py-4 bg-black text-white font-medium rounded-lg hover:opacity-90 transition"
            >
              Get Started
            </button>

            <p className="mt-4 text-sm text-gray-500">
              No obligation. No spam. Just results-focused conversation.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
