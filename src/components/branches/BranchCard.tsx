"use client";

import { useState } from "react";
import {
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
} from "lucide-react";
import { Branch } from "@/data/branches";

export default function BranchCard({ branch }: { branch: Branch }) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails =
    branch.detailedDescription || branch.facilities || branch.contact;

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

      {hasDetails && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1 text-saffron font-semibold text-sm hover:text-saffron-dark transition-colors"
          >
            {expanded ? "Show Less" : "Read More"}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expanded && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
              {branch.detailedDescription && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {branch.detailedDescription}
                </p>
              )}

              {(branch.established || branch.medium || branch.grades) && (
                <div className="flex flex-wrap gap-3">
                  {branch.established && (
                    <span className="bg-navy/5 text-navy text-xs font-medium px-3 py-1 rounded-full">
                      Est. {branch.established}
                    </span>
                  )}
                  {branch.medium && (
                    <span className="bg-navy/5 text-navy text-xs font-medium px-3 py-1 rounded-full">
                      Medium: {branch.medium}
                    </span>
                  )}
                  {branch.grades && (
                    <span className="bg-navy/5 text-navy text-xs font-medium px-3 py-1 rounded-full">
                      Grades: {branch.grades}
                    </span>
                  )}
                </div>
              )}

              {branch.facilities && branch.facilities.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-navy mb-2">
                    Facilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {branch.facilities.map((facility) => (
                      <li
                        key={facility}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-saffron mt-1">&#8226;</span>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {branch.contact && (
                <div className="flex flex-wrap gap-4">
                  {branch.contact.phone && (
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Phone size={14} className="text-saffron shrink-0" />
                      <span>{branch.contact.phone}</span>
                    </div>
                  )}
                  {branch.contact.email && (
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Mail size={14} className="text-saffron shrink-0" />
                      <span>{branch.contact.email}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
