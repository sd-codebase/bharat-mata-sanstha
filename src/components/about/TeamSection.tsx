import { teamMembers } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated individuals who guide our organization with vision,
            commitment, and a passion for education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navy">{member.name}</h3>
                <p className="text-saffron text-sm font-medium">
                  {member.designation}
                </p>
                <p className="text-gray-400 text-xs">
                  ({member.designationMarathi})
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
