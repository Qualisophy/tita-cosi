// src/components/react/admin/admin.utils.ts
export const extraerFechaLocal = (fechaString: string) => {
  if (!fechaString) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(fechaString)) return fechaString;

  const d = new Date(fechaString);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export const formatearFecha = (fechaISO: string) => {
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
