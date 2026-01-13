import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/codna.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Value Proposition */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
            We Build Web Systems
            <br />
            That Scale Businesses.
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            CODNA designs and develops high-performance web applications using
            Next.js—focused on speed, reliability, and measurable business
            outcomes.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-white font-medium rounded-lg hover:opacity-90 transition"
            >
              Start Your Project
            </Link>

            <Link
              href="/work"
              className="px-8 py-4 border border-black text-black font-medium rounded-lg hover:bg-black hover:text-white transition"
            >
              View Our Work
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Built for modern businesses. Engineered for growth.
          </p>
        </div>

        {/* Right: Brand Visual */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={Logo}
            alt="CODNA Logo"
            width={420}
            height={420}
            priority
          />
        </div>
      </div>
    </section>
  );
}
