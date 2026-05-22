// src/components/react/admin/AdminDashboard.tsx
import React, { useState, useEffect } from "react";

interface AdminDashboardProps {
  lang: string;
}

interface Reserva {
  id: string;
  nombre_cliente: string;
  telefono_cliente: string;
  fecha: string;
  hora: string;
  comensales: number;
  estado: string;
  mesa_id: string;
  zona: string;
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

export default function AdminDashboard({ lang }: AdminDashboardProps) {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);

  const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:3000/api";

  // Bloqueo de scroll al abrir el modal en móvil y desktop
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

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
        setReservas(data);
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
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    } finally {
      window.location.href = `/${lang}/login`;
    }
  };

  const handleCreateReserva = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setModalError(null);

    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre") as string;
    const apellidos = formData.get("apellidos") as string;
    const mesaId = formData.get("mesa_id") as string;

    const tableObj = TABLES.find((t) => t.id === mesaId);

    const payload = {
      nombre_cliente: `${nombre} ${apellidos}`.trim(),
      email_cliente: formData.get("email"),
      telefono_cliente: formData.get("telefono"),
      fecha: formData.get("fecha"),
      hora: formData.get("hora"),
      comensales: Number(formData.get("comensales")),
      mesa_id: mesaId,
      zona: tableObj?.zone,
      notas: formData.get("peticiones"),
    };

    try {
      const response = await fetch(`${API_URL}/reservas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al crear la reserva");
      }

      setIsModalOpen(false);
      await checkSession();
    } catch (error: any) {
      setModalError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatearFecha = (fechaISO: string) => {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-titacosi-base">
        <span className="material-symbols-outlined text-4xl text-titacosi-accent animate-spin">
          sync
        </span>
      </div>
    );
  }

  const reservasPendientes = reservas.filter(
    (r) => r.estado.toLowerCase() === "pendiente",
  ).length;
  const cubiertosTotales = reservas.reduce(
    (acc, curr) => acc + curr.comensales,
    0,
  );
  const canceladas = reservas.filter(
    (r) => r.estado.toLowerCase() === "cancelada",
  ).length;
  const confirmadas = reservas.filter(
    (r) => r.estado.toLowerCase() === "confirmada",
  ).length;

  return (
    <div className="bg-titacosi-base text-titacosi-primary font-sans min-h-screen pb-20">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      `}</style>

      {/* Header Elegante y Responsivo */}
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
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
        {/* Cabecera Principal */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-titacosi-primary">
              Panel de Control
            </h1>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Bienvenido de nuevo. Tienes{" "}
              <strong className="text-titacosi-accent">
                {reservasPendientes} reservas pendientes
              </strong>{" "}
              para hoy.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto bg-titacosi-accent text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-titacosi-primary active:scale-95 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            NUEVA RESERVA
          </button>
        </div>

        {/* Tarjetas Estadísticas - Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 md:mb-2">
              Total Reservas
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
              {reservas.length}
            </h3>
            <div className="flex items-center gap-1.5 text-titacosi-accent mt-2 md:mt-3">
              <span className="material-symbols-outlined text-[16px]">
                trending_up
              </span>
              <span className="font-bold text-xs">Histórico completo</span>
            </div>
          </div>

          <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 md:mb-2">
              Cubiertos Totales
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
              {cubiertosTotales}
            </h3>
            <div className="flex items-center gap-1.5 text-titacosi-accent mt-2 md:mt-3">
              <span className="material-symbols-outlined text-[16px]">
                group
              </span>
              <span className="font-bold text-xs">Personas gestionadas</span>
            </div>
          </div>

          <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 md:mb-2">
              Confirmadas
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
              {confirmadas}
            </h3>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-3 md:mt-4">
              <div className="bg-green-600 h-full rounded-full w-[60%]"></div>
            </div>
          </div>

          <div className="bg-[#f4f3f1] p-5 md:p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-bold text-[11px] md:text-xs text-gray-500 uppercase tracking-widest mb-1 md:mb-2">
              Cancelaciones
            </p>
            <h3 className="font-serif text-3xl md:text-4xl text-titacosi-primary font-bold">
              {canceladas}
            </h3>
            <div className="flex items-center gap-1.5 text-gray-500 mt-2 md:mt-3">
              <span className="material-symbols-outlined text-[16px]">
                check_circle
              </span>
              <span className="font-bold text-xs">Estado histórico</span>
            </div>
          </div>
        </div>

        {/* Layout Principal: Tabla + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* TABLA DE RESERVAS */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
            <div className="p-5 md:p-6 border-b border-gray-100 flex items-center justify-between bg-white">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-titacosi-primary">
                Listado de Reservas
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={checkSession}
                  className="p-2 md:p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600"
                  title="Actualizar datos"
                >
                  <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                    refresh
                  </span>
                </button>
                <button className="hidden sm:block p-2 md:p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600">
                  <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                    filter_list
                  </span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto custom-scrollbar flex-1">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50/50 text-gray-500 text-[10px] md:text-xs uppercase tracking-wider">
                    <th className="px-4 md:px-6 py-4 font-bold">Comensal</th>
                    <th className="px-4 md:px-6 py-4 font-bold">
                      Fecha / Hora
                    </th>
                    <th className="px-4 md:px-6 py-4 font-bold text-center">
                      Comensales
                    </th>
                    <th className="px-4 md:px-6 py-4 font-bold">Estado</th>
                    <th className="px-4 md:px-6 py-4 font-bold text-right">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reservas.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-16 text-center text-gray-500 italic text-sm"
                      >
                        No hay reservas registradas en el sistema.
                      </td>
                    </tr>
                  ) : (
                    reservas.map((reserva) => {
                      const iniciales = reserva.nombre_cliente
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)
                        .toUpperCase();
                      const isConfirmada =
                        reserva.estado.toLowerCase() === "confirmada";
                      const isPendiente =
                        reserva.estado.toLowerCase() === "pendiente";

                      return (
                        <tr
                          key={reserva.id}
                          className="hover:bg-gray-50/50 transition-colors group"
                        >
                          <td className="px-4 md:px-6 py-4 md:py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-titacosi-accent/10 text-titacosi-accent flex items-center justify-center font-bold text-xs md:text-sm">
                                {iniciales}
                              </div>
                              <div className="min-w-0">
                                <p className="font-bold text-sm text-titacosi-primary capitalize truncate">
                                  {reserva.nombre_cliente}
                                </p>
                                <p className="text-[11px] md:text-xs text-gray-500 truncate">
                                  {reserva.telefono_cliente}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-4 md:py-5 text-titacosi-primary">
                            <p className="font-medium text-sm capitalize">
                              {formatearFecha(reserva.fecha)}
                            </p>
                            <p className="text-[11px] md:text-xs font-bold text-titacosi-accent">
                              Mesa {reserva.mesa_id} • {reserva.hora}h
                            </p>
                          </td>
                          <td className="px-4 md:px-6 py-4 md:py-5 text-center font-serif text-xl md:text-2xl text-titacosi-primary italic">
                            {reserva.comensales}
                          </td>
                          <td className="px-4 md:px-6 py-4 md:py-5">
                            <span
                              className={`inline-flex px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide ${
                                isConfirmada
                                  ? "bg-green-100 text-green-800"
                                  : isPendiente
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {reserva.estado}
                            </span>
                          </td>
                          <td className="px-4 md:px-6 py-4 md:py-5 text-right">
                            <div className="flex justify-end gap-1 md:gap-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                              <button className="p-1.5 text-gray-400 hover:text-titacosi-accent transition-colors">
                                <span className="material-symbols-outlined text-[18px] md:text-[20px]">
                                  edit
                                </span>
                              </button>
                              <button className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-[18px] md:text-[20px]">
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

          {/* SIDEBAR: Calendario (Maqueta visual) */}
          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-titacosi-primary">
                  Calendario
                </h2>
                <div className="flex gap-1">
                  <button className="p-1.5 text-gray-400 hover:text-titacosi-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_back_ios
                    </span>
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-titacosi-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward_ios
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-3">
                {["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"].map((day) => (
                  <span
                    key={day}
                    className="text-[10px] font-bold text-gray-400 uppercase"
                  >
                    {day}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {Array.from({ length: 28 }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 15;
                  const hasEvent = day === 16 || day === 17;
                  const isPast = day < 4;

                  return (
                    <div
                      key={i}
                      className={`aspect-square flex flex-col items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-colors relative
                      ${isPast ? "text-gray-300" : "text-titacosi-primary"}
                      ${isToday ? "bg-titacosi-accent text-white shadow-md" : !isPast ? "hover:bg-gray-100" : ""}
                    `}
                    >
                      {day}
                      {hasEvent && (
                        <span className="absolute bottom-1 w-1 h-1 bg-titacosi-accent rounded-full"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL RESPONSIVO: Creación de Reserva */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="absolute inset-0 bg-titacosi-primary/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-2xl bg-white sm:rounded-3xl shadow-2xl z-10 max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-b-3xl">
            {/* Cabecera del modal sticky */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-20 rounded-t-3xl">
              <h2 className="font-serif text-2xl md:text-3xl text-titacosi-primary font-bold">
                Nueva Reserva
              </h2>
              <button
                className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              {modalError && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg mb-6 flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    error
                  </span>
                  <p>{modalError}</p>
                </div>
              )}

              <form onSubmit={handleCreateReserva} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Nombre
                    </label>
                    <input
                      required
                      name="nombre"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      placeholder="Ej. Alba"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Apellidos
                    </label>
                    <input
                      required
                      name="apellidos"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      placeholder="Ej. Martín"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Teléfono
                    </label>
                    <input
                      required
                      name="telefono"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      placeholder="+34 600 000 000"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      placeholder="correo@ejemplo.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  <div className="col-span-3 sm:col-span-1">
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Fecha
                    </label>
                    <input
                      required
                      name="fecha"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      type="date"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Hora
                    </label>
                    <input
                      required
                      name="hora"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      type="time"
                      defaultValue="14:30"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Comensales
                    </label>
                    <input
                      required
                      name="comensales"
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      min="1"
                      max="20"
                      defaultValue="2"
                      type="number"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                    Asignar Mesa Exacta
                  </label>
                  <select
                    required
                    name="mesa_id"
                    className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm cursor-pointer"
                  >
                    <option value="">-- Seleccionar mesa --</option>
                    <optgroup label="Sala Interior">
                      {TABLES.filter((t) => t.zone === "Sala").map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} (Max {t.capacity} Comensales)
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Terraza Exterior">
                      {TABLES.filter((t) => t.zone === "Terraza").map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} (Max {t.capacity} Comensales)
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                    Notas / Peticiones
                  </label>
                  <textarea
                    name="peticiones"
                    className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm resize-none"
                    placeholder="Celiaquía, confirmada por teléfono..."
                    rows={3}
                  ></textarea>
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 pt-6 border-t border-gray-100 sticky bottom-0 bg-white pb-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:flex-1 py-3.5 sm:py-4 bg-gray-50 hover:bg-gray-100 rounded-xl font-bold text-sm text-gray-600 transition-colors"
                  >
                    CANCELAR
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
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
      )}
    </div>
  );
}
