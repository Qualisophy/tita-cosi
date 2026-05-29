import React, { useState, useEffect, useMemo } from "react";

interface AdminDashboardProps {
  lang: string;
}

interface Reserva {
  id: string;
  nombre_cliente: string;
  email_cliente?: string;
  telefono_cliente: string;
  fecha: string;
  hora: string;
  comensales: number;
  estado: string;
  mesa_id: string;
  zona: string;
  notas?: string;
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
  const [reservaEditando, setReservaEditando] = useState<Reserva | null>(null);

  const hoy = new Date();
  const fechaHoyString = hoy.toISOString().split("T")[0];
  const [fechaSeleccionada, setFechaSeleccionada] =
    useState<string>(fechaHoyString);
  const [mesActualCalendario, setMesActualCalendario] = useState(
    new Date(hoy.getFullYear(), hoy.getMonth(), 1),
  );

  const extraerFechaLocal = (fechaString: string) => {
    if (!fechaString) return "";
    // Si ya viene con formato YYYY-MM-DD sin T ni Z, la devolvemos
    if (/^\d{4}-\d{2}-\d{2}$/.test(fechaString)) return fechaString;

    const d = new Date(fechaString);
    // Usamos métodos locales (getDate, getMonth) y NO los métodos UTC
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };

  // Nuevo estado para alternar entre "Vista de Día" y "Todas las Reservas"
  const [modoVista, setModoVista] = useState<"dia" | "todas">("dia");

  const [columnaOrden, setColumnaOrden] = useState<keyof Reserva>("hora");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const API_URL = import.meta.env.PUBLIC_API_URL || "http://localhost:3000/api";

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
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
        // Adaptado en caso de que devuelva {success, data} o el array directo
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

