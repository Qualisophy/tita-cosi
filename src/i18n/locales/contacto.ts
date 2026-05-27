export const languages = {
  es: "ES",
  en: "EN",
  fr: "FR",
  de: "DE",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "contacto.mapa.titulo": "Nuestra Ubicación",
    "contacto.titulo": "Hablemos",
    "contacto.direccion.titulo": "DIRECCIÓN",
    "contacto.direccion": "Av. del Editor Ángel Caffarena, 13, Teatinos, 29010 Málaga.",
    "contacto.telefono.titulo": "TELÉFONO / WHATSAPP",
    "contacto.telefono": "+34 667 94 02 60",
    "contacto.email.titulo": "EMAIL",
    "contacto.email": "hola@tabernatitacosi.es",
    "contacto.horario.titulo": "HORARIO",
    "contacto.horario":
      "Mar - Jue: 13:00 - 16:30 | 20:00 - 23:30\nVie - Sáb: 13:00 - 00:00\nDom: 13:00 - 17:00\nLun: Cerrado",
    "contacto.form.nombres.titulo": "Nombre y Apellidos",
    "contacto.form.nombres.textoAyuda": "Tu nombre completo",
    "contacto.form.email.titulo": "Email",
    "contacto.form.email.textoAyuda": "tu@email.com",
    "contacto.form.mensaje.titulo": "Mensaje",
    "contacto.form.mensaje.textoAyuda":
      "Cuéntanos cómo podemos ayudarte...",
    "contacto.form.boton.titulo": "Enviar Mensaje",
  },
  en: {
    "contacto.mapa.titulo": "Our Location",
    "contacto.titulo": "Let's Talk",
    "contacto.direccion.titulo": "ADDRESS",
    "contacto.direccion": "Av. del Editor Ángel Caffarena, 13, Teatinos, 29010 Málaga.",
    "contacto.telefono.titulo": "PHONE / WHATSAPP",
    "contacto.telefono": "+34 667 94 02 60",
    "contacto.email.titulo": "EMAIL",
    "contacto.email": "hola@tabernatitacosi.es",
    "contacto.horario.titulo": "OPENING HOURS",
    "contacto.horario":
      "Tue - Thu: 13:00 - 16:30 | 20:00 - 23:30\nFri - Sat: 13:00 - 00:00\nSun: 13:00 - 17:00\nMon: Closed",
    "contacto.form.nombres.titulo": "Full Name",
    "contacto.form.nombres.textoAyuda": "Your full name",
    "contacto.form.email.titulo": "Email",
    "contacto.form.email.textoAyuda": "your@email.com",
    "contacto.form.mensaje.titulo": "Message",
    "contacto.form.mensaje.textoAyuda": "Tell us how we can help you...",
    "contacto.form.boton.titulo": "Send Message",
  },
  fr: {
    "contacto.mapa.titulo": "Notre emplacement",
    "contacto.titulo": "Discutons",
    "contacto.direccion.titulo": "ADRESSE",
    "contacto.direccion": "Av. del Editor Ángel Caffarena, 13, Teatinos, 29010 Málaga.",
    "contacto.telefono.titulo": "TÉLÉPHONE / WHATSAPP",
    "contacto.telefono": "+34 667 94 02 60",
    "contacto.email.titulo": "E-MAIL",
    "contacto.email": "hola@tabernatitacosi.es",
    "contacto.horario.titulo": "HORAIRES D'OUVERTURE",
    "contacto.horario":
      "Mar - Jeu : 13:00 - 16:30 | 20:00 - 23:30\nVen - Sam : 13:00 - 00:00\nDim : 13:00 - 17:00\nLun : Fermé",
    "contacto.form.nombres.titulo": "Nom et prénom",
    "contacto.form.nombres.textoAyuda": "Votre nom complet",
    "contacto.form.email.titulo": "E-mail",
    "contacto.form.email.textoAyuda": "votre@email.com",
    "contacto.form.mensaje.titulo": "Message",
    "contacto.form.mensaje.textoAyuda":
      "Dites-nous comment nous pouvons vous aider...",
    "contacto.form.boton.titulo": "Envoyer le message",
  },
  de: {
    "contacto.mapa.titulo": "Unser Standort",
    "contacto.titulo": "Lass uns reden",
    "contacto.direccion.titulo": "ADRESSE",
    "contacto.direccion": "Av. del Editor Ángel Caffarena, 13, Teatinos, 29010 Málaga.",
    "contacto.telefono.titulo": "TELEFON / WHATSAPP",
    "contacto.telefono": "+34 667 94 02 60",
    "contacto.email.titulo": "E-MAIL",
    "contacto.email": "hola@tabernatitacosi.es",
    "contacto.horario.titulo": "ÖFFNUNGSZEITEN",
    "contacto.horario":
      "Di - Do: 13:00 - 16:30 | 20:00 - 23:30\nFr - Sa: 13:00 - 00:00\nSo: 13:00 - 17:00\nMo: Geschlossen",
    "contacto.form.nombres.titulo": "Vor- und Nachname",
    "contacto.form.nombres.textoAyuda": "Ihr vollständiger Name",
    "contacto.form.email.titulo": "E-Mail",
    "contacto.form.email.textoAyuda": "ihre@email.com",
    "contacto.form.mensaje.titulo": "Nachricht",
    "contacto.form.mensaje.textoAyuda":
      "Teilen Sie uns mit, wie wir Ihnen helfen können...",
    "contacto.form.boton.titulo": "Nachricht senden",
  },
};


export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return (ui[lang] as Record<string, string>)[key] || ui[defaultLang][key];
  };
}