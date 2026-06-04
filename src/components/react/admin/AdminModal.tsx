// src/components/react/admin/AdminModal.tsx
import React, { useState, useEffect } from "react";
import type { Reserva } from "./admin.types";
import { TABLES } from "./admin.types";
import { extraerFechaLocal } from "./admin.utils";

interface AdminModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  reservaEditando: Reserva | null;
  handleCreateReserva: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
  modalError: string | null;
  fechaSeleccionada: string;
  fechaHoyString: string;
  maxDateString: string;
}

export default function AdminModal({
  isModalOpen,
  setIsModalOpen,
  reservaEditando,
  handleCreateReserva,
  isSubmitting,
  modalError,
  fechaSeleccionada,
  fechaHoyString,
  maxDateString,
}: AdminModalProps) {
  // NUEVO: Estado local para controlar dinámicamente los comensales y filtrar las mesas
  const [localComensales, setLocalComensales] = useState<number>(
    reservaEditando ? reservaEditando.comensales : 2,
  );
  const [localMesaId, setLocalMesaId] = useState<string>(
    reservaEditando ? reservaEditando.mesa_id : "",
  );

  // Efecto para sincronizar el estado local cuando cambia la reserva a editar
  useEffect(() => {
    if (reservaEditando) {
      setLocalComensales(reservaEditando.comensales);
      setLocalMesaId(reservaEditando.mesa_id);
    } else {
      setLocalComensales(2);
      setLocalMesaId("");
    }
  }, [reservaEditando, isModalOpen]);

  // Manejador para el cambio de comensales. Resetea la mesa si la nueva cantidad excede su capacidad.
  const handleComensalesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    setLocalComensales(num);
    const mesaActual = TABLES.find((t) => t.id === localMesaId);
    if (mesaActual && num > mesaActual.capacity) {
      setLocalMesaId(""); // Resetea si ya no cabe
    }
  };

  // Filtrado reactivo de mesas válidas
  const mesasValidas = TABLES.filter((t) => t.capacity >= localComensales);
  const salaTables = mesasValidas.filter((t) => t.zone === "Sala");
  const terrazaTables = mesasValidas.filter((t) => t.zone === "Terraza");

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-titacosi-primary/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsModalOpen(false)}
      ></div>

      <div className="relative w-full sm:max-w-2xl bg-white sm:rounded-3xl shadow-2xl z-10 h-[100dvh] sm:h-auto sm:max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-100 shrink-0">
          <h2 className="font-serif text-2xl md:text-3xl text-titacosi-primary font-bold">
            {reservaEditando ? "Editar Reserva" : "Nueva Reserva"}
          </h2>
          <button
            type="button"
            className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            onClick={() => setIsModalOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 flex flex-col">
          {modalError && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-6 flex items-start gap-2 shrink-0">
              <span className="material-symbols-outlined text-[18px]">
                error
              </span>
              <p>{modalError}</p>
            </div>
          )}

          <form
            onSubmit={handleCreateReserva}
            className="space-y-5 flex flex-col flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 shrink-0">
              <div className="flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Nombre
                </label>
                <input
                  required
                  name="nombre"
                  defaultValue={
                    reservaEditando?.nombre_cliente.split(" ")[0] || ""
                  }
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  placeholder="Ej. Alba"
                  type="text"
                />
              </div>
              <div className="flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Apellidos
                </label>
                <input
                  required
                  name="apellidos"
                  defaultValue={
                    reservaEditando?.nombre_cliente
                      .split(" ")
                      .slice(1)
                      .join(" ") || ""
                  }
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  placeholder="Ej. Martín"
                  type="text"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 shrink-0">
              <div className="flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Teléfono
                </label>
                <input
                  required
                  name="telefono"
                  defaultValue={reservaEditando?.telefono_cliente || ""}
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  placeholder="+34 600 000 000"
                  type="tel"
                  minLength={9}
                  maxLength={20}
                  pattern="[\+0-9\s\-]{9,20}"
                  title="Introduce un teléfono válido (mínimo 9 dígitos). Se admiten espacios y el prefijo '+'."
                />
              </div>
              <div className="flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Email
                </label>
                <input
                  required
                  name="email"
                  defaultValue={reservaEditando?.email_cliente || ""}
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  placeholder="correo@ejemplo.com"
                  type="email"
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                  title="Debe incluir un '@' y un dominio válido (ej. usuario@correo.com)"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-5 shrink-0">
              <div className="col-span-3 sm:col-span-1 flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Fecha
                </label>
                <input
                  required
                  name="fecha"
                  min={reservaEditando ? undefined : fechaHoyString}
                  max={maxDateString}
                  defaultValue={
                    reservaEditando?.fecha
                      ? extraerFechaLocal(reservaEditando.fecha)
                      : fechaSeleccionada
                  }
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    if (date.getUTCDay() === 1) {
                      alert("Los lunes la taberna permanece cerrada.");
                      e.target.value = "";
                    }
                  }}
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  type="date"
                />
              </div>
              <div className="col-span-1 flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Hora{" "}
                  <span className="text-[9px] text-gray-400 font-normal block xl:inline">
                    (13h-16h / 20h-23:30h)
                  </span>
                </label>
                <input
                  required
                  name="hora"
                  defaultValue={reservaEditando?.hora || "14:30"}
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  type="time"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Comensales
                </label>
                <input
                  required
                  name="comensales"
                  value={localComensales}
                  onChange={handleComensalesChange}
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                  min="1"
                  max="20"
                  type="number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 shrink-0">
              <div className="flex flex-col justify-end">
                <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                  Asignar Mesa Exacta
                </label>
                <select
                  required
                  name="mesa_id"
                  value={localMesaId}
                  onChange={(e) => setLocalMesaId(e.target.value)}
                  className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm cursor-pointer"
                >
                  <option value="">-- Seleccionar mesa --</option>
                  <optgroup label="Sala Interior">
                    {salaTables.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} (Max {t.capacity} pax)
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Terraza Exterior">
                    {terrazaTables.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name} (Max {t.capacity} pax)
                      </option>
                    ))}
                  </optgroup>
                </select>
                {mesasValidas.length === 0 && (
                  <span className="text-xs text-red-500 mt-1">
                    No hay mesas disponibles para {localComensales} comensales.
                  </span>
                )}
              </div>

              {reservaEditando ? (
                <div className="flex flex-col justify-end">
                  <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                    Estado
                  </label>
                  <select
                    required
                    name="estado"
                    defaultValue={reservaEditando.estado}
                    className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm cursor-pointer"
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Confirmada">Confirmada</option>
                    <option value="Cancelada">Cancelada</option>
                  </select>
                </div>
              ) : (
                <input type="hidden" name="estado" value="Pendiente" />
              )}
            </div>

            <div className="shrink-0 mb-4">
              <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 flex justify-between">
                Notas / Peticiones{" "}
                <span className="font-normal text-gray-400">
                  Max. 500 caract.
                </span>
              </label>
              <textarea
                name="peticiones"
                maxLength={500}
                defaultValue={reservaEditando?.notas || ""}
                className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm resize-none"
                placeholder="Alergias, trona, confirmada por teléfono..."
                rows={3}
              ></textarea>
            </div>

            <div className="flex-1"></div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-gray-100 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-full sm:flex-1 py-3.5 sm:py-4 bg-gray-50 hover:bg-gray-100 rounded-xl font-bold text-sm text-gray-600 transition-colors"
              >
                CANCELAR
              </button>
              <button
                type="submit"
                disabled={isSubmitting || mesasValidas.length === 0}
                className="w-full sm:flex-1 py-3.5 sm:py-4 bg-titacosi-accent text-white rounded-xl font-bold text-sm shadow-md hover:bg-titacosi-primary active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">
                      sync
                    </span>{" "}
                    Procesando...
                  </>
                ) : (
                  "GUARDAR RESERVA"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
