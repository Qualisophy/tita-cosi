import React, { useState } from "react";

interface ContactFormProps {
  translations: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const apiBaseUrl =
        import.meta.env.PUBLIC_API_URL ||
        "https://tita-cosi-backend.onrender.com/api";

      const response = await fetch(`${apiBaseUrl}/contacto`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, tipo_formulario: "contacto" }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm w-full h-full flex flex-col items-center justify-center min-h-96">
        <span className="material-symbols-outlined text-accent text-6xl mb-4">
          check_circle
        </span>
        <p className="text-primary font-bold text-xl text-center mb-2">
          ¡Gracias por contactarnos!
        </p>
        <p className="text-gray-600 text-center">
          {translations.successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-primary underline font-medium hover:text-accent transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-8 sm:p-10 rounded-xl shadow-sm w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nombre */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="nombre"
            className="text-[15px] font-bold text-gray-800"
          >
            {translations.nameLabel} <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder={translations.namePlaceholder}
            required
            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="telefono"
            className="text-[15px] font-bold text-gray-800"
          >
            {translations.phoneLabel} <span className="text-accent">* </span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder={translations.phonePlaceholder}
            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="email"
            className="text-[15px] font-bold text-gray-800"
          >
            {translations.emailLabel} <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={translations.emailPlaceholder}
            required
            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label
            htmlFor="mensaje"
            className="text-[15px] font-bold text-gray-800"
          >
            {translations.messageLabel} <span className="text-accent">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder={translations.messagePlaceholder}
            required
            rows={5}
            className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-y"
          ></textarea>
        </div>
      </div>

      {status === "error" && (
        <p className="text-accent text-sm mt-4 bg-red-50 p-3 rounded">
          {translations.errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-8 bg-[#8C3B3B] text-white text-[16px] font-bold py-4 rounded-md hover:bg-[#a04444] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : translations.submitButton}
      </button>
    </form>
  );
}
