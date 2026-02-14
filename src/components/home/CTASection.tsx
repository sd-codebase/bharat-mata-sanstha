import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Our Mission
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Together we can make a difference in the lives of thousands of
          students. Get in touch to learn how you can support our educational
          initiatives.
        </p>
        <Link
          href="/contact"
          className="bg-saffron hover:bg-saffron-dark text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
