// src/components/react/reservas/ReservationWidget.tsx
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";
import "react-day-picker/dist/style.css";

interface ReservationWidgetProps {
  lang: string;
}

type Zone = "Sala" | "Terraza";
interface Table {
  id: string;
  name: string;
  capacity: number;
  zone: Zone;
}

const TABLES: Table[] = [
  { id: "S1", name: "Mesa 1", capacity: 2, zone: "Sala" },
  { id: "S2", name: "Mesa 2", capacity: 2, zone: "Sala" },
  { id: "S3", name: "Mesa 3", capacity: 2, zone: "Sala" },
  { id: "S4", name: "Mesa 4", capacity: 4, zone: "Sala" },
  { id: "S5", name: "Mesa 5", capacity: 4, zone: "Sala" },
  { id: "S6", name: "Mesa 6", capacity: 4, zone: "Sala" },
  { id: "S7", name: "Mesa 7 (Imperial)", capacity: 8, zone: "Sala" },
  { id: "T1", name: "Mesa T1", capacity: 2, zone: "Terraza" },
  { id: "T2", name: "Mesa T2", capacity: 2, zone: "Terraza" },
  { id: "T3", name: "Mesa T3", capacity: 4, zone: "Terraza" },
  { id: "T4", name: "Mesa T4", capacity: 4, zone: "Terraza" },
  { id: "T5", name: "Mesa T5", capacity: 4, zone: "Terraza" },
  { id: "T6", name: "Mesa T6", capacity: 6, zone: "Terraza" },
];

