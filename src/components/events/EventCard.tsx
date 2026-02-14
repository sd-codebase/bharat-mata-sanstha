import { Calendar } from "lucide-react";
import { Event } from "@/data/events";

const categoryColors: Record<string, string> = {
  Environment: "bg-green-100 text-green-700",
  Sports: "bg-blue-100 text-blue-700",
  Health: "bg-red-100 text-red-700",
  Cultural: "bg-purple-100 text-purple-700",
  Education: "bg-saffron/10 text-saffron",
};

export default function EventCard({ event }: { event: Event }) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            categoryColors[event.category] || "bg-gray-100 text-gray-700"
          }`}
        >
          {event.category}
        </span>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar size={14} />
          <span>{formattedDate}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{event.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {event.description}
      </p>
    </div>
  );
}
