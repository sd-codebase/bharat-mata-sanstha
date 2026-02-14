import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              About Our Organization
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Bharat Mata Bahuuddeshiy Sanstha was founded in 1993 in Barshi,
              Solapur District, Maharashtra, with a vision to uplift communities
              through education and social welfare. What began as a small
              initiative has grown into a comprehensive educational network
              serving over 1,825 students across 10 centers.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From special schools for differently-abled children to English
              medium schools, hostels, child care centers, and nursing education,
              our organization addresses diverse educational needs of the
              community with dedication and compassion.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-saffron font-semibold hover:text-saffron-dark transition-colors"
            >
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/hero-school.jpeg"
              alt="School building"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
