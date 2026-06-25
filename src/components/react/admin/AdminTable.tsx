// src/components/react/admin/AdminTable.tsx
import React, { useState, useRef, useEffect } from "react";
import type { Reserva } from "./admin.types";
import { extraerFechaLocal, formatearFecha } from "./admin.utils";

interface AdminTableProps {
  reservasFiltradas: Reserva[];
  modoVista: "dia" | "todas";
  setModoVista: (modo: "dia" | "todas") => void;
  checkSession: () => Promise<void>;
  columnaOrden: keyof Reserva;
  ordenAscendente: boolean;
  alternarOrdenacion: (clave: keyof Reserva) => void;
  cambiarEstadoRapido: (reserva: Reserva, nuevoEstado: string) => void;
  prepararEdicion: (reserva: Reserva) => void;
  prepararEliminacion: (reserva: Reserva) => void;
}

// NUEVO: Componente personalizado para el selector de estado
const StatusDropdown = ({
  reserva,
  cambiarEstadoRapido,
}: {
  reserva: Reserva;
  cambiarEstadoRapido: (reserva: Reserva, nuevoEstado: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el desplegable si el usuario hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    if (!isOpen && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      // Altura aproximada del menú desplegable (3 elementos = ~140px)
      const dropdownHeight = 150;

      // Si el espacio debajo es menor a la altura del menú, ábrelo hacia arriba
      if (spaceBelow < dropdownHeight) {
        setOpenUpwards(true);
      } else {
        setOpenUpwards(false);
      }
    }
    setIsOpen(!isOpen);
  };

  const estados = ["Pendiente", "Confirmada", "Cancelada"];

  let estadoColor =
    "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200";
  if (reserva.estado.toLowerCase() === "confirmada")
    estadoColor =
      "bg-green-100 text-green-800 border-green-200 hover:bg-green-200";
  if (reserva.estado.toLowerCase() === "cancelada")
    estadoColor = "bg-red-100 text-red-800 border-red-200 hover:bg-red-200";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`border inline-flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide outline-none transition-colors w-full md:w-auto min-w-[130px] ${estadoColor}`}
      >
        {reserva.estado}
        <span
          className="material-symbols-outlined text-[16px] ml-1 transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 w-36 rounded-xl shadow-xl bg-white ring-1 ring-black/5 z-[9999] overflow-hidden transform opacity-100 scale-100 transition-all ${
            openUpwards
              ? "bottom-full mb-2 origin-bottom-right"
              : "top-full mt-2 origin-top-right"
          }`}
        >
          <div className="py-1 flex flex-col" role="menu">
            {estados.map((est) => (
              <button
                key={est}
                onClick={() => {
                  if (est !== reserva.estado) {
                    cambiarEstadoRapido(reserva, est);
                  }
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2.5 text-xs font-bold uppercase transition-colors hover:bg-gray-50 ${
                  reserva.estado === est
                    ? "bg-gray-50 text-titacosi-accent"
                    : "text-gray-700"
                }`}
                role="menuitem"
              >
                {est}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
  prepararEliminacion,
}: AdminTableProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await checkSession();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="w-full bg-transparent md:bg-white md:rounded-2xl md:border md:border-gray-200 md:shadow-sm flex flex-col">
      <div className="p-0 pb-4 md:p-6 md:border-b md:border-gray-100 flex flex-wrap gap-4 items-center justify-between bg-transparent md:bg-white">
        <h2 className="font-serif text-xl md:text-2xl font-bold text-titacosi-primary">
          Listado de Reservas
        </h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setModoVista(modoVista === "dia" ? "todas" : "dia")}
            className={`px-4 py-2 text-sm font-bold rounded-xl transition-colors border ${modoVista === "todas" ? "bg-titacosi-primary text-white border-titacosi-primary" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 shadow-sm md:shadow-none"}`}
          >
            {modoVista === "dia"
              ? "Listar todas (Desde Hoy)"
              : "Ver día seleccionado"}
          </button>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-2 border bg-white md:bg-transparent border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600 shadow-sm md:shadow-none outline-none focus:ring-2 focus:ring-titacosi-accent/50 disabled:opacity-50"
            title="Actualizar datos"
          >
            <span
              className={`material-symbols-outlined text-[20px] ${
                isRefreshing ? "animate-spin text-titacosi-accent" : ""
              }`}
            >
              refresh
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto md:overflow-visible custom-scrollbar flex-1 pb-4 md:pb-0">
        <table className="w-full text-left block md:table md:min-w-[900px]">
          <thead className="hidden md:table-header-group">
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
          <tbody className="block md:table-row-group divide-y-0 md:divide-y md:divide-gray-100">
            {reservasFiltradas.length === 0 ? (
              <tr className="block md:table-row">
                <td
                  colSpan={6}
                  className="block md:table-cell px-6 py-16 text-center text-gray-500 italic text-sm bg-white rounded-2xl md:rounded-none shadow-sm md:shadow-none border border-gray-200 md:border-none"
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

                return (
                  <tr
                    key={reserva.id}
                    className="block md:table-row hover:bg-gray-50/50 transition-colors bg-white border border-gray-200 md:border-none rounded-2xl md:rounded-none mb-4 md:mb-0 p-4 md:p-0 shadow-sm md:shadow-none"
                  >
                    {/* Tarjeta Móvil - Cabecera (Comensal) */}
                    <td className="block md:table-cell px-0 md:px-6 py-2 md:py-4 border-b border-gray-100 md:border-none mb-3 md:mb-0 pb-4 md:pb-4">
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

                    {/* Fecha / Hora / Mesa */}
                    <td className="flex md:table-cell justify-between items-center px-0 md:px-6 py-2 md:py-4 text-titacosi-primary">
                      <span className="md:hidden text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        Detalles
                      </span>
                      <div className="text-right md:text-left">
                        <p className="font-medium text-sm capitalize">
                          {formatearFecha(extraerFechaLocal(reserva.fecha))}
                        </p>
                        <p className="text-xs font-bold text-titacosi-accent">
                          Mesa {reserva.mesa_id} • {reserva.hora}h
                        </p>
                      </div>
                    </td>

                    {/* Pax */}
                    <td className="flex md:table-cell justify-between items-center px-0 md:px-6 py-2 md:py-4 text-center font-serif text-2xl text-titacosi-primary italic">
                      <span className="md:hidden text-[10px] text-gray-400 font-bold uppercase tracking-wider font-sans not-italic">
                        Pax
                      </span>
                      <span>{reserva.comensales}</span>
                    </td>

                    {/* Estado (AQUÍ ESTÁ EL NUEVO DROPDOWN) */}
                    <td className="flex md:table-cell justify-between items-center px-0 md:px-6 py-2 md:py-4">
                      <span className="md:hidden text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                        Estado
                      </span>
                      <StatusDropdown
                        reserva={reserva}
                        cambiarEstadoRapido={cambiarEstadoRapido}
                      />
                    </td>

                    {/* Notas */}
                    <td className="block md:table-cell px-0 md:px-6 py-2 md:py-4">
                      <span className="md:hidden text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">
                        Notas / Peticiones
                      </span>
                      <p
                        className="text-xs text-gray-600 line-clamp-3 md:line-clamp-2 max-w-full md:max-w-[200px]"
                        title={reserva.notas}
                      >
                        {reserva.notas || (
                          <span className="text-gray-300 italic">
                            Sin notas
                          </span>
                        )}
                      </p>
                    </td>

                    {/* Acciones */}
                    <td className="flex md:table-cell justify-end px-0 md:px-6 py-2 md:py-4 mt-3 md:mt-0 pt-4 md:pt-4 border-t border-gray-100 md:border-none text-right">
                      <div className="flex justify-end gap-2 w-full md:w-auto">
                        <button
                          onClick={() => prepararEdicion(reserva)}
                          className="flex-1 md:flex-none flex justify-center items-center gap-1 p-2 md:p-1.5 text-gray-500 hover:text-titacosi-accent hover:bg-gray-50 md:hover:bg-transparent rounded-lg transition-colors border border-gray-200 md:border-transparent"
                          title="Editar Reserva"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                          <span className="md:hidden text-xs font-bold">
                            Editar
                          </span>
                        </button>
                        <button
                          onClick={() => prepararEliminacion(reserva)}
                          className="flex-1 md:flex-none flex justify-center items-center gap-1 p-2 md:p-1.5 text-red-400 hover:text-red-500 hover:bg-red-50 md:hover:bg-transparent rounded-lg transition-colors border border-gray-200 md:border-transparent"
                          title="Eliminar Reserva"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            delete
                          </span>
                          <span className="md:hidden text-xs font-bold">
                            Eliminar
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
