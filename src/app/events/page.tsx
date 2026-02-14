import { Metadata } from "next";
import { events } from "@/data/events";
import EventCard from "@/components/events/EventCard";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      {/* Page Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events & Activities
          </h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <a href="/" className="hover:text-saffron transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-saffron">Events</span>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
