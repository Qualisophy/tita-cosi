// src/components/react/admin/AdminDashboard.tsx
import React, { useState, useEffect, useMemo } from "react";
import type { Reserva } from "./admin.types";
import { TABLES } from "./admin.types";
import { extraerFechaLocal } from "./admin.utils";

import AdminStats from "./AdminStats";
import AdminCalendar from "./AdminCalendar";
import AdminTable from "./AdminTable";
import AdminModal from "./AdminModal";
import AdminDeleteModal from "./AdminDeleteModal";

interface AdminDashboardProps {
  lang: string;
}

export default function AdminDashboard({ lang }: AdminDashboardProps) {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);
  const [reservaEditando, setReservaEditando] = useState<Reserva | null>(null);

  const [reservaAEliminar, setReservaAEliminar] = useState<Reserva | null>(
    null,
  );
  const [isDeleting, setIsDeleting] = useState(false);

  const hoy = new Date();
  const fechaHoyString = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

  const maxDateObj = new Date(hoy);
  maxDateObj.setMonth(maxDateObj.getMonth() + 1);
  const maxDateString = `${maxDateObj.getFullYear()}-${String(maxDateObj.getMonth() + 1).padStart(2, "0")}-${String(maxDateObj.getDate()).padStart(2, "0")}`;

  const [fechaSeleccionada, setFechaSeleccionada] =
    useState<string>(fechaHoyString);
  const [mesActualCalendario, setMesActualCalendario] = useState(
    new Date(hoy.getFullYear(), hoy.getMonth(), 1),
  );

  const [modoVista, setModoVista] = useState<"dia" | "todas">("dia");
  const [columnaOrden, setColumnaOrden] = useState<keyof Reserva>("hora");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || reservaAEliminar ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, reservaAEliminar]);

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch(`${API_URL}/reservas`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setReservas(data.data || data);
        setIsCheckingAuth(false);
      } else {
        window.location.href = `/${lang}/login`;
      }
    } catch (error) {
      window.location.href = `/${lang}/login`;
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } finally {
      window.location.href = `/${lang}/login`;
    }
  };

  const handleConfirmarEliminacion = async () => {
    if (!reservaAEliminar) return;
    setIsDeleting(true);
    try {
      const response = await fetch(
        `${API_URL}/reservas/${reservaAEliminar.id}`,
        { method: "DELETE", credentials: "include" },
      );
      if (response.ok) {
        await checkSession();
        setReservaAEliminar(null);
      } else {
        alert("No se pudo eliminar la reserva.");
      }
    } catch (error) {
      console.error("Error al eliminar:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const cambiarEstadoRapido = async (reserva: Reserva, nuevoEstado: string) => {
    try {
      const payload = {
        ...reserva,
        estado: nuevoEstado,
        fecha: extraerFechaLocal(reserva.fecha),
      };
      const response = await fetch(`${API_URL}/reservas/${reserva.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setReservas((prev) =>
          prev.map((r) =>
            r.id === reserva.id ? { ...r, estado: nuevoEstado } : r,
          ),
        );
      } else {
        alert(result.message || "Error al actualizar estado");
      }
    } catch (error) {
      console.error("Error al cambiar estado:", error);
    }
  };

  const prepararEdicion = (reserva: Reserva) => {
    setReservaEditando(reserva);
    setIsModalOpen(true);
  };

  const handleCreateReserva = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setModalError(null);

    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre") as string;
    const apellidos = formData.get("apellidos") as string;
    const mesaId = formData.get("mesa_id") as string;
    const rawDate = formData.get("fecha") as string;
    const estadoReserva = (formData.get("estado") as string) || "Pendiente";
    const horaString = formData.get("hora") as string;

    if (estadoReserva !== "Cancelada") {
      const [hh, mm] = horaString.split(":").map(Number);
      const minutosTotales = hh * 60 + mm;
      const dentroDeComida =
        minutosTotales >= 13 * 60 && minutosTotales <= 16 * 60;
      const dentroDeCena =
        minutosTotales >= 20 * 60 && minutosTotales <= 23 * 60 + 30;

      if (!dentroDeComida && !dentroDeCena) {
        setModalError(
          "Horario inválido. Nuestro horario es de 13:00-16:00 y 20:00-23:30.",
        );
        setIsSubmitting(false);
        return;
      }
    }

    const formattedDate = rawDate.includes("/")
      ? rawDate.split("/").reverse().join("-")
      : rawDate;
    const tableObj = TABLES.find((t) => t.id === mesaId);

    const payload = {
      nombre_cliente: `${nombre} ${apellidos}`.trim(),
      email_cliente: formData.get("email"),
      telefono_cliente: formData.get("telefono"),
      fecha: formattedDate,
      hora: horaString,
      comensales: Number(formData.get("comensales")),
      mesa_id: mesaId,
      zona: tableObj?.zone || "Sala",
      estado: estadoReserva,
      notas: formData.get("peticiones"),
    };

    try {
      const method = reservaEditando ? "PUT" : "POST";
      const url = reservaEditando
        ? `${API_URL}/reservas/${reservaEditando.id}`
        : `${API_URL}/reservas`;

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok || data.success === false)
        throw new Error(data.message || "Error al procesar la reserva");

      setIsModalOpen(false);
      setReservaEditando(null);
      await checkSession();
      setFechaSeleccionada(formattedDate);
      setModoVista("dia");
    } catch (error: any) {
      setModalError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const alternarOrdenacion = (clave: keyof Reserva) => {
    if (columnaOrden === clave) setOrdenAscendente(!ordenAscendente);
    else {
      setColumnaOrden(clave);
      setOrdenAscendente(true);
    }
  };

  const reservasFiltradas = useMemo(() => {
    let filtradas = reservas;
    if (modoVista === "dia")
      filtradas = reservas.filter(
        (r) => extraerFechaLocal(r.fecha) === fechaSeleccionada,
      );
    else
      filtradas = reservas.filter(
        (r) => extraerFechaLocal(r.fecha) >= fechaHoyString,
      );

    return filtradas.sort((a, b) => {
      const valorA = String(a[columnaOrden]);
      const valorB = String(b[columnaOrden]);
      if (valorA < valorB) return ordenAscendente ? -1 : 1;
      if (valorA > valorB) return ordenAscendente ? 1 : -1;
      return 0;
    });
  }, [
    reservas,
    fechaSeleccionada,
    columnaOrden,
    ordenAscendente,
    modoVista,
    fechaHoyString,
  ]);

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-titacosi-base">
        <span className="material-symbols-outlined text-4xl text-titacosi-accent animate-spin">
          sync
        </span>
      </div>
    );
  }

  return (
    <div className="bg-titacosi-base text-titacosi-primary font-sans min-h-screen pb-20">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
        select.badge-select { background-image: none; padding-right: 0.5rem; text-align: center;}
      `}</style>

      <header className="sticky top-0 z-30 bg-titacosi-base/90 backdrop-blur-md border-b border-titacosi-surface h-16 md:h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-titacosi-primary">
              Taberna Tita Cosi
            </span>
            <span className="font-sans text-[10px] md:text-xs text-titacosi-accent uppercase tracking-[0.2em] font-bold">
              Portal de Gestión
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="text-right hidden sm:block">
              <p className="font-bold text-sm leading-tight text-titacosi-primary">
                Admin Tita
              </p>
              <button
                onClick={handleLogout}
                className="font-medium text-xs text-titacosi-accent hover:underline transition-all"
              >
                Cerrar Sesión
              </button>
            </div>
            <div
              className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-titacosi-surface flex items-center justify-center overflow-hidden border border-titacosi-surface shadow-sm cursor-pointer"
              onClick={() => window.innerWidth < 640 && handleLogout()}
            >
              <img
                className="w-full h-full object-cover"
                alt="Perfil Admin"
                src="https://ui-avatars.com/api/?name=Admin+Tita&background=8C3B3B&color=fff"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titacosi-primary">
              Panel de Control
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base capitalize">
              {modoVista === "dia" ? (
                <>
                  Viendo reservas del{" "}
                  <strong>
                    {new Date(fechaSeleccionada).toLocaleDateString("es-ES", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                    })}
                  </strong>
                </>
              ) : (
                <>
                  Viendo <strong>todas las reservas activas</strong> desde hoy
                </>
              )}
            </p>
          </div>

          {/* Botón Nueva Reserva modificado (w-full en móvil) */}
          <button
            onClick={() => {
              setReservaEditando(null);
              setIsModalOpen(true);
            }}
            className="w-full sm:w-auto bg-titacosi-accent text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-titacosi-primary active:scale-95 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>{" "}
            NUEVA RESERVA
          </button>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 mb-8">
          <AdminStats
            reservasFiltradas={reservasFiltradas}
            modoVista={modoVista}
          />

          <AdminCalendar
            reservas={reservas}
            fechaHoyString={fechaHoyString}
            fechaSeleccionada={fechaSeleccionada}
            setFechaSeleccionada={setFechaSeleccionada}
            mesActualCalendario={mesActualCalendario}
            setMesActualCalendario={setMesActualCalendario}
            modoVista={modoVista}
            setModoVista={setModoVista}
          />
        </div>

        <AdminTable
          reservasFiltradas={reservasFiltradas}
          modoVista={modoVista}
          setModoVista={setModoVista}
          checkSession={checkSession}
          columnaOrden={columnaOrden}
          ordenAscendente={ordenAscendente}
          alternarOrdenacion={alternarOrdenacion}
          cambiarEstadoRapido={cambiarEstadoRapido}
          prepararEdicion={prepararEdicion}
          prepararEliminacion={setReservaAEliminar}
        />
      </main>

      <AdminModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        reservaEditando={reservaEditando}
        handleCreateReserva={handleCreateReserva}
        isSubmitting={isSubmitting}
        modalError={modalError}
        fechaSeleccionada={fechaSeleccionada}
        fechaHoyString={fechaHoyString}
        maxDateString={maxDateString}
      />

      <AdminDeleteModal
        reserva={reservaAEliminar}
        onClose={() => setReservaAEliminar(null)}
        onConfirm={handleConfirmarEliminacion}
        isDeleting={isDeleting}
      />
    </div>
  );
}
