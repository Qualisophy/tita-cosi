// src/components/react/admin/AdminCalendar.tsx
import React from "react";
import type { Reserva } from "./admin.types";
import { extraerFechaLocal } from "./admin.utils";

interface AdminCalendarProps {
  reservas: Reserva[];
  fechaHoyString: string;
  fechaSeleccionada: string;
  setFechaSeleccionada: (fecha: string) => void;
  mesActualCalendario: Date;
  setMesActualCalendario: (date: Date) => void;
  modoVista: "dia" | "todas";
  setModoVista: (modo: "dia" | "todas") => void;
}

export default function AdminCalendar({
  reservas,
  fechaHoyString,
  fechaSeleccionada,
  setFechaSeleccionada,
  mesActualCalendario,
  setMesActualCalendario,
  modoVista,
  setModoVista,
}: AdminCalendarProps) {
  const cambiarMesCalendario = (incremento: number) => {
    setMesActualCalendario(
      new Date(
        mesActualCalendario.getFullYear(),
        mesActualCalendario.getMonth() + incremento,
        1,
      ),
    );
  };

  const diasEnMes = new Date(
    mesActualCalendario.getFullYear(),
    mesActualCalendario.getMonth() + 1,
    0,
  ).getDate();
  const primerDiaSemana = new Date(
    mesActualCalendario.getFullYear(),
    mesActualCalendario.getMonth(),
    1,
  ).getDay();
  const celdasVaciasInicio = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;
  const nombresMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="w-full xl:w-1/3 bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl font-bold text-titacosi-primary capitalize">
          {nombresMeses[mesActualCalendario.getMonth()]}{" "}
          {mesActualCalendario.getFullYear()}
        </h2>
        <div className="flex gap-1">
          <button
            onClick={() => cambiarMesCalendario(-1)}
            className="p-1 text-gray-400 hover:text-titacosi-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back_ios
            </span>
          </button>
          <button
            onClick={() => cambiarMesCalendario(1)}
            className="p-1 text-gray-400 hover:text-titacosi-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((day) => (
          <span
            key={day}
            className="text-[10px] font-bold text-gray-400 uppercase"
          >
            {day}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 flex-1">
        {Array.from({ length: celdasVaciasInicio }).map((_, i) => (
          <div key={`vacia-${i}`} className="aspect-square"></div>
        ))}

        {Array.from({ length: diasEnMes }).map((_, i) => {
          const diaNumero = i + 1;
          const fechaCelda = `${mesActualCalendario.getFullYear()}-${String(mesActualCalendario.getMonth() + 1).padStart(2, "0")}-${String(diaNumero).padStart(2, "0")}`;

          const esLunes =
            new Date(
              mesActualCalendario.getFullYear(),
              mesActualCalendario.getMonth(),
              diaNumero,
            ).getDay() === 1;
          const esHoy = fechaCelda === fechaHoyString;
          const estaSeleccionado =
            fechaCelda === fechaSeleccionada && modoVista === "dia";
          const tieneReservas = reservas.some(
            (r) => extraerFechaLocal(r.fecha) === fechaCelda,
          );

          return (
            <div
              key={i}
              onClick={() => {
                if (!esLunes) {
                  setFechaSeleccionada(fechaCelda);
                  setModoVista("dia");
                }
              }}
              title={esLunes ? "Cerrado por descanso" : ""}
              className={`aspect-square flex flex-col items-center justify-center text-xs font-bold rounded-lg transition-all relative
              ${esLunes ? "opacity-30 cursor-not-allowed bg-red-50/50" : "cursor-pointer"}
              ${estaSeleccionado ? "bg-titacosi-accent text-white shadow-md transform scale-105" : !esLunes && "text-titacosi-primary hover:bg-gray-100"}
              ${esHoy && !estaSeleccionado ? "border-2 border-titacosi-accent/30" : ""}
            `}
            >
              <span>{diaNumero}</span>
              {tieneReservas && !esLunes && (
                <span
                  className={`absolute bottom-1 w-1 h-1 rounded-full ${estaSeleccionado ? "bg-white" : "bg-titacosi-accent"}`}
                ></span>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-titacosi-accent"></span>{" "}
          Reservas
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full border-2 border-titacosi-accent/30"></span>{" "}
          Hoy
        </span>
        <span className="flex items-center gap-1 text-red-400"> Cerrado</span>
      </div>
    </div>
  );
}
