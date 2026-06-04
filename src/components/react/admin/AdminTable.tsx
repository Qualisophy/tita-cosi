// src/components/react/admin/AdminTable.tsx
import React from "react";
import type { Reserva } from "./admin.types";
import { extraerFechaLocal, formatearFecha } from "./admin.utils";

interface AdminTableProps {
  reservasFiltradas: Reserva[];
  modoVista: "dia" | "todas";
  setModoVista: (modo: "dia" | "todas") => void;
  checkSession: () => void;
  columnaOrden: keyof Reserva;
  ordenAscendente: boolean;
  alternarOrdenacion: (clave: keyof Reserva) => void;
  cambiarEstadoRapido: (reserva: Reserva, nuevoEstado: string) => void;
  prepararEdicion: (reserva: Reserva) => void;
  prepararEliminacion: (reserva: Reserva) => void; // MODIFICADO
}

export default function AdminTable({
  reservasFiltradas,
  modoVista,
  setModoVista,
  checkSession,
  columnaOrden,
  ordenAscendente,
  alternarOrdenacion,
  cambiarEstadoRapido,
  prepararEdicion,
  prepararEliminacion, // MODIFICADO
}: AdminTableProps) {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
      <div className="p-5 md:p-6 border-b border-gray-100 flex flex-wrap gap-4 items-center justify-between bg-white">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-titacosi-primary">
          Listado de Reservas
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setModoVista(modoVista === "dia" ? "todas" : "dia")}
            className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors border ${modoVista === "todas" ? "bg-titacosi-primary text-white border-titacosi-primary" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
          >
            {modoVista === "dia"
              ? "Listar todas (Desde Hoy)"
              : "Ver día seleccionado"}
          </button>
          <button
            onClick={checkSession}
            className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600"
            title="Actualizar datos"
          >
            <span className="material-symbols-outlined text-[20px]">
              refresh
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar flex-1">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="bg-gray-50/50 text-gray-500 text-[10px] md:text-xs uppercase tracking-wider">
              <th
                className="px-6 py-4 font-bold cursor-pointer hover:text-titacosi-accent"
                onClick={() => alternarOrdenacion("nombre_cliente")}
              >
                Comensal{" "}
                {columnaOrden === "nombre_cliente" &&
                  (ordenAscendente ? "↑" : "↓")}
              </th>
              <th
                className="px-6 py-4 font-bold cursor-pointer hover:text-titacosi-accent"
                onClick={() => alternarOrdenacion("hora")}
              >
                Fecha / Hora / Mesa{" "}
                {columnaOrden === "hora" && (ordenAscendente ? "↑" : "↓")}
              </th>
              <th
                className="px-6 py-4 font-bold text-center cursor-pointer hover:text-titacosi-accent"
                onClick={() => alternarOrdenacion("comensales")}
              >
                Pax{" "}
                {columnaOrden === "comensales" && (ordenAscendente ? "↑" : "↓")}
              </th>
              <th
                className="px-6 py-4 font-bold cursor-pointer hover:text-titacosi-accent"
                onClick={() => alternarOrdenacion("estado")}
              >
                Estado{" "}
                {columnaOrden === "estado" && (ordenAscendente ? "↑" : "↓")}
              </th>
              <th className="px-6 py-4 font-bold">Notas / Peticiones</th>
              <th className="px-6 py-4 font-bold text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {reservasFiltradas.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-16 text-center text-gray-500 italic text-sm"
                >
                  No hay reservas registradas para esta selección.
                </td>
              </tr>
            ) : (
              reservasFiltradas.map((reserva) => {
                const iniciales = reserva.nombre_cliente
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .substring(0, 2)
                  .toUpperCase();
                let estadoColor =
                  "bg-amber-100 text-amber-800 border-amber-200";
                if (reserva.estado.toLowerCase() === "confirmada")
                  estadoColor = "bg-green-100 text-green-800 border-green-200";
                if (reserva.estado.toLowerCase() === "cancelada")
                  estadoColor = "bg-red-100 text-red-800 border-red-200";

                return (
                  <tr
                    key={reserva.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 shrink-0 rounded-full bg-titacosi-accent/10 text-titacosi-accent flex items-center justify-center font-bold text-sm">
                          {iniciales}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm text-titacosi-primary capitalize truncate">
                            {reserva.nombre_cliente}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {reserva.telefono_cliente}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-titacosi-primary">
                      <p className="font-medium text-sm capitalize">
                        {formatearFecha(extraerFechaLocal(reserva.fecha))}
                      </p>
                      <p className="text-xs font-bold text-titacosi-accent">
                        Mesa {reserva.mesa_id} • {reserva.hora}h
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center font-serif text-2xl text-titacosi-primary italic">
                      {reserva.comensales}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={reserva.estado}
                        onChange={(e) =>
                          cambiarEstadoRapido(reserva, e.target.value)
                        }
                        className={`badge-select border cursor-pointer inline-flex px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide outline-none transition-colors ${estadoColor}`}
                      >
                        <option value="Pendiente">Pendiente</option>
                        <option value="Confirmada">Confirmada</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <p
                        className="text-xs text-gray-600 line-clamp-2 max-w-[200px]"
                        title={reserva.notas}
                      >
                        {reserva.notas || (
                          <span className="text-gray-300 italic">
                            Sin notas
                          </span>
                        )}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => prepararEdicion(reserva)}
                          className="p-1.5 text-gray-500 hover:text-titacosi-accent transition-colors"
                          title="Editar Reserva"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button
                          onClick={() => prepararEliminacion(reserva)}
                          className="p-1.5 text-gray-500 hover:text-red-500 transition-colors"
                          title="Eliminar Reserva"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
