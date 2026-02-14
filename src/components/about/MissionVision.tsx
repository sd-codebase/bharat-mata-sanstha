import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-saffron/10 p-3 rounded-full">
                <Target className="text-saffron" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, inclusive, and quality education to every
              child regardless of their background, ability, or economic status.
              We are committed to creating an environment where students can
              develop their full potential through comprehensive educational
              programs, vocational training, and holistic care.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-navy/10 p-3 rounded-full">
                <Eye className="text-navy" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-navy">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a leading educational organization in Maharashtra that
              transforms rural communities through the power of education. We
              envision a society where every individual has equal access to
              learning opportunities and the skills needed to lead a dignified,
              self-reliant life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
