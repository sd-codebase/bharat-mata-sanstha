"use client";

import { useState } from "react";
import { awards } from "@/data/awards";
import { Trophy, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { AwardImage } from "@/data/awards";

function AwardLightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: AwardImage[];
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
        className="max-w-4xl max-h-[90vh] flex flex-col items-center"
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
        {images.length > 1 && (
          <p className="text-white/50 text-xs mt-1">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default function AwardsSection() {
  const [lightbox, setLightbox] = useState<{
    images: AwardImage[];
    index: number;
  } | null>(null);

  return (
    <>
      {lightbox && (
        <AwardLightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-saffron/10 text-saffron font-semibold text-sm px-4 py-2 rounded-full mb-4">
              <Trophy size={16} />
              Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Awards & Recognition
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our work has been recognized by the Government of Maharashtra for
              outstanding contributions to social welfare and education.
            </p>
          </div>

          <div className="space-y-16">
            {awards.map((award, awardIndex) => (
              <div
                key={award.id}
                className={`flex flex-col ${awardIndex % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                {/* Photos */}
                <div className="w-full lg:w-1/2">
                  {award.images.length === 1 ? (
                    <button
                      onClick={() =>
                        setLightbox({ images: award.images, index: 0 })
                      }
                      className="group w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <img
                        src={award.images[0].src}
                        alt={award.images[0].alt}
                        className="w-full h-72 md:h-80 object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {award.images.map((image, imgIdx) => (
                        <button
                          key={image.src}
                          onClick={() =>
                            setLightbox({
                              images: award.images,
                              index: imgIdx,
                            })
                          }
                          className={`group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                            imgIdx === 0 && award.images.length === 3
                              ? "col-span-2"
                              : ""
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={`w-full object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300 ${
                              imgIdx === 0 && award.images.length === 3
                                ? "h-56 md:h-64"
                                : "h-44 md:h-52"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <span className="inline-block bg-saffron text-white text-lg font-bold px-4 py-1.5 rounded-full mb-4">
                    {award.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                    {award.name}
                  </h3>
                  {award.nameMarathi && (
                    <p className="text-saffron font-medium text-lg mb-4">
                      {award.nameMarathi}
                    </p>
                  )}
                  <p className="text-gray-700 font-medium mb-4">
                    {award.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {award.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
