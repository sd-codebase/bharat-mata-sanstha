import { stats } from "@/data/stats";

export default function StatsSection() {
  return (
    <section className="bg-saffron py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.noFormat ? stat.value : stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <div className="text-white/90 text-lg mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
