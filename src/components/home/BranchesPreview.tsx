import Link from "next/link";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { branches } from "@/data/branches";

export default function BranchesPreview() {
  const featured = branches.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Educational Centers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We operate 10 educational centers across Barshi and Agalgaon,
            providing diverse learning opportunities for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block bg-saffron/10 text-saffron text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {branch.type}
              </span>
              <h3 className="text-lg font-bold text-navy mb-2">
                {branch.name}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <MapPin size={14} />
                <span>{branch.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Users size={14} />
                <span>{branch.students} Students</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {branch.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/branches"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Centers <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
