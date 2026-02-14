import { Metadata } from "next";
import { ORG_NAME } from "@/lib/constants";
import MissionVision from "@/components/about/MissionVision";
import Timeline from "@/components/about/Timeline";
import TeamSection from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <a href="/" className="hover:text-saffron transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-saffron">About Us</span>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              {ORG_NAME} was founded in 1993 in Barshi, Solapur District,
              Maharashtra, by a group of visionary social workers who believed
              that education is the most powerful tool for transforming lives.
              Starting with humble beginnings, the organization set out to
              address the educational needs of underprivileged and differently-abled
              children in the rural areas of Solapur district.
            </p>
            <p>
              In the early years, the organization established its first special
              schools in Agalgaon &mdash; the Matimand Residential School for
              intellectually challenged children and the Mukobadhir Residential
              School for hearing-impaired students. These institutions filled a
              critical gap in the region, providing specialized care and
              education that was previously unavailable to these communities.
            </p>
            <p>
              Over the following decades, the organization expanded its reach
              significantly. The launch of Swami Samarth English Medium School in
              Barshi marked a turning point, growing to become the flagship
              center with over 750 students. Additional centers were established
              including hostels for backward class students, a child care center
              (Balkashram), and a nursing school to train healthcare
              professionals.
            </p>
            <p>
              Today, {ORG_NAME} operates 10 educational centers across Barshi
              and Agalgaon, serving more than 1,825 students with a dedicated
              team of 111 staff members. From special education to English medium
              schooling, from child welfare to professional nursing training, our
              organization continues to grow and adapt to meet the evolving needs
              of our community.
            </p>
          </div>
        </div>
      </section>

      <MissionVision />
      <Timeline />
      <TeamSection />
    </>
  );
}
