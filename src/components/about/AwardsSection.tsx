import { Award, awards } from "@/data/awards";
import { Trophy } from "lucide-react";

function AwardCard({ award }: { award: Award }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-saffron">
      <div className="flex items-start gap-4">
        <div className="bg-saffron/10 p-3 rounded-full shrink-0">
          <Trophy className="text-saffron" size={24} />
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block bg-saffron text-white text-sm font-bold px-3 py-1 rounded-full">
              {award.year}
            </span>
          </div>
          <h3 className="text-xl font-bold text-navy mb-1">{award.name}</h3>
          {award.nameMarathi && (
            <p className="text-saffron text-sm font-medium mb-2">
              {award.nameMarathi}
            </p>
          )}
          <p className="text-gray-600 text-sm mb-3">{award.description}</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            {award.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AwardsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">
          Awards & Recognition
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our work has been recognized by the Government of Maharashtra for
          outstanding contributions to social welfare and education.
        </p>
        <div className="space-y-6">
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
      </div>
    </section>
  );
}
