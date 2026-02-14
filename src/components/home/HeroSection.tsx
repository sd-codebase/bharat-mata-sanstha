import Link from "next/link";
import { ORG_NAME, ORG_TAGLINE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-school.jpeg')" }}
      >
        <div className="absolute inset-0 bg-navy-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {ORG_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">{ORG_TAGLINE}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/about"
            className="bg-saffron hover:bg-saffron-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
