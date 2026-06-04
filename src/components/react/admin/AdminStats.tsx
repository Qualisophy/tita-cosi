// src/components/react/admin/AdminStats.tsx
import React from "react";
import type { Reserva } from "./admin.types";

interface AdminStatsProps {
  reservasFiltradas: Reserva[];
  modoVista: "dia" | "todas";
}

export default function AdminStats({
  reservasFiltradas,
  modoVista,
}: AdminStatsProps) {
  const confirmadas = reservasFiltradas.filter(
    (r) => r.estado.toLowerCase() === "confirmada",
  ).length;
  const canceladas = reservasFiltradas.filter(
    (r) => r.estado.toLowerCase() === "cancelada",
  ).length;
  const cubiertosTotales = reservasFiltradas.reduce(
    (acc, curr) => acc + curr.comensales,
    0,
  );

  return (
    <div className="w-full xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
      <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm flex flex-col justify-between">
        <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-2">
          Reservas {modoVista === "dia" ? "del día" : "totales"}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
          {reservasFiltradas.length}
        </h3>
        <div className="flex items-center gap-1.5 text-titacosi-accent mt-3">
          <span className="material-symbols-outlined text-[16px]">
            list_alt
          </span>
          <span className="font-bold text-xs">Seleccionadas en vista</span>
        </div>
      </div>

      <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm flex flex-col justify-between">
        <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-2">
          Total de comensales
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
          {cubiertosTotales}
        </h3>
        <div className="flex items-center gap-1.5 text-titacosi-accent mt-3">
          <span className="material-symbols-outlined text-[16px]">group</span>
          <span className="font-bold text-xs">Personas gestionadas</span>
        </div>
      </div>

      <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm flex flex-col justify-between">
        <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-2">
          Confirmadas
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
          {confirmadas}
        </h3>
        <div className="w-full bg-gray-200 h-1.5 rounded-full mt-4">
          <div
            className="bg-green-600 h-full rounded-full transition-all"
            style={{
              width: `${reservasFiltradas.length ? (confirmadas / reservasFiltradas.length) * 100 : 0}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm flex flex-col justify-between">
        <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-2">
          Cancelaciones
        </p>
        <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
          {canceladas}
        </h3>
        <div className="flex items-center gap-1.5 text-gray-500 mt-3">
          <span className="material-symbols-outlined text-[16px]">cancel</span>
          <span className="font-bold text-xs">En la vista actual</span>
        </div>
      </div>
    </div>
  );
}
