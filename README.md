# Taberna Tita Cosi - Web App

Repositorio oficial del frontend para la página web de **Taberna Tita Cosi**, desarrollada con una arquitectura moderna orientada al rendimiento, SEO técnico (i18n) y animaciones fluidas.

## 🚀 Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) (Generación estática para máximo rendimiento y SEO).
- **Librería de UI:** [React 19](https://react.dev/) (Componentes interactivos).
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first CSS, configurado mediante CSS Variables).
- **Animaciones:** [GSAP](https://gsap.com/) + ScrollTrigger (Motion design avanzado).
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/) (Scroll fluido nativo).
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/) (Rápido y eficiente con el espacio en disco).

## 📁 Arquitectura del Proyecto

El proyecto sigue una estructura modular dentro de `src/`:

- `components/astro/`: Componentes estáticos puros (ej. Footer) para enviar 0kb de JS al cliente.
- `components/react/`: Componentes interactivos segregados por vista (`home/`, `carta/`, etc.) y una carpeta `ui/` para componentes reutilizables.
- `i18n/`: Diccionario de traducciones estáticas y utilidades para detección de idioma en la URL.
- `pages/[lang]/`: Enrutamiento dinámico generado estáticamente para SEO en múltiples idiomas (ej. `/es/contacto`, `/en/contacto`).

## 🛠️ Instalación y Entorno de Desarrollo

### Requisitos previos

- Node.js (v18 o superior)
- `pnpm` instalado globalmente (`npm install -g pnpm`)

### Pasos para iniciar

1. **Clonar el repositorio:**

   ```bash
   git clone <https://github.com/Qualisophy/tita-cosi>
   cd tita-cosi
   ```

2. **Instalar las dependencias:**

   ```bash
   pnpm install
   ```

3. **Arrancar el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

4. **Abrir en navegador**

El entorno estará disponible por defecto en (http://localhost:4321). La raíz redirigirá automáticamente al idioma por defecto (/es).

### Comandos disponibles

Todos los comandos se ejecutan con pnpm:

```bash
pnpm dev #inicia el servidor de desarrollo local.

pnpm build #compila el sitio para producción en la carpeta dist/.

pnpm preview #previsualiza localmente el build generado para producción.

pnpm astro check #analiza el proyecto en busca de errores de tipos de typescript.
```