export default function ReservationWidget({ lang }: ReservationWidgetProps) {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("14:30");
  const [guests, setGuests] = useState<number>(2);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  const availableTimes = [
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const validTables = TABLES.filter((table) => table.capacity >= guests);
  const salaTables = validTables.filter((t) => t.zone === "Sala");
  const terrazaTables = validTables.filter((t) => t.zone === "Terraza");

  // Calculamos la fecha de ayer para bloquear los días pasados
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <div className="mb-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-serif text-4xl md:text-5xl text-titacosi-primary mb-6">
          Reserva tu mesa en Tita Cosi
        </h1>
        <p className="font-sans text-lg text-gray-600">
          Disfruta de la auténtica esencia malagueña en un entorno diseñado para
          el confort y la buena gastronomía. Selecciona fecha, hora y tu mesa
          favorita.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex justify-center custom-calendar-wrapper relative">
              {/* MAGIA CSS: Destruimos el azul por defecto y metemos tu granate (#8C3B3B) */}
              <style>{`
                .custom-calendar-wrapper {
                  --rdp-accent-color: #8C3B3B;
                  --rdp-background-color: #f5eae9; /* Un granate muy clarito para el hover */
                  --rdp-outline: 2px solid #8C3B3B;
                }
                
                /* Forzar el color de las flechas de navegación a granate */
                .custom-calendar-wrapper .rdp-chevron {
                  fill: #8C3B3B !important;
                }

                /* Forzar el color del día de hoy (que por defecto es azul) */
                .custom-calendar-wrapper .rdp-today:not(.rdp-outside) {
                  color: #8C3B3B !important;
                  font-weight: 700;
                }

                /* Forzar que el día seleccionado sea totalmente granate */
                .custom-calendar-wrapper .rdp-selected .rdp-day_button,
                .custom-calendar-wrapper .rdp-selected {
                  background-color: #8C3B3B !important;
                  border-color: #8C3B3B !important;
                  color: white !important;
                }

                /* Estado hover del día seleccionado para que sea un pelín más oscuro */
                .custom-calendar-wrapper .rdp-selected:hover .rdp-day_button {
                  background-color: #702f2f !important;
                }
              `}</style>

              {/* Al quitar showOutsideDays y fixedWeeks, nos aseguramos de que no salgan los días del mes siguiente */}
              <DayPicker
                mode="single"
                selected={selectedDay}
                onSelect={setSelectedDay}
                locale={es}
                disabled={[{ before: new Date() }]}
              />
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <h3 className="font-serif text-xl text-titacosi-primary mb-6">
                Horarios
              </h3>
              <div className="grid grid-cols-2 gap-3 grow content-start">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-4 rounded-xl font-sans text-sm transition-all duration-200 border ${
                      selectedTime === time
                        ? "bg-titacosi-primary border-titacosi-primary text-white shadow-md font-medium"
                        : "border-gray-200 text-gray-600 hover:border-titacosi-accent hover:text-titacosi-accent"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-end mb-6">
              <h3 className="font-serif text-xl text-titacosi-primary">
                Elige tu Mesa
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Comensales:</span>
                <select
                  value={guests}
                  onChange={(e) => {
                    setGuests(Number(e.target.value));
                    setSelectedTable(null);
                  }}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 font-sans text-sm text-titacosi-primary focus:ring-titacosi-accent focus:border-titacosi-accent cursor-pointer"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-sans text-xs uppercase font-bold text-gray-400 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  living
                </span>{" "}
                Sala Interior
              </h4>
              <div className="flex flex-wrap gap-3">
                {salaTables.length > 0 ? (
                  salaTables.map((table) => (
                    <button
                      key={table.id}
                      type="button"
                      onClick={() => setSelectedTable(table.id)}
                      className={`flex flex-col items-start p-3 rounded-xl border transition-all duration-200 ${
                        selectedTable === table.id
                          ? "bg-titacosi-accent/10 border-titacosi-accent"
                          : "bg-gray-50 border-gray-200 hover:border-titacosi-accent/50"
                      }`}
                    >
                      <span
                        className={`font-sans text-sm font-bold ${selectedTable === table.id ? "text-titacosi-accent" : "text-titacosi-primary"}`}
                      >
                        {table.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        Hasta {table.capacity} pax
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">
                    No hay mesas disponibles en sala para {guests} personas.
                  </p>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs uppercase font-bold text-gray-400 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  deck
                </span>{" "}
                Terraza
              </h4>
              <div className="flex flex-wrap gap-3">
                {terrazaTables.length > 0 ? (
                  terrazaTables.map((table) => (
                    <button
                      key={table.id}
                      type="button"
                      onClick={() => setSelectedTable(table.id)}
                      className={`flex flex-col items-start p-3 rounded-xl border transition-all duration-200 ${
                        selectedTable === table.id
                          ? "bg-titacosi-accent/10 border-titacosi-accent"
                          : "bg-gray-50 border-gray-200 hover:border-titacosi-accent/50"
                      }`}
                    >
                      <span
                        className={`font-sans text-sm font-bold ${selectedTable === table.id ? "text-titacosi-accent" : "text-titacosi-primary"}`}
                      >
                        {table.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        Hasta {table.capacity} pax
                      </span>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">
                    No hay mesas disponibles en terraza para {guests} personas.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <form className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-5 sticky top-28">
            <h3 className="font-serif text-xl text-titacosi-primary mb-2">
              Tus Datos
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="font-sans text-xs uppercase font-bold text-gray-500 mb-1 block"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent outline-none transition-all"
                  id="name"
                  placeholder="Ej. Juan Pedro"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="font-sans text-xs uppercase font-bold text-gray-500 mb-1 block"
                  htmlFor="surname"
                >
                  Apellidos
                </label>
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent outline-none transition-all"
                  id="surname"
                  placeholder="Ej. Gómez"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label
                className="font-sans text-xs uppercase font-bold text-gray-500 mb-1 flex items-center gap-1"
                htmlFor="phone"
              >
                Teléfono{" "}
                <span className="material-symbols-outlined text-[14px] text-green-500">
                  chat
                </span>
              </label>
              <input
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent outline-none transition-all"
                id="phone"
                placeholder="+34 600 000 000"
                type="tel"
              />
            </div>

            <div>
              <label
                className="font-sans text-xs uppercase font-bold text-gray-500 mb-1 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent outline-none transition-all"
                id="email"
                placeholder="correo@ejemplo.com"
                type="email"
              />
            </div>

            <div>
              <label
                className="font-sans text-xs uppercase font-bold text-gray-500 mb-1 block"
                htmlFor="requests"
              >
                Alergias o Peticiones
              </label>
              <textarea
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 font-sans text-sm focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent outline-none transition-all resize-none"
                id="requests"
                placeholder="Celiaquía, trona para bebé..."
                rows={3}
              ></textarea>
            </div>

            <div className="mt-2 pt-5 border-t border-gray-100">
              <div className="flex items-start gap-3 mb-6">
                <input
                  className="mt-1 rounded border-gray-300 text-titacosi-accent focus:ring-titacosi-accent"
                  id="privacy"
                  type="checkbox"
                />
                <label
                  className="font-sans text-xs text-gray-500"
                  htmlFor="privacy"
                >
                  He leído y acepto la{" "}
                  <a
                    className="underline hover:text-titacosi-primary"
                    href={`/${lang}/privacidad`}
                  >
                    Política de Privacidad
                  </a>
                  .
                </label>
              </div>

              <button
                className="w-full bg-titacosi-accent text-white rounded-xl py-4 px-6 font-sans text-sm uppercase font-bold text-center hover:bg-opacity-90 transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={!selectedTable || !selectedDay}
              >
                {selectedTable ? "Confirmar Reserva" : "Selecciona una Mesa"}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
