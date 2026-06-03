import React, { useState, useEffect, useRef } from "react";
import type { KeyboardEvent, TouchEvent } from "react";

import { customerReviews } from "../../../data/review";
import type { Review } from "../../../data/review";
import { useTranslations } from "../../../i18n/utils";
import type { ui } from "../../../i18n/ui";

interface ReviewCarouselProps {
  currentLang: keyof typeof ui;
  autoplaySpeed?: number;
}

export default function ReviewCarousel({
  currentLang,
  autoplaySpeed = 6000,
}: ReviewCarouselProps) {
  const t = useTranslations(currentLang);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = customerReviews.length;

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(nextSlide, autoplaySpeed);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, autoplaySpeed]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) nextSlide();
    else if (diffX < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getTagTranslation = (tag: string) => {
    switch (tag) {
      case "celiac":
        return t("home.resenas.tag.celiac" as any);
      case "vegetarian":
        return t("home.resenas.tag.vegetarian" as any);
      default:
        return t("home.resenas.tag.general" as any);
    }
  };

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 py-16"
      aria-labelledby="reviews-title"
    >
      <h2
        id="reviews-title"
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
      >
        {t("home.resenas.titulo" as any)}
      </h2>

      <div
        className="relative bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-12 outline-none focus-visible:ring-2 focus-visible:ring-amber-800 touch-pan-y select-none"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden relative min-h-100 md:min-h-75 flex items-center">
          {customerReviews.map((review: Review, index: number) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={review.id}
                className={`w-full transition-opacity duration-500 ease-in-out absolute inset-0 flex flex-col md:flex-row items-center gap-8 ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                {review.images && review.images.length > 0 && (
                  <div className="w-full md:w-1/3 flex justify-center gap-2">
                    {review.images.slice(0, 2).map((img: string, i: number) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Plato reseñado por ${review.name}`}
                        className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-md border border-gray-100"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                <div
                  className={`flex flex-col items-center md:items-start text-center md:text-left ${review.images?.length ? "w-full md:w-2/3" : "w-full"}`}
                >
                  <div className="flex space-x-1 mb-3">
                    {[...Array(review.rating)].map((_: unknown, i: number) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Modificación clave para usar el i18n */}
                  <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                    "{t(review.textKey as any)}"
                  </p>
                  <div className="flex flex-col items-center md:items-start">
                    <span className="font-semibold text-gray-900">
                      {review.name}
                    </span>
                    <span className="text-xs uppercase tracking-wider bg-gray-100 text-gray-600 px-3 py-1 rounded-full mt-2 font-medium">
                      {getTagTranslation(review.tag)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-50 text-gray-800 p-3 rounded-full z-20"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-50 text-gray-800 p-3 rounded-full z-20"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex justify-center space-x-2 mt-8 absolute bottom-4 left-1/2 -translate-x-1/2">
          {customerReviews.map((_: unknown, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-amber-800" : "w-2.5 bg-gray-300"}`}
              aria-label={`Ir a reseña ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
