# Kortline — CB Jaca

PWA single-file de gestión de asistencia y estadísticas de partido.
Desarrollada por **Mario Nadal Ara** · Stack: HTML + CSS + Vanilla JS · Datos en `localStorage`

Repositorio: [github.com/MarioNadal/kortline-app](https://github.com/MarioNadal/kortline-app)

---

## Historial de versiones

### v1.6.8 — Valoración colectiva inteligente, info FEB y bottom sheets _(actual)_

**Valoración colectiva auto-calculada**

- Cuando ambas features están activas (⭐ colectiva + 👤 individual), la valoración del equipo se calcula automáticamente como la **media de las valoraciones individuales**. Badge verde `🔗 Auto` indica el modo.
- Para editar manualmente: **pulsación larga** (0.8s) en el botón ✏️ con anillo de progreso SVG. Las estrellas pasan a modo clickable con badge naranja `✏️ Manual`.
- Botón `🔗 Volver a modo automático` para revertir. Si solo la colectiva está activa (sin individual), funciona igual que antes (estrellas libres).
- Se persiste `_teamScoreManual: true` en la sesión para respetar overrides manuales.

**Indicador Riesgo FEB interactivo**

- La caja de "Riesgo FEB" en estadísticas ahora es **clickable** (icono ⓘ). Al pulsarla se abre un modal explicativo con la definición según la FEB, el umbral configurado, y la leyenda de colores.

**Drag-to-dismiss en bottom sheets**

- Todos los modales con `.mhandle` (barrita de arrastre) ahora soportan **arrastre hacia abajo** para cerrarlos. Umbral de 120px con transición suave y fade del overlay.
- Animación de entrada `modalSlideUp` al abrir cualquier bottom sheet.
- `.mhandle` con `cursor:grab` y `touch-action:none` para feedback visual.

**Fix: umbral FEB como string**

- `parseInt()` defensivo al cargar `riskThreshold` desde localStorage para evitar comparaciones string vs número.

**Bugs resueltos v1.6.8**

| ID | Descripción |
|----|-------------|
| B-31 | Umbral FEB podía guardarse como string en localStorage y compararse incorrectamente con valores numéricos |
| B-32 | Las barritas de arrastre (mhandle) de los bottom sheets eran puramente decorativas — no se podían cerrar arrastrando |

---

### v1.6.7 — Lesiones: botón dedicado, backfill, alta rápida y fixes

Iteración grande sobre la gestión de lesiones que unifica lo trabajado en las
ramas internas v1.6.4 → v1.6.7 (todo entra en un único release público sobre
v1.6.3).

**Botón 🚑 independiente en la plantilla**

- La marca de lesión sale del modal de editar jugador. Aparece un botón 🚑 dedicado entre ✏️ y 🗑 en cada fila. Gris si está sano, rojo si está lesionado.
- El modal de ✏️ Editar vuelve a ser solo foto, nombre, dorsal, posición, notas.
- El botón 🚑 cambia de comportamiento según el estado del jugador:
  - **Sano** → modal "Marcar lesión" (fecha + origen + explicación).
  - **Lesionado** → mini-modal con resumen (días lesionado, desde, origen, nota) y tres acciones: ✅ Dar de alta médica, ✏️🚑 Editar datos de la lesión, Cerrar. El alta se da en un solo click.

**Backfill automático de asistencia**

- Nueva función `applyInjuryToSessions()`. Al guardar una lesión, todas las sesiones del equipo entre `startDate` y hoy se marcan como `excused` con motivo 🤕 Lesión. La explicación del modal se propaga como nota `_jn` en cada sesión — así se ve al consultar justificaciones en el pase de lista.
- Al dar el alta médica se vuelve a pasar el backfill hasta la fecha del alta (inclusive), se archiva en `p.injuryHistory[]` con `endDate` y `days`, y se limpia `p.injury`.
- Si el entrenador cambia `startDate` a posteriori, las marcas `_jr="injury"` que queden fuera del nuevo rango se limpian automáticamente (y se borra también `excused` si solo estaba por la lesión).
- Fin del bug de "asistencia que baja tras recuperarse": durante la baja no se penaliza, y tras el alta el histórico refleja la realidad.

**Badge 🚑 consciente de la fecha**

- Nuevo helper `isInjuredOn(p, date)`. En el pase de lista, el 🚑 junto al nombre y el `!` rojo en el número solo aparecen si la fecha actual es ≥ `injury.startDate`.
- Al pasar lista en sesiones previas a la lesión, el jugador ya no aparece marcado como lesionado (antes sí, y confundía).

**Formato compacto en la fila de la plantilla**

- Antes: "🚑 Lesionado desde jueves, 10 de abril de 2026 · 🏀 Entreno" — se cortaba en móvil.
- Ahora: "🚑 10/04 (6d)". El tooltip del badge sigue dando la fecha completa.

**Snapshot FEB**

- Al activar la lesión se congela el % de asistencia previo en `snapshotPct` + `snapshotWasAtRisk`. Si ya estaba en riesgo antes de lesionarse, sigue apareciendo en ⚠️ Riesgo FEB con su % congelado. Si estaba por encima, queda excluido del riesgo mientras dure la baja.

**Modelo de datos**

```js
p.injury = {
  active: true,
  startDate: "2026-04-10",
  origin: "training"|"match"|"out"|"unknown",
  originId: "2026-04-08",
  originLabel: "08 abr · Jaca B",
  notes: "Esguince tobillo derecho",
  snapshotPct: 78,
  snapshotWasAtRisk: false
}

p.injuryHistory = [                // archivo post-alta
  { startDate, endDate, days, origin, originId, originLabel, notes, snapshotPct, snapshotWasAtRisk }
]
```

**Bugs resueltos v1.6.7**

| ID | Descripción |
|----|-------------|
| B-23 | Jugadores lesionados veían su % bajar tras el alta porque las sesiones pasadas no quedaban auto-justificadas |
| B-24 | La explicación de la lesión no aparecía como motivo en el pase de lista diario |
| B-25 | No había forma de saber cuántos días había estado lesionado un jugador tras darle de alta |
| B-26 | Cambiar la fecha de inicio de una lesión dejaba marcas huérfanas fuera del nuevo rango |
| B-27 | El badge 🚑 aparecía en días anteriores a la fecha de lesión al pasar lista |
| B-28 | El texto "Lesionado desde [fecha larga]" se cortaba en filas estrechas |
| B-29 | El botón "Editar detalles" del mini-modal se confundía con editar al jugador (ahora "✏️🚑 Editar datos de la lesión") |
| B-30 | Faltaba una ruta rápida para dar el alta sin pasar por el modal completo |

---

### v1.6.3 — Gestión de lesiones ampliada

**Panel de lesión en el modal del jugador**

- **Fecha de inicio** — input de fecha dedicado. Se usa para saber desde cuándo el jugador no participa y congelar su snapshot de %.
- **Origen segmentado** — cuatro botones: 🏀 Entreno · 🏆 Partido · 🌐 Fuera · ❔ Desconocido. Al elegir entreno o partido aparece un dropdown con los 24 más recientes para identificar exactamente la sesión donde ocurrió.
- **Notas de lesión** — textarea dedicada para el detalle (tipo, zona, semanas estimadas de baja). Independiente del campo "Notas" general.
- El check 🚑 sigue mandando: marcarlo despliega el panel y lo recoge todo al guardar.

**Snapshot FEB al lesionarse**

- Al activar la lesión, Kortline calcula el % de asistencia del jugador hasta esa fecha y lo congela en `p.injury.snapshotPct` + `snapshotWasAtRisk`.
- **Si ya estaba por debajo del umbral al lesionarse**, el jugador sigue apareciendo en ⚠️ Riesgo FEB con un segundo badge "ya en riesgo al lesionarse" y el % congelado. El entrenador sabe que tendrá que recuperar cuando vuelva.
- **Si estaba por encima del umbral**, queda excluido del riesgo mientras dure la lesión (coherente con FEB: una lesión de larga duración no debería contar contra la media).
- Cuando el entrenador edita solo las notas de la lesión sin cambiar la fecha, el snapshot se preserva (no se re-dispara el cálculo).

**Auto-justificación en el pase de lista**

- Los días posteriores a la fecha de lesión, el jugador aparece como ✏️ Justificado con motivo 🤕 Lesionado/a pre-rellenado.
- Etiqueta **AUTO** gris indica que la justificación es automática (no manual). El entrenador puede tocar el motivo para editarlo o cyclear el estado si el jugador recupera y vuelve a entrenar.
- Al guardar la sesión, la auto-justificación se persiste como `sess[pid]="excused"` y `sess[pid+"_jr"]="injury"` para que aparezca en exports y contador de justificaciones.

**Tarjetas y exports con info de lesión**

- Tarjetas de estadísticas muestran "🚑 Lesionado · desde FECHA · ORIGEN" y las notas si las hay.
- Nueva marca en PDF: 🚑⚠ para lesionados que ya estaban en riesgo.
- Excel amplía columnas: "Lesión desde", "Origen lesión", "Notas lesión".
- Listado de alerta FEB del PDF marca "🚑 lesionado desde FECHA (congelado)" junto al %.

**Modelo de datos**

```js
p.injury = {
  active: true,                    // sustituye a p.injured (se mantiene por retrocompat)
  startDate: "2026-04-10",         // ISO YYYY-MM-DD
  origin: "training"|"match"|"out"|"unknown",
  originId: "2026-04-08",          // fecha de sesión o id de partido
  originLabel: "08 abr · Jaca B",  // texto legible capturado
  notes: "Esguince tobillo...",
  snapshotPct: 78,                 // % en el momento de activar la lesión
  snapshotWasAtRisk: false         // true si snapshotPct < umbral FEB
}
```

**Retrocompatibilidad**

- Jugadores legacy con solo `p.injured=true` o "lesionado" en notas siguen marcándose como lesionados (gracias a `isInjured()` centralizado).
- La primera vez que se abra el modal y se guarde, se genera el `p.injury` completo con snapshot.

---

### v1.6.2 — Estadísticas: cálculo FEB corregido

**Bugs resueltos en Estadísticas**

- **Jugadores añadidos a mitad de temporada ya no inflan su %.** Cada jugador guarda la fecha de alta (`addedAt`) y el cálculo excluye las sesiones previas. Para datos legacy sin `addedAt`, se infiere la primera sesión en la que aparece registrado explícitamente. Afecta a tarjetas, gráficas, PDF y Excel.
- **Jugadores lesionados ya no computan para el Riesgo FEB.** 🚑 aparece en tarjeta, PDF y Excel; la media y el contador "En riesgo FEB" los excluye. Se preserva su % individual a título informativo.
- **Umbral FEB unificado.** Historial usaba `75%` hardcodeado ignorando la configuración. Ahora respeta `S.cfg.riskThreshold` como el resto.
- **Export PDF/Excel respeta el filtro activo.** Si tienes "⚠️ Riesgo" puesto, el archivo exportado solo lleva esos jugadores, con sufijo `_riesgo` o `_racha` en el nombre y título del documento adaptado.
- **Leyenda de colores sin rangos solapados.** Antes `≥90%`, `≥thr`, `<thr` eran confusos. Ahora `≥90%`, `${thr}%–89%`, `<${thr}%`.

**Otros ajustes v1.6.2**

- Etiquetas del gráfico de tendencia incluyen año corto cuando las 24 sesiones cruzan años diferentes (ej: `15 abr 25`, `12 may 26`).
- Ordenación secundaria por dorsal en tarjetas de stats cuando hay empate en %.
- Empty state de Estadísticas con botón directo a "Pasar lista ahora".
- Hoja Mensual del Excel ahora usa media ponderada por jugador-sesión activo (antes multiplicaba por plantilla total, infladas en meses con altas nuevas).
- Hoja Sesiones marca `N/A` en celdas de jugadores que aún no estaban de alta.

**Bugs resueltos v1.6.2**

| ID | Descripción | Versión |
|----|-------------|---------|
| B-18 | Jugadores nuevos aparecían con ~100% al ser contados como "presentes" en sesiones previas a su alta | v1.6.2 |
| B-19 | Lesionados de larga duración aparecían en Riesgo FEB igual que un ausente injustificado | v1.6.2 |
| B-20 | Historial usaba umbral FEB hardcodeado a 75 en vez de `S.cfg.riskThreshold` | v1.6.2 |
| B-21 | Exportar PDF/Excel ignoraba el filtro activo (Todos / Riesgo / Racha) | v1.6.2 |
| B-22 | Leyenda de colores con rangos solapados (`≥90%` y `≥thr%` abarcan el mismo tramo) | v1.6.2 |

---

### v1.6.1 — Plantilla con fotos, lesiones y filtro de asistencia

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