  const eliminarReserva = async (id: string) => {
    if (
      !confirm(
        "¿Estás seguro de que deseas eliminar esta reserva? Esta acción no se puede deshacer.",
      )
    )
      return;
    try {
      const response = await fetch(`${API_URL}/reservas/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) await checkSession();
      else alert("No se pudo eliminar la reserva.");
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  // Novedad: Edición rápida de estado directo desde la tabla
  const cambiarEstadoRapido = async (reserva: Reserva, nuevoEstado: string) => {
    try {
      // IMPORTANTE: Limpiamos la fecha para que MySQL no de error 500
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

    const formattedDate = rawDate.includes("/")
      ? rawDate.split("/").reverse().join("-")
      : rawDate;
    const tableObj = TABLES.find((t) => t.id === mesaId);

    const payload = {
      nombre_cliente: `${nombre} ${apellidos}`.trim(),
      email_cliente: formData.get("email"),
      telefono_cliente: formData.get("telefono"),
      fecha: formattedDate,
      hora: formData.get("hora"),
      comensales: Number(formData.get("comensales")),
      mesa_id: mesaId,
      zona: tableObj?.zone || "Sala",
      estado: formData.get("estado") || "Pendiente",
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

      // Si la API devuelve éxito falso (400), forzamos el error con el mensaje de rechazo
      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Error al procesar la reserva");
      }

      setIsModalOpen(false);
      setReservaEditando(null);
      await checkSession();
      setFechaSeleccionada(formattedDate);
      setModoVista("dia");
    } catch (error: any) {
      // Atrapamos el error y lo mostramos en la cabecera del modal
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

  const alternarOrdenacion = (clave: keyof Reserva) => {
    if (columnaOrden === clave) setOrdenAscendente(!ordenAscendente);
    else {
      setColumnaOrden(clave);
      setOrdenAscendente(true);
    }
  };

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

  // Filtro modificado para soportar listado completo
  const reservasFiltradas = useMemo(() => {
    let filtradas = reservas;

    if (modoVista === "dia") {
      // Usamos el helper en lugar de hacer split("T")[0]
      filtradas = reservas.filter(
        (r) => extraerFechaLocal(r.fecha) === fechaSeleccionada,
      );
    } else {
      filtradas = reservas.filter(
        (r) => extraerFechaLocal(r.fecha) >= fechaHoyString,
      );
    }

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

  // Cálculos de KPI basados en las reservas filtradas en vista actual
  const reservasPendientes = reservasFiltradas.filter(
    (r) => r.estado.toLowerCase() === "pendiente",
  ).length;
  const cubiertosTotales = reservasFiltradas.reduce(
    (acc, curr) => acc + curr.comensales,
    0,
  );
  const canceladas = reservasFiltradas.filter(
    (r) => r.estado.toLowerCase() === "cancelada",
  ).length;
  const confirmadas = reservasFiltradas.filter(
    (r) => r.estado.toLowerCase() === "confirmada",
  ).length;

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

        {/* ESTRUCTURA MODIFICADA: Tarjetas y Calendario en la parte superior para liberar ancho a la tabla */}
        <div className="flex flex-col xl:flex-row gap-6 mb-8">
          {/* SECCIÓN KPIS (2/3 ancho en desktop) */}
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
                <span className="font-bold text-xs">
                  Seleccionadas en vista
                </span>
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
                <span className="material-symbols-outlined text-[16px]">
                  group
                </span>
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
                <span className="material-symbols-outlined text-[16px]">
                  cancel
                </span>
                <span className="font-bold text-xs">En la vista actual</span>
              </div>
            </div>
          </div>

          {/* SECCIÓN CALENDARIO (1/3 ancho en desktop) */}
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

                // Lógica de Lunes
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
              <span className="flex items-center gap-1 text-red-400">
                {" "}
                Cerrado
              </span>
            </div>
          </div>
        </div>

        {/* TABLA DE RESERVAS (Ahora 100% width) */}
        <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-5 md:p-6 border-b border-gray-100 flex flex-wrap gap-4 items-center justify-between bg-white">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-titacosi-primary">
              Listado de Reservas
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setModoVista(modoVista === "dia" ? "todas" : "dia")
                }
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
                    {columnaOrden === "comensales" &&
                      (ordenAscendente ? "↑" : "↓")}
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

                    // Colores del selector según estado
                    let estadoColor =
                      "bg-amber-100 text-amber-800 border-amber-200";
                    if (reserva.estado.toLowerCase() === "confirmada")
                      estadoColor =
                        "bg-green-100 text-green-800 border-green-200";
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
                          {/* SELECTOR DE ESTADO INTERACTIVO */}
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
                          {/* ACCIONES SIEMPRE VISIBLES */}
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
                              onClick={() => eliminarReserva(reserva.id)}
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
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="absolute inset-0 bg-titacosi-primary/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl bg-white sm:rounded-3xl shadow-2xl z-10 max-h-[90vh] flex flex-col rounded-t-3xl sm:rounded-b-3xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-20 rounded-t-3xl">
              <h2 className="font-serif text-2xl md:text-3xl text-titacosi-primary font-bold">
                {reservaEditando ? "Editar Reserva" : "Nueva Reserva"}
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
                      defaultValue={
                        reservaEditando?.nombre_cliente.split(" ")[0] || ""
                      }
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
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
                    />
                  </div>
                  <div>
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
                      defaultValue={
                        reservaEditando?.fecha
                          ? reservaEditando.fecha.split("T")[0]
                          : fechaSeleccionada
                      }
                      onChange={(e) => {
                        const date = new Date(e.target.value);
                        // Usar UTCDay para que la zona horaria del navegador no desplace el día seleccionado del input type date
                        if (date.getUTCDay() === 1) {
                          alert("Los lunes la taberna permanece cerrada.");
                          e.target.value = "";
                        }
                      }}
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
                      defaultValue={reservaEditando?.hora || "14:30"}
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      type="time"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Comensales
                    </label>
                    <input
                      required
                      name="comensales"
                      defaultValue={reservaEditando?.comensales || 2}
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm"
                      min="1"
                      max="20"
                      type="number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                      Asignar Mesa Exacta
                    </label>
                    <select
                      required
                      name="mesa_id"
                      defaultValue={reservaEditando?.mesa_id || ""}
                      className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="">-- Seleccionar mesa --</option>
                      <optgroup label="Sala Interior">
                        {TABLES.filter((t) => t.zone === "Sala").map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} (Max {t.capacity} pax)
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Terraza Exterior">
                        {TABLES.filter((t) => t.zone === "Terraza").map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.name} (Max {t.capacity} pax)
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {reservaEditando ? (
                    <div>
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

                <div>
                  <label className="font-bold text-[11px] uppercase text-gray-500 mb-1.5 block">
                    Notas / Peticiones
                  </label>
                  <textarea
                    name="peticiones"
                    defaultValue={reservaEditando?.notas || ""}
                    className="w-full bg-[#f4f3f1] border-transparent focus:bg-white focus:border-titacosi-accent focus:ring-1 focus:ring-titacosi-accent rounded-xl px-4 py-3 outline-none transition-all text-sm resize-none"
                    placeholder="Alergias, trona, confirmada por teléfono..."
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
