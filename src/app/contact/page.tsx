"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
      {/* Page Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <a href="/" className="hover:text-saffron transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-saffron">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We&apos;d love to hear from you. Whether you have questions
                about our programs, want to visit our centers, or wish to
                support our mission, please reach out.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                    <MapPin className="text-saffron" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Address</h3>
                    <p className="text-gray-600 text-sm">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                    <Phone className="text-saffron" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      {CONTACT_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                    <Mail className="text-saffron" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-saffron/10 p-3 rounded-full shrink-0">
                    <Clock className="text-saffron" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Office Hours</h3>
                    <p className="text-gray-600 text-sm">
                      Monday &ndash; Saturday: 9:00 AM &ndash; 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-saffron hover:bg-saffron-dark text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
