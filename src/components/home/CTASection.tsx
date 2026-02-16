import Link from "next/link";
import Image from "next/image";
import { DONATION_UPI_ID } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Mission CTA */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
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

          {/* Right: UPI Donation */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Support Us with a Donation
            </h3>
            <div className="bg-white rounded-xl p-4 shadow-lg">
              <Image
                src="/images/upi-qr.jpeg"
                alt="Scan to donate via UPI"
                width={240}
                height={240}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-300 text-sm mt-3">
              UPI ID:{" "}
              <span className="text-white font-semibold">
                {DONATION_UPI_ID}
              </span>
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Pay via Paytm, GPay, PhonePe, BHIM, or any UPI app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
