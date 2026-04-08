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
Gestión del calendario de partidos por equipo. Registro de resultados con marcador por cuartos. El resultado (Victoria/Derrota/Empate) y el marcador se actualizan en tiempo real mientras se introducen las puntuaciones — sin necesidad de guardar manualmente.

### 🔴 Marcador en vivo
Pantalla de marcador con reloj de juego, control de periodos, estadísticas individuales en tiempo real y seguimiento completo del partido.

### ⏱️ Tiempo muerto con cuenta atrás
Al registrar un tiempo muerto, el reloj se detiene automáticamente y aparece un contador de **60 segundos** con el nombre del equipo que lo pide. Botón "▶ Reanudar" para adelantar el minuto. El overlay es visible incluso en pantalla completa de estadísticas.

### ⏱️ Prórroga (OT)
Al terminar el último cuarto en empate, la app detecta la situación automáticamente y ofrece activar la prórroga. Soporte para OT1, OT2, OT3... Las pestañas de OT solo aparecen si realmente se juegan.

### 📋 Historial de acciones por cuarto
El historial del partido en vivo agrupa las acciones por cuarto con secciones desplegables. El cuarto en curso aparece abierto por defecto; los anteriores aparecen cerrados mostrando un resumen (`+8 pts / -5`). Cada acción muestra dorsal, nombre, tipo y puntos.

### 📊 Estadísticas en pantalla completa
Tabla de estadísticas landscape con fila de totales para ambos equipos, marcador prominente con diferencia, desglose de parciales por cuarto y soporte de safe-area para iPhone con muesca en horizontal.

### 📊 Compartir resultado de partido
Desde el detalle del partido y desde el marcador en vivo, comparte el resultado por WhatsApp con marcador, diferencia (+/−), desglose por cuartos y lema del club.

### 📅 Eventos y Convocatorias
Gestión de eventos por equipo: partidos, tecnificaciones o cualquier otro tipo de convocatoria. Selección de jugadores con sugerencia automática basada en el porcentaje de asistencia.

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
├── index.html                    ← App completa (single-file PWA)
├── manifest.json                 ← Configuración PWA
├── sw.js                         ← Service Worker (caché offline)
├── README.md
├── MANUAL_USUARIO_KORTLINE.md    ← Manual de usuario
└── assets/
    └── logos/
        ├── logo-icon.svg
        └── logo-full.svg
```

---

## Uso

1. Clona el repositorio o descarga `index.html`
2. Ábrelo en cualquier navegador moderno
3. O despliégalo en cualquier hosting estático (GitHub Pages, Netlify, Vercel…)

**En móvil:** "Añadir a pantalla de inicio" para instalar como app nativa.

---

## Historial de versiones

| Versión | Fecha | Descripción |
|---|---|---|
| v0.9 | Mar 2026 | App interna CB Jaca — pase de lista y asistencia |
| v1.0.0 | Abr 2026 | Rebrand a Kortline, logos SVG v1, partidos, marcador en vivo, exportación PDF/Excel |
| v1.1.0 | Abr 2026 | Sistema de backup/restore: export JSON, import, recordatorio automático, compartir backup |
| v1.2.0 | Abr 2026 | Eventos y convocatorias por WhatsApp, sugerencia automática por asistencia, configuración de abreviatura y lema del club |
| v1.3.0 | Abr 2026 | Compartir resultado de partido con marcador en vivo, OT dinámica detectada automáticamente por empate |
| v1.3.1 | Abr 2026 | Correcciones UX: marcador y badge en tiempo real, auto-guardado, OT solo visible si necesaria, sincronización bidireccional live↔manual |
| v1.4.0 | Abr 2026 | T.M. con cuenta atrás de 60s, historial de acciones agrupado por cuartos, pantalla completa de stats mejorada (totales, parciales, safe-area), nombre del equipo en toggle de stats |

---

## Bugs conocidos resueltos en v1.4.0

| # | Descripción | Versión detectada | Fix |
|---|---|---|---|
| B-01 | T.M. no paraba el reloj ni mostraba cuenta atrás | v1.3.1 | `addTimeout()` para reloj + overlay 60s |
| B-02 | "Nuestro equipo" hardcodeado en toggle de stats del marcador en vivo | v1.3.1 | Sustituido por `t.name` |
| B-03 | Overlay de T.M. quedaba tapado por pantalla completa de stats (z-index igual) | v1.3.1 | T.M. z-index 9990 → 9995 |
| B-04 | Pantalla completa de stats sin fila de totales (variable `totPts` calculada pero no renderizada) | v1.0.0 | Añadida fila `totrow` en ambas tablas |
| B-05 | Totales de la tabla del rival usaban el reductor del equipo local (`totSt`) | v1.0.0 | Refactorizado a `sumSt(plist, statsObj, fn)` |

---

## Autor

**Mario Nadal Ara**  
Fundador y Desarrollador — Kortline  
CB Jaca · Jaca, Huesca, Aragón  
[github.com/MarioNadal](https://github.com/MarioNadal)

---

*Kortline — De la Pista al Dato*
