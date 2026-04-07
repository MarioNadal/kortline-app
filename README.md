# Kortline — De la Pista al Dato

> Aplicación PWA de gestión para clubes de baloncesto. Desarrollada a partir de la app interna del **CB Jaca** (Jaca, Huesca, Aragón).

---

## ¿Qué es Kortline?

Kortline es una **Progressive Web App (PWA)** de gestión deportiva pensada para entrenadores y coordinadores de clubes de baloncesto. Funciona directamente desde el navegador sin instalación, y puede añadirse a la pantalla de inicio como si fuera una app nativa.

Todo ocurre en un único archivo `index.html` — sin servidores, sin base de datos, sin dependencias externas que instalar. Los datos se guardan localmente en el dispositivo.

---

## Funcionalidades

### 🏠 Pantalla de inicio — Hoy
Vista diaria con los equipos que entrenan hoy según su horario semanal configurado. Acceso rápido a pasar lista o compartir resumen.

### 👥 Gestión de equipos
Crea y gestiona múltiples equipos, cada uno con sus jugadores, horario semanal y configuración propia.

### ✅ Pase de lista
Registro de asistencia por equipo y fecha. Permite marcar presencia, ausencia justificada o ausencia, añadir notas por jugador, adjuntar foto de la sesión y valorar el entrenamiento (individual y colectivo).

### 📊 Estadísticas
Datos de asistencia por jugador: porcentaje de presencia, rachas de ausencias, alerta de riesgo FEB. Disponible en vista tabla o vista gráfica (Chart.js).

### 📋 Historial
Listado completo de sesiones registradas con filtros por mes. Acceso directo a editar cualquier sesión pasada o compartirla.

### 📤 Compartir por WhatsApp
Generación automática de resúmenes para compartir — versión padres (quién ha venido) y versión interna (datos completos).

### 🏟️ Partidos
Gestión del calendario de partidos por equipo. Registro de resultados y detalle de cada encuentro.

### 🔴 Marcador en vivo
Pantalla de marcador con reloj de juego, control de períodos, tiempos muertos y registro en tiempo real.

### 📤 Exportación
Exporta los datos a **PDF** (jsPDF + autotable) o **Excel** (SheetJS/XLSX).

---

## Tecnología

| Elemento | Detalle |
|---|---|
| Arquitectura | Single-file PWA (`index.html`) |
| Lenguajes | HTML · CSS · JavaScript (vanilla) |
| Datos | `localStorage` del dispositivo |
| Gráficas | [Chart.js 4.4](https://www.chartjs.org/) |
| Exportar PDF | [jsPDF](https://github.com/parallax/jsPDF) + autotable |
| Exportar Excel | [SheetJS / xlsx](https://sheetjs.com/) |
| Tipografías | Barlow Condensed · DM Sans (Google Fonts) |
| Paleta | `#F06318` naranja · `#0d2244` navy · `#070f1e` fondo |

---

## Estructura del proyecto

```
kortline/
├── index.html          ← App completa (single-file PWA)
├── manifest.json       ← Configuración PWA
├── sw.js               ← Service Worker (caché offline)
├── README.md
└── assets/
    └── logos/
        ├── logo-icon.svg   ← Icono 512×512 (tablero + aro + balón)
        └── logo-full.svg   ← Logo horizontal con texto KORTLINE
```

---

## Uso

1. Clona el repositorio o descarga `index.html`
2. Ábrelo en cualquier navegador moderno
3. O despliégalo en cualquier hosting estático (GitHub Pages, Netlify, Vercel…)

**En móvil:** "Añadir a pantalla de inicio" para instalar como app nativa.

No requiere servidor, base de datos ni configuración. Listo para usar.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| v0.9 | Mar 2026 | App interna CB Jaca — pase de lista y asistencia |
| v1.0.0 | Abr 2026 | Rebrand a Kortline, logos SVG v1, partidos, marcador en vivo, exportación PDF/Excel |
| v1.1.0 | Abr 2026 | Sistema de backup/restore: export JSON, import, recordatorio automático cada 7 días, compartir backup por WhatsApp/iCloud/Drive |

---

## Autor

**Mario Nadal Ara**  
Fundador y Desarrollador — Kortline  
CB Jaca · Jaca, Huesca, Aragón  
[github.com/MarioNadal](https://github.com/MarioNadal)

---

*Kortline — De la Pista al Dato*
