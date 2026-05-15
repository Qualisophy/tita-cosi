// src/components/react/ui/Cards.tsx
import React from "react";
import DynamicLink from "./DynamicLink";

// 1. Tarjeta de Promoción/Cupón
export function PromoCard({
  title,
  coupon,
  description,
  bgImage,
  badgeImage,
  onActivate,
}: any) {
  return (
    <div className="bg-titacosi-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="p-6 bg-black bg-opacity-40 h-full flex flex-col justify-end">
          <span className="text-white text-xs font-bold uppercase tracking-widest">
            Oferta Exclusiva
          </span>
          <h3 className="text-white text-2xl font-black mt-1 font-serif">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6 relative">
        <div
          className="absolute -top-8 left-6 w-16 h-16 rounded-full border-4 border-titacosi-surface bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url(${badgeImage})` }}
        />
        <div className="mt-8">
          <p className="text-xs uppercase font-bold text-titacosi-primary opacity-60">
            Cupón de Descuento
          </p>
          <p className="text-2xl font-black text-titacosi-accent mt-1">
            {coupon}
          </p>
          <p className="text-sm mt-4 text-titacosi-primary opacity-80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <button
        onClick={onActivate}
        className="w-full py-4 bg-titacosi-accent text-white font-bold hover:bg-opacity-95 transition-all"
      >
        Activar Cupón
      </button>
    </div>
  );
}

// 2. Tarjeta de Característica/Ingrediente
export function FeatureCard({
  title,
  description,
  linkText,
  linkHref,
  icon,
}: any) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm flex flex-col items-center text-center border border-titacosi-surface">
      <div className="w-16 h-16 bg-titacosi-base rounded-full flex items-center justify-center mb-6 text-titacosi-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold italic mb-4 font-serif">{title}</h3>
      <p className="text-sm text-titacosi-primary opacity-70 leading-relaxed mb-6">
        {description}
      </p>
      <DynamicLink variant="accent" href={linkHref}>
        {linkText}
      </DynamicLink>
    </div>
  );
}

// 3. Tarjeta de Reseña (Testimonial)
export function ReviewCard({
  name,
  timeAgo,
  rating,
  text,
  abstractAvatar,
}: any) {
  return (
    <div className="bg-titacosi-surface p-8 rounded-xl shadow-sm border border-transparent hover:border-titacosi-accent transition-all min-w-[320px] md:min-w-[400px] snap-center flex-shrink-0">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          {/* Avatar conceptual (textura/ingrediente) */}
          <div
            className="w-12 h-12 rounded-full bg-cover shadow-sm"
            style={{ backgroundImage: `url(${abstractAvatar})` }}
          />
          <div className="ml-4">
            <h4 className="font-bold leading-none font-serif">{name}</h4>
            <span className="text-xs text-titacosi-primary opacity-50 italic">
              {timeAgo}
            </span>
          </div>
        </div>
        <div className="flex text-titacosi-accent items-center">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span className="ml-1 font-bold">{rating}</span>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-titacosi-primary opacity-80 italic">
        "{text}"
      </p>
    </div>
  );
}
