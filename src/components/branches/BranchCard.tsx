import { MapPin, Users } from "lucide-react";
import { Branch } from "@/data/branches";

export default function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <span className="inline-block bg-saffron/10 text-saffron text-xs font-semibold px-3 py-1 rounded-full">
          {branch.type}
        </span>
        <span className="text-navy font-bold text-sm">#{branch.id}</span>
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{branch.name}</h3>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
        <MapPin size={14} className="shrink-0" />
        <span>{branch.location}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
        <Users size={14} className="shrink-0" />
        <span>{branch.students} Students</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {branch.description}
      </p>
    </div>
  );
}
