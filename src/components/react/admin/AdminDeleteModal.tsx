// src/components/react/admin/AdminDeleteModal.tsx
import React from "react";
import type { Reserva } from "./admin.types";
import { extraerFechaLocal, formatearFecha } from "./admin.utils";

interface AdminDeleteModalProps {
  reserva: Reserva | null;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  isDeleting: boolean;
}

export default function AdminDeleteModal({
  reserva,
  onClose,
  onConfirm,
  isDeleting,
}: AdminDeleteModalProps) {
  if (!reserva) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-titacosi-primary/60 backdrop-blur-sm transition-opacity"
        onClick={!isDeleting ? onClose : undefined}
      ></div>

      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl z-10 p-6 sm:p-8 text-center animate-fade-in-up">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-red-100">
          <span className="material-symbols-outlined text-3xl text-red-500">
            warning
          </span>
        </div>

        <h2 className="font-serif text-2xl text-titacosi-primary font-bold mb-2">
          ¿Eliminar Reserva?
        </h2>

        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          Estás a punto de eliminar la reserva de{" "}
          <strong className="text-titacosi-primary">
            {reserva.nombre_cliente}
          </strong>{" "}
          para el{" "}
          <strong>{formatearFecha(extraerFechaLocal(reserva.fecha))}</strong> a
          las <strong>{reserva.hora}h</strong>.<br />
          <br />
          Esta acción no se puede deshacer.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-xl font-bold text-sm transition-colors disabled:opacity-50"
          >
            CANCELAR
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isDeleting ? (
              <>
                <span className="material-symbols-outlined text-[18px] animate-spin">
                  sync
                </span>{" "}
                Borrando...
              </>
            ) : (
              "ELIMINAR"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
