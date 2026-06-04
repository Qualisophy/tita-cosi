// src/components/react/admin/admin.types.ts
export interface Reserva {
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

export type Zone = "Sala" | "Terraza";

export interface Table {
  id: string;
  name: string;
  capacity: number;
  zone: Zone;
}

export const TABLES: Table[] = [
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
