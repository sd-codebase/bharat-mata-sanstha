"use client";

import { useState } from "react";
import {
  MapPin,
  Users,
  Phone,
  Mail,
  BookOpen,
  GraduationCap,
  Award,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Branch } from "@/data/branches";

function ImageLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: { src: string; alt: string; caption?: string }[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const img = images[index];

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-saffron z-50"
      >
        <X size={32} />
      </button>
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((index - 1 + images.length) % images.length);
            }}
            className="absolute left-4 text-white hover:text-saffron z-50"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIndex((index + 1) % images.length);
            }}
            className="absolute right-4 text-white hover:text-saffron z-50"
          >
            <ChevronRight size={40} />
          </button>
        </>
      )}
      <div
        className="max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[80vh] max-w-full object-contain rounded-lg"
        />
        {img.caption && (
          <p className="text-white/80 text-sm mt-3 text-center max-w-2xl">
            {img.caption}
          </p>
        )}
        <p className="text-white/50 text-xs mt-1">
          {index + 1} / {images.length}
        </p>
      </div>
    </div>
  );
}

export default function BranchDetailContent({ branch }: { branch: Branch }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      {lightboxIndex !== null && branch.gallery && (
        <ImageLightbox
          images={branch.gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About Section */}
            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {branch.description}
              </p>
              {branch.detailedDescription && (
                <p className="text-gray-600 leading-relaxed">
                  {branch.detailedDescription}
                </p>
              )}
            </section>

            {/* Achievements */}
            {branch.achievements && branch.achievements.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                  <Award className="text-saffron" size={24} />
                  Achievements
                </h2>
                <div className="space-y-4">
                  {branch.achievements.map((achievement) => (
                    <div
                      key={achievement.title}
                      className="bg-gradient-to-r from-saffron/5 to-transparent border-l-4 border-saffron rounded-r-lg p-5"
                    >
                      <h3 className="font-bold text-navy mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Activities */}
            {branch.activities && branch.activities.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                  <BookOpen className="text-saffron" size={24} />
                  Activities & Programs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {branch.activities.map((activity) => (
                    <div
                      key={activity}
                      className="flex items-start gap-3 bg-gray-50 rounded-lg p-3"
                    >
                      <CheckCircle
                        size={16}
                        className="text-saffron shrink-0 mt-0.5"
                      />
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Photo Gallery */}
            {branch.gallery && branch.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {branch.gallery.map((image, idx) => (
                    <button
                      key={image.src}
                      onClick={() => setLightboxIndex(idx)}
                      className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3]"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {image.caption && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                          <p className="text-white text-xs leading-snug">
                            {image.caption}
                          </p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-bold text-navy mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-saffron shrink-0 mt-0.5"
                  />
                  {branch.mapUrl ? (
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-sm hover:text-saffron transition-colors inline-flex items-start gap-1"
                    >
                      {branch.location}
                      <ExternalLink size={12} className="shrink-0 mt-0.5" />
                    </a>
                  ) : (
                    <span className="text-gray-600 text-sm">
                      {branch.location}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-saffron shrink-0" />
                  <span className="text-gray-600 text-sm">
                    {branch.students} Students
                  </span>
                </div>
                {branch.medium && (
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-saffron shrink-0" />
                    <span className="text-gray-600 text-sm">
                      Medium: {branch.medium}
                    </span>
                  </div>
                )}
                {branch.grades && (
                  <div className="flex items-center gap-3">
                    <GraduationCap
                      size={18}
                      className="text-saffron shrink-0"
                    />
                    <span className="text-gray-600 text-sm">
                      Grades: {branch.grades}
                    </span>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              {branch.contact && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-navy mb-3">
                    Contact
                  </h4>
                  {branch.contact.phone && (
                    <div className="flex items-start gap-3 mb-2">
                      <Phone
                        size={16}
                        className="text-saffron shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">
                        {branch.contact.phone}
                      </span>
                    </div>
                  )}
                  {branch.contact.email && (
                    <div className="flex items-start gap-3">
                      <Mail
                        size={16}
                        className="text-saffron shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">
                        {branch.contact.email}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Facilities */}
              {branch.facilities && branch.facilities.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-navy mb-3">
                    Facilities
                  </h4>
                  <ul className="space-y-2">
                    {branch.facilities.map((facility) => (
                      <li
                        key={facility}
                        className="flex items-start gap-2 text-gray-600 text-sm"
                      >
                        <span className="text-saffron mt-0.5">&#8226;</span>
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        {branch.mapUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Location</h2>
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.name + ", " + branch.location)}&z=16&output=embed`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branch.name} location`}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
