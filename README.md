# Kortline — CB Jaca

PWA single-file de gestión de asistencia y estadísticas de partido.
Desarrollada por **Mario Nadal Ara** · Stack: HTML + CSS + Vanilla JS · Datos en `localStorage`

Repositorio: [github.com/MarioNadal/kortline-app](https://github.com/MarioNadal/kortline-app)

---

## Historial de versiones

### v1.6.1 — Plantilla con fotos, lesiones y filtro de asistencia _(actual)_

**Plantilla (EQUIPOS)**

- **Foto/avatar del jugador (opcional)** — círculo arriba del modal de jugador. Se muestra también junto al dorsal en la plantilla y en el pase de lista. Botón ✕ para quitarla.
- **Indicador visual de lesión** — check dedicado "🚑 Lesionado" en el modal. En la plantilla aparece una chincheta roja animada sobre el dorsal y un badge 🚑 junto al nombre. Se sincroniza bidireccionalmente con la palabra "lesionado" en notas para no romper datos existentes.
- **Dorsal rediseñado** — input numérico con prefijo `#` visible, botones `−/+` para ajustar con el pulgar, y sugerencia automática del próximo dorsal libre (placeholder dinámico al crear jugador).
- **Orden por dorsal ascendente** — jugadores sin número van al final, el `0` se respeta correctamente.

**Asistencia (pase de lista)**

- **Contadores clicables como filtro** — las 4 cajas PRES/AUSE/TARD/JUST filtran la lista al pulsar. La caja activa se resalta con glow, borde grueso y un ✓ en la esquina. Contadores con valor 0 no son clicables.
- **Banner de filtro** con recordatorio del estado activo y botón "✕ Todos" para desfiltrar.
- **Botones "Todos presentes/ausentes" eliminados** — sustituidos por un enlace discreto "↺ Resetear a presentes" que solo aparece si hay cambios respecto al default, con confirmación previa para evitar resets accidentales.
- **Filtro efímero** — se limpia al cambiar de fecha, al salir de la pantalla o al aplicar un reset. No se persiste en localStorage.
- Indicador visual de lesión también en el pase de lista (junto al dorsal + badge en nombre).

**Modal de equipo**

- **Checkbox de día se activa solo al escribir la hora** — antes había que marcar el día primero para habilitar el input de hora. Ahora el input está siempre activo y al rellenarlo se marca automáticamente el día.
- Input de hora ya no se deshabilita.

**UX / diseño**

- **Modales centrados con ancho máximo 430px en desktop** — antes se estiraban a todo el viewport rompiendo el look mobile-first.
- **Color picker del equipo usa la paleta oficial Kortline** (`#F06318`).
- Reemplazo global del naranja antiguo (`#ff6b1a`) por el oficial (`#F06318`) en todo el código: CSS, inline styles, Chart.js, PDFs y SVG.

**Bugs resueltos y mejoras v1.6.1**

| ID | Descripción | Versión |
|----|-------------|---------|
| B-15 | Modales se estiraban más allá del frame 430px en desktop | v1.6.1 |
| B-16 | Horarios del equipo no se guardaban si rellenabas la hora sin marcar el día antes | v1.6.1 |
| B-17 | Color picker del equipo usaba el naranja antiguo (`#ff6b1a`) | v1.6.1 |

---

### v1.6.0 — Setup del partido y UX general

**Convocatoria y quinteto**

- **Picker de quinteto bloqueante** — si intentas entrar al seguimiento en vivo con menos de 5 jugadores en pista, aparece un picker de 5 slots directamente en pantalla. Cada slot vacío tiene un botón `+` que abre el listado de convocados disponibles. El botón "▶ Empezar partido" solo se activa con los 5 rellenos. Sin 5 titulares no se puede entrar.
- **Validaciones en cadena en "Listo"** — al pulsar el botón final del wizard de convocatoria se verifican en orden: sin convocados → menos de 5 convocados → menos de 5 titulares → sin capitán. Cada aviso tiene botón primario naranja para volver a corregir y botón gris para continuar si el entrenador lo decide conscientemente.
- **Banner del capitán prominente** — el wizard muestra siempre el estado del capitán con nota FIBA: "Dirige el equipo si el entrenador es expulsado". Verde si está designado, amarillo si no.
- **"Volver a elegir"** dirige al step 0 (nuestro equipo) automáticamente.

**Live game**

- **Bloqueo de cuartos futuros** — los tabs Q2/Q3/Q4 aparecen en gris y desactivados hasta que el reloj avanza a ese cuarto. Se puede volver a cuartos pasados para revisar o añadir acciones. Campo `live.maxQ` trackea el cuarto más alto alcanzado.
- **"Continuar partido"** aparece desde que se entra al seguimiento en vivo por primera vez, sin esperar a que haya acciones ni marcador.
- **Deselección automática** — al registrar cualquier acción, el jugador se deselecciona automáticamente. Ya no se queda marcado en naranja.

**Bugs resueltos**

| ID | Descripción | Versión |
|----|-------------|---------|
| B-10 | Se podía entrar al live game con 3 jugadores en pista en 5vs5 | v1.6.0 |
| B-11 | Saltar a Q4 sin haber jugado Q1 era posible | v1.6.0 |
| B-12 | "Empezar partido" en vez de "Continuar" aunque el partido estuviera iniciado | v1.6.0 |
| B-13 | Jugador seleccionado no se deseleccionaba al registrar acción | v1.6.0 |
| B-14 | `deleteLogEntry` no manejaba acción 'sub' (sustitución TM) | v1.6.0 |

---

### v1.5.x — Reloj, descansos, TM, navegación y Android

**v1.5.8 — Features recuperadas de v1.4.0**
- Historial de acciones agrupado por cuartos (secciones colapsables, badge EN CURSO, resumen de parciales)
- Landscape stats: header con marcador grande + diferencia en color, pills de parciales por cuarto (Q1 8–6 ✅), safe-area insets iOS, fila de totales en ambas tablas (nuestro equipo y rival)
- Fix B-02: nombre del equipo en el tab de stats del live game (ya no dice "Nuestro equipo")

**v1.5.6 — Compatibilidad Android**
- `touch-action: manipulation` global en todos los botones — elimina el retraso de 300ms
- Área táctil extendida a ~44px en botones de 22px (pseudo-elemento `::after`)
- `appearance: none` sin prefijo en todos los inputs y selects
- Select con flecha SVG custom — se ve igual en iOS y Android
- `min-height: 100dvh` con fallback `100vh`

**v1.5.5 — Steppers de marcador**
- Inputs de cuartos sustituidos por botones +/− táctiles
- Toca el número para escribir directamente (inline edit con flag anti-doble-commit)
- Editor del reloj: mismos steppers +/− con inputs editables
- Todos los `type="number"` restantes → `type="text" inputmode="numeric"`

**v1.5.4 — Navegación por pila**
- Sistema `navTo/navBack/navRoot` — el botón ← siempre vuelve exactamente al sitio de donde vienes
- `hist → share → ←` va a `hist`, no a `att`
- Navbar limpia la pila (navegación raíz)

**v1.5.1 — Tiempo muerto rediseñado**
- Overlay pantalla completa con cuenta atrás 1:00
- Dots de TMs restantes por equipo y mitad (2 primera mitad, 3 segunda)
- Quinteto en pista con sustituciones durante el TM
- Reglamento FEB amateur: 1 min TM, 2+3 por mitad

**v1.5.0 — Reloj y descansos FEB**
- Aviso de 10 segundos
- Overlay de fin de cuarto con acciones del último segundo antes del descanso
- Tiempos FEB amateur: Q1↔Q2 y Q3↔Q4 = 1 min, medio tiempo = 10 min
- Break overlay: modal centrado pantalla completa (fix visibilidad iOS)
- Fix `clockRunning` al salir de liveGame — botón muestra ▶ no ⏸ al volver

**Bugs resueltos v1.5.x**

| ID | Descripción | Versión |
|----|-------------|---------|
| B-01 | T.M. no paraba reloj ni mostraba countdown | v1.3.1 |
| B-02 | "Nuestro equipo" hardcodeado en toggle stats | v1.5.8 |
| B-03 | Overlay T.M. tapado por landscape stats | v1.3.1 |
| B-04 | Sin fila de totales en pantalla completa | v1.5.8 |
| B-05 | Totales rival usaban reductor del equipo local | v1.4.0 |
| B-06 | Overlay de descanso oculto tras navbar en iOS | v1.5.0 |
| B-07 | Descanso entre cuartos no respetaba tiempos FEB | v1.5.0 |
| B-08 | Sin aviso visual a 10 segundos | v1.5.0 |
| B-09 | Descanso arrancaba sin permitir acciones del último segundo | v1.5.0 |

---

### v1.4.0

- Tiempo muerto con cuenta atrás
- Historial de acciones agrupado por cuartos
- Pantalla completa landscape stats rediseñada

### v1.0.0 – v1.3.x

- Pase de lista, gestión de equipos y jugadores
- Partidos con marcador manual y seguimiento en vivo
- Stats individuales, convocatoria, titulares
- Compartir por WhatsApp
- Exportar/importar backup JSON

---

## Archivos

```
index.html                    App completa (single-file)
manifest.json                 PWA manifest
sw.js                         Service worker (offline)
assets/logos/
  logo-icon.svg               Icono 512×512
  logo-full.svg               Logo horizontal 880×240
README.md                     Este archivo
MANUAL_USUARIO_KORTLINE.md    Manual de usuario
```

## Pendiente próximas versiones

- Touch drag-to-dismiss en modales (el `mhandle` es decorativo, no funciona en iOS/Android PWA)
- Visualización de sesiones pasadas/completadas en HOY
- Botón `+` en HOY para entrenamientos/partidos sorpresa fuera de horario
- Reetiquetar título de HOY con nombre del club (o marca de agua del logo)
