const milestones = [
  {
    year: "1993",
    title: "Foundation",
    description:
      "Bharatmata Bahuuddeshiya Sanstha was established in Barshi with a vision to serve the community through education.",
  },
  {
    year: "1995",
    title: "First Special School",
    description:
      "Opened the Matimand Nivasi Shala in Agalgaon for intellectually challenged children, our first step toward inclusive education.",
  },
  {
    year: "2000",
    title: "Expansion to Barshi",
    description:
      "Launched Swami Samarth English Medium School in Barshi, which would become our flagship center with 750+ students.",
  },
  {
    year: "2005",
    title: "Hostel Facilities",
    description:
      "Established backward class hostels in Agalgaon and Barshi, providing residential support for underprivileged students.",
  },
  {
    year: "2010",
    title: "Child Care & Nursing",
    description:
      "Started the Balkashram Child Care Center and Nursing School, expanding our services to healthcare education and child welfare.",
  },
  {
    year: "2019",
    title: "Shahu-Phule-Ambedkar Award",
    description:
      "Honored by the Department of Social Justice & Special Assistance, Government of Maharashtra, at an award ceremony in Nashik for outstanding social service work.",
  },
  {
    year: "2020",
    title: "Dalit Mitra Gaurav Puraskar",
    description:
      "Our Secretary was honored with the Dalit Mitra Gaurav Puraskar by the Government of Maharashtra for outstanding contributions to the upliftment and welfare of underprivileged communities.",
  },
  {
    year: "2023",
    title: "10 Centers & Growing",
    description:
      "Reached 10 operational centers serving over 1,825 students with 111 dedicated staff members across Barshi and Agalgaon.",
  },
];

export default function Timeline() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          Our Journey
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-saffron/30" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-saffron rounded-full border-4 border-white shadow z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="inline-block bg-saffron text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
