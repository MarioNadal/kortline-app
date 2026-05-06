# Kortline — CB Jaca

PWA single-file de gestión de asistencia y estadísticas de partido.
Desarrollada por **Mario Nadal Ara** · Stack: HTML + CSS + Vanilla JS · Datos en `localStorage`

Repositorio: [github.com/MarioNadal/kortline-app](https://github.com/MarioNadal/kortline-app)

---

## Historial de versiones

### v1.8.23 — Responsive completo: tablet portrait + landscape _(actual)_

Auditoría responsive completa en tablet, iPhone y Android (portrait y landscape):

**Causa raíz tablet no giraba:** `manifest.json` tenía `"orientation":"portrait"` → cambiado a `"orientation":"any"`. La PWA instalada ya puede rotar libremente.

**Layout tablet:**
- `#root` ya no queda encajonado en 430px: a partir de ≥600px ocupa el 100% del ancho disponible.
- Nav/modal se amplían progresivamente: 768px → 768px nav / 680px modal; 1024px → 1024px nav / 800px modal.
- Contenido centrado en 700px (600px) → 880px (1024px) con márgenes laterales cómodos.
- FABs alineados con el borde derecho del content en tablet (768px+).
- Asistencia: de 4 columnas (phone) a 6 (tablet) a 8 (large tablet).
- Stat grid en home: de 2 a 4 columnas en 1024px.

**Live game portrait tablet (768px+):**
- Marcador del partido: 62px → 70px.
- Cards en pista: más padding, pts a 22px, nombres más anchos.
- Botones de acción más grandes (padding y font-size).

**Live game landscape tablet (≥700px × ≥501px alto):**
- El layout 2 columnas (marcador izq + pista der) ahora **funciona realmente** porque `#root` ya puede expandirse.
- Marcador: 38px (phone) → 54px (tablet landscape).
- Scoreboard con padding normal, foul-row con más espacio.
- Cards en pista: 24px pts, 84px de nombre, padding mayor.
- Nav visible en landscape de tablet (sólo se oculta en phones ≤500px alto).

**SW bump.** `CACHE_VERSION = "kortline-v1.8.23"`

---

### v1.8.22 — VAL (Valoración) en modal de stats

Añadida columna **VAL** (Valoración/Eficiencia) a todas las vistas del modal de estadísticas:
- **Cards landscape**: cada card muestra `VAL N` al pie, en verde si positivo y rojo si negativo.
- **Tabla (modo tabla en portrait o landscape)**: columna `VAL` al final de la cabecera, valor por jugador con color (verde/rojo), y suma total en la fila `EQUIPO`/`RIVAL`.
- El valor se calcula con la fórmula existente `_calcEFF()` → entero, sin decimales.
- También fix residual v1.8.22: botón 📊 siempre visible (portrait + landscape), `.live-stats-wrap` siempre oculta hasta pulsar el botón.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.22"`

---

### v1.8.21 — Stats modal landscape: card grid "de un vistazo"

El modal de estadísticas en landscape ahora abre en modo **card grid** en lugar de tabla:
- Cada jugador = una card (~88px min) con: #dorsal, nombre, **PTS grande**, T2/T3, RB, faltas.
- Players en pista primero (borde y dot de color del equipo), banquillo después (más atenuado).
- Grid `auto-fill minmax(88px,1fr)` → ocupa el ancho disponible sin scroll horizontal.
- **Toggle ⊞ Cards / ☰ Tabla** en el header del modal para cambiar entre las dos vistas.
- El modal en landscape es **centrado/flotante** (`border-radius:16px` por todos lados, `max-height:82vh`) en vez de slide-up desde abajo.
- En portrait sigue siendo slide-up con tabla completa (el botón 📊 solo aparece en landscape de todas formas).
- Nuevas funciones: `_buildLiveStatsCards()`, `_toggleLiveStatsView()`.
- `_refreshLiveStatsModal()` respeta el modo activo (cards/tabla) al cambiar equipo/rival.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.21"`

---

### v1.8.20 — Stats en landscape: botón 📊 → modal slide-up

En landscape, la tabla de estadísticas del partido ya no está incrustada en la columna izquierda. En su lugar:
- **Botón 📊** en el header (junto a 📍 📤 🏁), visible solo en landscape (`display:none` por defecto, `display:flex` en landscape).
- Al pulsarlo → **modal slide-up** (drag-to-dismiss) con la tabla completa, toggle nuestro equipo / rival si hay jugadores del rival registrados, y botón ✕.
- El toggle del modal llama a `_refreshLiveStatsModal(view)` que actualiza solo el DOM del modal (sin `render()` completo).
- En portrait el botón no aparece y las stats siguen al fondo del scroll como antes (v1.8.18).
- La columna izquierda en landscape ahora solo tiene el marcador, sin el bloque de stats debajo; el grid pasa a 1 sola fila `"scoreboard court"`.
- Nueva función reutilizable `_buildLiveStatsHtml(teamId, matchId)` que construye las tablas (nuestro equipo + rival) desde el estado actual del partido.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.20"`

---

### v1.8.19 — Scoreboard compacto en landscape (fix móvil 2 columnas)

**Bug.** En landscape en móvil (~375px de alto), el marcador ocupaba ~220px (score a 62px, padding 16px, sección de faltas con márgenes altos) dejando las stats sin espacio visible ni interactuable.

**Fix.** Dentro del `@media landscape` se añaden overrides compactos:
- `.live-scoreboard`: padding 8px / margin-bottom 6px / border-radius 10px
- `.live-score`: font-size 38px (era 62px)
- `.live-diff`: 11px / padding mínimo
- `.live-foul-row` (nueva clase en la sección de faltas): padding 5px / margin-bottom 5px
- `.qtab-btn`: padding reducido

El scoreboard pasa de ~220px a ~120px en landscape, dejando la tabla de stats visible y usable desde la columna izquierda.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.19"`

---

### v1.8.18 — Stats al pie en portrait, drag-to-dismiss mejorado, titular+capitán sin re-render

**Fix portrait stats (B-portrait)** — En portrait, la tabla de estadísticas del partido ahora aparece siempre al pie, debajo del quinteto/acciones/banquillo. La fase 2 (v1.8.14) había movido las stats a la columna izquierda del grid, lo que en portrait las dejaba en mitad de pantalla. Solución: se separan los contenidos en tres divs independientes (`.live-scoreboard-wrap`, `.live-col-r`, `.live-stats-wrap`) ordenados en el DOM para portrait, y en landscape se usan `grid-template-areas` para mantener el layout de 2 columnas (marcador izq-arriba / stats izq-abajo / quinteto der).

**Drag-to-dismiss mejorado** — El `.mhandle` de todos los bottom sheets ahora ocupa el ancho completo y tiene 36 px de área táctil. Se elimina el `e.preventDefault()` del `pointerdown` (evitaba el scroll del contenido) y se mueve al `onMove` con umbral de 8 px (solo cancela scroll cuando ya hay intención real de arrastre). Resuelve el bloqueo momentáneo al tocar cerca de la barra en modales como "Crear partido" o "Crear jugador".

**Select-all sin flash** — `_convSelectAll()` y `_convClearAll()` reconstruyen el HTML del modal pero bloquean la animación `modalSlideUp` al instante (`modal.style.animation="none"; modal.style.transform="translateX(-50%) translateY(0)"`). El modal ya no desaparece y reaparece al convocar a todos o a ninguno.

**Titular y capitán in-place en matchDetail** — `setCapitan()` y `toggleTitular()` ya no llaman a `save();render()`. En su lugar usan `_mdConvRefreshRow(pid)` (actualiza solo la fila DOM del jugador) y `_mdConvRefreshSubtitle()` (actualiza el contador de convocados/titulares). Elimina el parpadeo y el scroll al inicio de página al tocar ⭐ o (C).

**SW bump.** `CACHE_VERSION = "kortline-v1.8.18"`

---

### v1.8.17 — Eliminado botón "🔄 Sync live" redundante

El botón "🔄 Sync live" en el detalle del partido ya no aparece. El sync de stats del live al marcador manual se hace automáticamente; el botón era innecesario y confundía. El div que lo contenía (con `space-between`) se simplifica a un `margin-bottom` plano.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.17"`

---

### v1.8.16 — Botón "✅ Confirmar sesión" para entrenamientos con todos presentes (B-confirm)

**Problema.** Si todos los jugadores asisten al entreno (el estado por defecto es "presente"), el coach no toca ningún botón y la sesión nunca se guarda en `localStorage`. Al día siguiente no hay registro de esa sesión.

**Solución.** `att()` detecta si existe ya la sesión del día (`sessionExists = !!S.sessions[sk(teamId, date)]`). Si no existe, el pie del pase de lista muestra un botón naranja grande **✅ Confirmar sesión** en lugar del indicador de autoguardado. Al pulsarlo, `confirmSession()` llama a `_flushSess()` (que marca a todos los jugadores explícitamente), guarda y muestra el toast `✅ Sesión confirmada`. Una vez guardada, el botón desaparece y aparece el indicador de autoguardado habitual.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.16"`

---

### v1.8.15 — Stats más grandes en landscape, hint de rotar oculto en landscape (Fase 3)

Dentro del `@media (min-width:700px) and (orientation:landscape)`:
- `.stats-content{max-width:960px!important;}` — la pantalla de stats aprovecha todo el ancho.
- `.stats-table{font-size:13px;}` / `th{font-size:11px;padding:7px}` / `td{padding:8px 7px}` — tabla más legible.
- `.live-rotate-hint{display:none;}` — en landscape ya no hace falta el aviso "🔄 gira para ver completa".

El div `stats()` pasa a usar `class="content stats-content"`.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.15"`

---

### v1.8.14 — Live game en landscape: layout 2 columnas (Fase 2)

En `@media (min-width:700px) and (orientation:landscape)` el live game muestra:
- **Columna izquierda (2fr):** marcador sticky + tabla de stats.
- **Columna derecha (3fr):** quinteto en pista + acciones + banquillo.

CSS nuevo: `.live-game-content{max-width:1100px!important;}`, `.live-2col{display:grid;grid-template-columns:2fr 3fr;…}`, `.live-col-l{position:sticky;top:0;}`.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.14"`

---

### v1.8.13 — Grids responsivos en estadísticas y equipos (Fase 1)

- `stats()` envuelve las cards de jugadores en `<div class="stats-cards-grid">` con CSS grid 2 columnas a partir de 600 px.
- `equiposScreen()` envuelve las cards de equipos en `<div class="cards-grid">` con el mismo grid.

Mejora la legibilidad en tablet/desktop sin romper la vista móvil de una columna.

**SW bump.** `CACHE_VERSION = "kortline-v1.8.13"`

---

### v1.8.5 — Pulido UX live game: confirmación cuarto, bonus toast, modo rápido, selector equipo

Cierre del informe `QA_LIVE_UX_v1614.md`. Cuatro mejoras que reducen fricción del anotador en partido real, todas activadas tras la auditoría regresión de v1.8.4.

**F4b · Confirmación al cambiar a un cuarto pasado**

`setLiveQ()` ahora pregunta antes de cambiar a un cuarto distinto al actual. Si estás en Q3 y tocas Q1 sin querer (típico al hacer scroll en las pestañas), aparece:

> ⚠️ Estás en **Q3**. ¿Editar **Q1**?
> Las acciones que registres se guardarán en Q1.

[Editar Q1] · [Cancelar]

Solo se pide confirmación si el cuarto destino existe (ya jugado) y es diferente al actual. Cambiar al cuarto actual o avanzar al siguiente no necesita confirmación.

**F4d · Toast puntual al cruzar la 5ª falta de equipo**

Helper nuevo `_checkBonusEnter(m, qi)` que se llama después de incrementar `teamFouls[qi]` en `liveAction`, `liveTeamAction` y `_confirmShot`. Cuando se cruza al bonus (faltas equipo ≥ 5 por primera vez en ese cuarto), dispara un toast 🚨 una sola vez:

> 🚨 BONUS activo · próxima falta = 2 TL

El flag `live.bonusToastFired[qi]` evita repetir si la 6ª, 7ª... falta también suceden en el mismo cuarto. La sección de faltas del ACTPAD ya mostraba el badge "BONUS" estático (v1.6.15); este toast añade el aviso del **momento exacto** del cruce, que es cuando importa.

**F3 · Toggle "🚀 Modo rápido" en Ajustes**

Nueva preferencia en ⚙️ Ajustes → "Modo rápido (live game)":

> **🚀 Sin preguntas de cadena**
> Tras anotar canasta o fallo, NO preguntará por asistencia/rebote. Más rápido si solo registras lo esencial.

Cuando está ON, `_pickActionFor` salta los modales `_chainAssist` y `_chainRebound`. Quita 2 toques por canasta/fallo si no estás trackeando asistencias/rebotes en detalle. Default OFF (mantiene flujo cómodo de v1.7.2).

**Nota.** El informe v1.6.14 originalmente proponía F3 como "no auto-deselección del jugador tras acción". El flujo cambió en v1.7.2 a "modo banco" (ACT → picker jugador), donde ya no hay deselección automática persistente. F3 se reinterpretó al equivalente moderno: omitir los encadenamientos ¿asistencia?/¿rebote?, que es la fricción real ahora en partidos rápidos.

**F4c · Selector de equipo on-court mejorado**

Helper nuevo `_teamShort(name, max)` que prioriza la primera palabra significativa antes de truncar con "…":

| Nombre | max=14 | Antes | Ahora |
|---|---|---|---|
| `Casademont Zaragoza` | 14 | `Casademont Z…` | `Casademont` |
| `Surne Bilbao` | 14 | `Surne Bilbao` | `Surne Bilbao` |
| `I.A.U.D Tarazona` | 14 | `I.A.U.D Taraz…` | `I.A.U.D` |

El selector también añade un **dot circular** del color del equipo (3px borde blanco al activo) para reforzar visualmente cuál está seleccionado. Si el equipo o el rival tienen abreviatura (`S.clubAbrev`, `m.rivalAbrev`), se prefiere esa sobre el nombre largo.

**Service Worker bump.** `CACHE_VERSION = "kortline-v1.8.5"` para invalidar caché vieja en clientes ya instalados.

---

### v1.8.4 — PWA real: `sw.js` + `manifest.json` (instalable y offline)

**Por qué.** Auditando la regresión de v1.8.3 con `QA_REGRESSION.md` se detectó que la PWA no funcionaba realmente: `index.html` referenciaba dos archivos que **no existían en el repo**:

- `<link rel="manifest" href="manifest.json">` → 404
- `navigator.serviceWorker.register("sw.js")` → 404

Como el `register()` tiene un `.catch(()=>{})` silencioso, la app no fallaba a la vista — pero sin SW **no hay caché offline ni instalación como PWA**. En el banquillo, donde la cobertura puede ser dudosa, eso es un riesgo real: si la red falla justo cuando abres la app, se queda en blanco.

**Cambios:**

- **Nuevo `manifest.json`** con `name`, `short_name`, `theme_color #070f1e`, `display: standalone`, `orientation: portrait` y los iconos PNG (`icon-192.png`, `icon-512.png`) ya presentes en el repo, más el SVG `assets/logos/logo-icon.svg`. Incluye purpose `any` y `maskable` para que Android lo recorte bien.
- **Nuevo `sw.js`** con estrategia híbrida:
  - **App shell precacheado** en `install` (`/`, `index.html`, `manifest.json`, los dos iconos PNG y los dos SVG).
  - **Network-first para navegaciones** (HTML): el usuario ve siempre la última versión cuando hay red, fallback a caché si no hay.
  - **Cache-first para assets** (iconos, fonts, CDN scripts): arranque instantáneo, refresco silencioso en background.
  - **Limpieza automática de cachés viejas** en `activate` (busca `kortline-*` distintos a la versión actual y los borra).
  - **Mensaje `SKIP_WAITING`** para forzar refresco desde la app si hace falta.
- **`CACHE_VERSION = "kortline-v1.8.4"`** — bumpear esto en cada release invalida la caché vieja en clientes que ya tenían la app instalada.
- Bump de versión en `index.html` (`exportBackup` y panel "Acerca de").

**Resultado.**

| Verificación | Antes (v1.8.3) | Después (v1.8.4) |
|---|---|---|
| Service worker registrado | ❌ 404 | ✅ activado |
| App instalable como PWA | ❌ falla | ✅ Chrome/Safari ofrecen "Instalar" |
| Funciona offline | ❌ blanco | ✅ carga desde caché |
| Caché controlada | ❌ no hay | ✅ versionada por release |

Tras subir esta versión, en el dispositivo del banquillo: abrir la app online una vez (que cachee), poner el móvil en avión, recargar → debe seguir funcionando.

---

### v1.8.3 — Fin del autoBackup duplicador (libera ~50% del espacio)

**Diagnóstico.** Con localStorage casi nuevo, `cbj:autobackup` ya pesaba **74 KB** mientras que toda la app real (`cbj:m`, `cbj:p`, `cbj:s`, `cbj:t`...) sumaba apenas 73 KB. Es decir, **el autobackup duplicaba todo el almacenamiento en cada `save()`**. Con varios partidos + fotos + shots, eso hacía explotar el límite del navegador (5–10 MB) muy rápido. Mario reportó que ni la primera foto cabía: el localStorage estaba al borde porque el autobackup ya ocupaba la mitad.

El propio README de v1.x ya reconocía la falsa seguridad de este sistema:

> "El autobackup en localStorage ofrece una falsa seguridad (vive en el mismo almacenamiento que los datos principales); el sistema honesto es recordatorio + exportación/importación manual."

**Cambios:**

- **`save()` ya no llama a `autoBackup()`.** Sigue persistiendo los datos reales (equipos, jugadores, sesiones, matches, etc.) pero deja de duplicar en `cbj:autobackup`. Resultado inmediato: ~50% más de espacio libre para fotos, shots, partidos.
- **`save()` ahora devuelve `boolean`** (true si todo cupo, false si algún `lsSet` falló). Útil para que `handlePhoto` y demás puedan revertir.
- **`lsSet(k, v, silent)`** acepta tercer parámetro para no toastear "Almacenamiento lleno" cuando se llama desde flujos que ya manejan el fallo (como la cascada de compresión de fotos).
- **Mensaje de toast mejorado**: `⚠️ Almacenamiento lleno · Exporta backup y limpia datos antiguos` en lugar del genérico anterior.

**Limpieza guiada para usuarios afectados.**

En **⚙️ Ajustes → 💾 Copia de seguridad** se detecta automáticamente si hay un `cbj:autobackup` antiguo (residuo de versiones anteriores) y aparece un banner amarillo:

> 🔄 Autobackup antiguo: XX KB
>
> v1.8.3 ya no genera autobackup duplicado (causaba "Almacenamiento lleno"). Si tu app va lenta o no caben fotos, bórralo aquí — solo afecta al backup automático, no a tus datos reales.

Con dos botones:

- **🔄 Restaurar** — usa el autobackup como antes (por si querías recuperar algo).
- **🗑 Borrar (libera XX KB)** — confirma con `_confirm()` y elimina el autobackup. Tras pulsar, el espacio queda libre inmediatamente para fotos nuevas, shots y demás.

**Nota.** Si tenías el backup exportado manualmente como JSON desde Ajustes (recomendación habitual), no pierdes nada al borrar el autobackup interno: ese JSON sigue siendo el respaldo real ante limpieza del navegador o cambio de dispositivo.

---

### v1.8.2 — Shot Chart heatmap, agregado de temporada y exportar PNG

Iteración 2 del Modo Pro Shot Chart (v1.7.0). Tres cambios mayores en la pantalla **📍 Mapa de tiros**:

**🔥 Heatmap por zonas con %**

Nuevo modo de visualización que clasifica cada tiro en una de **7 zonas** y colorea cada zona según el % de acierto. Helpers nuevos:

- `_getShotZone(x, y)` — clasifica un tiro en `paint`, `mid-L`, `mid-C`, `mid-R`, `corner-L`, `top` o `corner-R`. Las divisiones siguen las líneas FIBA reales (pintura 4.90×5.80, arco de 3 a 6.75m, corner three a 0.90m).
- `_zoneStats(shots)` — agrega made/att/pct por zona.
- `_zoneColor(pct, att)` — gradiente del color de la zona:

| % | Color |
|---|---|
| <20% | rojo |
| 20–29% | naranja |
| 30–39% | amarillo |
| 40–49% | verde claro |
| ≥50% | verde |
| sin tiros | gris translúcido |

En cada zona se imprime el conteo `X/Y` y el `%` con texto blanco trazado. El SVG renderiza los polígonos por debajo de las líneas de la cancha para no taparlas.

**🎯 Toggle Puntos / Heatmap**

Dos botones grandes encima de los filtros:

- **🎯 Puntos** — vista clásica: cada tiro como punto individual (verde 2pt, azul triple, ✗ rojo fallado).
- **🔥 Heatmap zonas** — vista agregada: zonas coloreadas con %.

Cada modo tiene su propia leyenda al pie.

**🗓 Agregado de toda la temporada**

Toggle de fuente de datos:

- **📅 Este partido** — solo `m.live.shots` del partido actual.
- **🗓 Toda la temporada** — recorre todos `S.matches[teamId][*].live.shots` y los junta. El picker de jugadores se amplía con cualquiera convocado en cualquier partido. El filtro por cuarto desaparece (no aplica a temporada).

Disponible automáticamente en cuanto haya al menos un partido con tiros registrados.

**📤 Exportar PNG para WhatsApp**

Botón verde 📤 en el header del mapa. Al pulsarlo:

1. Recolecta los shots con los filtros actuales aplicados.
2. Genera un SVG con cabecera (nombre del club, jugador filtrado, fecha, ratio `made/att` y %).
3. Convierte el SVG a PNG vía `<canvas>` + `toDataURL("image/png")`.
4. **Si el dispositivo soporta `navigator.canShare({files})`** (iOS Safari, Android Chrome modernos) → abre el menú nativo de compartir con WhatsApp/etc.
5. Si no → descarga el PNG con nombre `kortline-tiros-{equipo}-{fecha}.png`.

El PNG resultante mide ~1000×1000 px con fondo navy `#070f1e`, mantiene la paleta del club y es directamente publicable sin retoque.

**Otros**

- `_courtSVG` admite ahora dos opciones nuevas: `heatmap` (renderiza polígonos por zona) y `exportMode` (fondo sólido para el PNG).
- En la cancha se mantiene en modo Heatmap el resto de líneas (pintura, arco, aro, etc.) por encima del overlay de zonas para que la perspectiva sea legible.

---

### v1.8.1 — Compresión adaptativa de fotos en pase de lista

**Bug.** Al subir una foto del entrenamiento desde la cámara del móvil siempre saltaba `⚠️ Foto demasiado grande` y la foto se descartaba. El handler antiguo hacía una **única pasada** con resize a 600 px + JPEG calidad 0.65, y si el resultado no cabía en `localStorage` (porque ya había acumulado otros datos), no volvía a intentarlo con menor calidad.

**Fix.** Compresión adaptativa con varios niveles que se prueban en cascada hasta encontrar uno que quepa:

| Intento | Lado máx | Calidad JPEG |
|---------|----------|--------------|
| 1 | 600 px | 0.70 |
| 2 | 480 px | 0.65 |
| 3 | 400 px | 0.55 |
| 4 | 320 px | 0.45 |
| 5 | 240 px | 0.40 |

El resultado final aparece en el toast con el tamaño aproximado en KB (`📷 Foto guardada (~85 KB)`). Si después de los 5 intentos sigue sin caber, se restaura la foto anterior (si la había) y se muestra:

> ⚠️ Sin espacio. Borra fotos antiguas o exporta backup.

**Otros**

- El handler ahora avisa al usuario que está procesando: toast efímero `⏳ Procesando foto…`.
- Helper `_compressPhoto(file, maxDim, quality)` async que devuelve la base64 ya redimensionada y comprimida. Limpia el `URL.revokeObjectURL` correctamente para no fugar memoria.
- Sin upscale: si la foto original es más pequeña que `maxDim`, se mantiene su tamaño en lugar de agrandarla con pérdida de calidad.

---

### v1.8.0 — Estadísticas avanzadas y pantalla completa por giro

Release mayor en estadísticas. Cuatro métricas nuevas (MIN, +/-, EFF, eFG%) y simplificación del modo pantalla completa.

**Minutos jugados (MIN)**

Cada jugador acumula los segundos que ha estado en pista. La columna **MIN** se calcula vía:

- `live.inSince[pid]` — tiempo absoluto del juego en el momento en que entró a pista.
- `live.minTracked[pid]` — segundos acumulados de stints anteriores.
- `_absSec(m)` calcula el tiempo absoluto del juego en cualquier momento (cuartos pasados × qMins + tiempo transcurrido del cuarto actual). Cubre prórrogas (5 min/OT).

Hooks de tracking añadidos en `subPlayer`, `_tmPickIn` (sub durante TM), `_doDQSub` (sub forzoso tras DQ) y la inicialización del live (titulares entran en `absSec=0`).

Migración de partidos viejos sin tracking: al entrar al live se asume que los `onCourt` actuales están desde el inicio (`inSince=0`). Pierde la precisión de subs pasados pero no rompe.

**Plus / Minus (+/-)**

Diferencia de marcador (nuestro − rival) acumulada mientras el jugador está en pista. Mismo patrón que MIN: `plusMinusBaseline[pid]` (diff cuando entró) y `plusMinusTracked[pid]` (acumulado). Se actualiza al cambiar onCourt.

Color: verde si positivo, rojo si negativo, gris si 0.

**Eficiencia FEB (EFF / valoración)**

Fórmula:

```
EFF = pts + (RO + RD) + AST + ROB + TAP − fallados − pérdidas − faltas
```

Donde `fallados = p1a + p2a + p3a` y `faltas = total (personal + técnica + antideportiva + descalificante)`.

Versión simplificada — la fórmula oficial FEB también suma faltas recibidas y resta tapones recibidos, pero esos campos no se trackean. Aproxima al PIR de Euroliga.

**eFG% — porcentaje de tiro efectivo**

```
eFG% = (p2m + 1.5 × p3m) / intentos_de_campo × 100
```

Más justo que `FG%` plano porque pondera triples (valen 1,5×).

**Pantalla completa solo por giro de móvil**

Eliminado el botón **📊 Pantalla completa** y el `.rotate-hint` clicable. Ahora la pantalla completa se activa **únicamente al girar el móvil a horizontal** (listener `orientationchange` que ya existía desde antes). Al volver a vertical se cierra automáticamente.

Ventajas:
- Ya no hay un botón cuyo "atrás" quedaba detrás de la barra de notificaciones.
- Más simple — el comportamiento es predecible, sin dos formas de activarlo.
- En portrait el header queda más limpio (solo el badge "🔄 gira el móvil para verla completa" indicativo).

**Tabla landscape con las 4 columnas nuevas**

El `buildTable` de `openLandscapeStats` ahora muestra:

```
# · Jugador · MIN · PTS · T2 · T3 · TL · eFG% · RO · RD · AST · F · ROB · TAP · PER · +/- · EFF
```

Totales en la última fila con eFG% y EFF agregados. La columna F ahora usa `_totalFouls` (suma todas las modalidades, antes era solo `foul`).

**Otros**

- En la tabla, los rivales muestran "—" en MIN y +/- (no se trackea porque el rival cambia de jugadores sin que la app lo sepa).

---

### v1.7.9 — Auditoría regresión: bloqueo de cuartos futuros + "Continuar" desde la 1ª vez

Tras una auditoría completa del README desde v1.6.0 a v1.7.8 se detectaron **dos features de v1.6.0 que se habían caído** entre versiones intermedias. Ambas restauradas en este release.

**R1 · Bloqueo de cuartos futuros (B-11 de v1.6.0)**

Antes los tabs **Q1 · Q2 · Q3 · Q4** del live game eran clicables todos por igual: se podía saltar al Q4 sin haber jugado el Q1, registrando acciones en el cuarto equivocado por descuido.

Ahora:

- `m.live.maxQ` trackea el cuarto más alto alcanzado. Se inicializa a 1 al entrar al live por primera vez.
- Se incrementa automáticamente al avanzar de cuarto (cuando `clockSec` llega a 0) y al activar prórroga.
- `setLiveQ(q)` rechaza con toast `⚠️ Aún no has llegado a Qx` si `q > maxQ`.
- En el render de los tabs, los cuartos `> maxQ` aparecen en **gris al 45% de opacidad**, con `cursor:not-allowed`, atributo `disabled` y un icono **🔒** en lugar del marcador. No reaccionan al click.
- Los cuartos `≤ maxQ` siguen funcionando como hoy: se puede volver a uno pasado para revisar o añadir acciones.
- Migración de partidos viejos sin `maxQ`: se deriva de `live.q` (asumimos que el cuarto actual es el más alto alcanzado).

**R2 · "Continuar partido" desde la primera vez (B-12 de v1.6.0)**

Antes el botón sólo decía "Continuar" cuando había acciones registradas o el cuarto era >1. Si entrabas al live y volvías sin tocar nada, decía "Empezar partido" otra vez — perdías la pista de que ya habías entrado.

Ahora se distinguen dos conceptos:

- **`started`** = `!!m.live` (basta con haber entrado al live al menos una vez para que el objeto exista).
- **`inProgress`** = condiciones reales de juego activo (`q>1` o puntos o reloj corriendo).

El **botón** usa `started` → "🔴 Continuar partido" desde la primera entrada. El **badge "🔴 EN JUEGO"** y el marcador en vivo siguen usando `inProgress` — no se activan hasta que hay actividad real. Aplicado a **HOY** (cards de partidos de hoy) y a **matchDetail** (botón "Continuar en vivo").

---

### v1.7.8 — Hotfix banner del capitán

**Bug encontrado en v1.7.7.** El banner del capitán no se actualizaba al pulsar (C) en un jugador — la función `_convCapitan` refrescaba las filas afectadas pero no llamaba a `_convRefreshCapBanner`. El banner amarillo "Sin capitán designado" se quedaba congelado aunque ya hubieras designado uno.

**Fix.** `_convCapitan` ahora llama también a `_convRefreshCapBanner()` tras el refresh de filas. El banner cambia a verde con `© Capitán: #X Nombre` al instante.

---

### v1.7.7 — Validaciones de convocatoria + banner del capitán

**Regresión de v1.6.0 restaurada.** En algún momento entre v1.6.0 y v1.7.6 se perdieron las **validaciones en cadena al cerrar la convocatoria** y el **banner del capitán prominente**. `_convFinish()` se había quedado en un simple `save() + cerrar`. Restaurado:

**Validaciones en cadena al pulsar "✅ Listo — ir al partido"**

Se comprueba en orden y se muestra un modal por cada caso fallido:

| Caso | Severidad | Modal |
|------|-----------|-------|
| 0 convocados | Bloqueante | "Sin convocados — no puedes empezar el partido" — solo botón "Volver a la convocatoria" |
| <5 convocados | Bloqueante | "Solo X convocados — FIBA exige 5 en pista" — solo "Añadir más" |
| <5 titulares | Aviso | "Faltan titulares (X/5)" — botón principal "Designar titulares" + secundario "Continuar igual (no recomendado)" |
| Sin capitán | Aviso | "Sin capitán designado · FIBA: dirige al equipo si te expulsan" — botón principal "Designar capitán" + secundario "Continuar igual" |

Los **bloqueantes no permiten continuar**. Los **avisos** sí — el entrenador puede ignorarlos conscientemente con el botón gris.

**Banner del capitán prominente en el wizard**

Encima de la lista de jugadores aparece siempre un banner con el estado del capitán:

- **Verde** si está designado: `© Capitán: #X Nombre · Dirige al equipo si el entrenador es expulsado`.
- **Amarillo** si no: `⚠️ Sin capitán designado · FIBA: pulsa (C) junto a un convocado`.

El banner se actualiza **in-place** al cambiar el capitán (sin redibujar el modal completo, manteniendo el patrón de v1.7.6).

---

### v1.7.6 — Convocatoria sin saltos al seleccionar

**Bug.** En el modal de convocatoria de partido (📋 ¿Quién juega?), cada toque sobre un jugador disparaba `_convToggle` → `save()` → reescribía todo el `innerHTML` del modal con `_convSetupHtml(...)`. Resultado: la lista se "redibujaba" y el scroll volvía al principio. Especialmente molesto al elegir jugadores del final (los del banquillo con dorsales altos).

**Fix.** Refresh **in-place** de la fila tocada en lugar de redibujar el modal:

- Helper `_convRowInner(p,t,inConv,isTit,isCap)` que devuelve el HTML interno de una fila (checkbox + dorsal + nombre + botones laterales).
- `_convRefreshRow(pid)` busca `[data-pid="${pid}"]` en el modal y reescribe solo su `innerHTML`.
- `_convRefreshHeader()` actualiza el contador `X convocados · Y titulares` en el subtítulo.

`_convToggle`, `_convTitular` y `_convCapitan` ya no llaman a `_convSetupHtml`. Solo refrescan la fila tocada (y la del capitán anterior cuando se cambia el capitán). El scroll se mantiene exactamente donde estaba.

**Otras combinadas en este release.**

Esta versión también consolida los cambios de v1.7.5 (sustitución forzosa tras descalificación) y v1.7.4 (shot chart sin coordenadas inconsistentes) si aún no estaban arriba.

---

### v1.7.5 — Sustitución forzosa tras descalificación

**Reglamento FIBA:** un jugador descalificado **no puede seguir en pista**. Antes la app marcaba al DQ con borde rojo en su card pero permitía que siguiera registrando acciones — incoherente con el reglamento.

**Ahora.** Cuando una falta descalifica al jugador (5 personales, 2 técnicas, 2 antideportivas, 1 técnica + 1 antideportiva, o 1 descalificante directa), si está en pista se abre automáticamente un **modal forzoso de sustitución**:

- Título: **⛔ Descalificado** + motivo concreto ("5 faltas personales", "2 técnicas", etc.).
- **SALE: #X Jugador** (rojo).
- **Lista del banquillo válido** (se filtran los jugadores que ya están descalificados).
- **No tiene botón Cancelar.** El usuario debe elegir un sustituto sí o sí.

**Excepción única:** si todo el banquillo está agotado (no hay convocados disponibles, o todos los del banquillo están a su vez descalificados), aparece un aviso amarillo *"⚠️ Banquillo agotado · continuarás con menos jugadores en pista"* y un botón único *"OK, sacar sin sustituir"* que retira al DQ del onCourt sin reemplazo.

**Encolamiento.** Si la sustitución forzosa coincide con el modal de tiros libres en curso (la falta que descalifica también puede generar TLs), el modal forzoso queda **encolado** y se abre en cuanto se cierran todos los modales activos (TL, picker, shot chart, cadenas, etc.) — vía `_enqueueDQSub` + polling cada 500 ms.

**Cubre los dos equipos.** Funciona tanto cuando descalifica un jugador nuestro como uno del rival (con `m.rivalPlayers` registrados). El sustituto del rival se busca en su banquillo.

**Bug colateral arreglado.** En la rama `isRivalPid` de `liveAction`, el bloque común de "abrir modal de TL al rival" se ejecutaba también — abriendo dos modales de TL en la misma falta. Ahora el bloque común solo se ejecuta `if(isFoulAction && !isRivalPid)`. También `pname` ahora soporta jugador rival en lugar de devolver "?".

---

### v1.7.4 — Shot Chart sin coordenadas inconsistentes

**Pre-aviso de zona reescrito.** Cuando hay discrepancia entre el botón pulsado (+2 / +3) y la zona donde se toca la cancha:

- Antes: dos opciones → *"Sí, registrar como Xp"* (usa la zona detectada) o *"Mantener como Xp"* (usa el botón original con coordenadas en la zona equivocada).
- **Bug:** la opción "Mantener" guardaba el shot con `value` original pero `(x,y)` en la zona contraria → en el mapa de tiros aparecían triples en zona de 2 (incoherente).

**Ahora.** El botón "Mantener" desaparece. En su lugar:

- **✓ Registrar como [zona detectada]** — acepta el cambio según la zona donde tocaste.
- **↺ Volver a tocar zona de Xp** — cierra el aviso y **reabre la cancha** para que toques una zona correcta del valor original. El usuario tiene que tocar dentro o fuera del arco según corresponda; si vuelve a discrepar, vuelve a salir el aviso.

Resultado: cualquier shot guardado en `m.live.shots[]` siempre tiene su `(x,y)` en la zona consistente con su `value`. El mapa de tiros nunca muestra incoherencias.

---

### v1.7.3 — Hotfix sustitución desde card en pista

**Bug en v1.7.2.** El cambio de paradigma redirigió el tap de las court cards a `openSubModal(p.id)`, que estaba pensado para llamarse desde el banquillo (el `id` representa al jugador que entra). Resultado: tocar Carlos en pista mostraba "ENTRA #11 Carlos Uno · ¿Quién sale?" — semánticamente al revés.

**Fix.** Dos funciones nuevas inversas:

- `openCourtSubModal(outId)` — modal "SALE #11 Carlos · ¿Quién entra?" con la lista del banquillo nuestro.
- `openCourtRivalSubModal(outId)` — equivalente para el rival.

Las court cards ahora apuntan a estas funciones. Jugadores descalificados (`_isDQ`) aparecen en gris en la lista de banquillo y no se pueden seleccionar (toast aviso "⛔ Jugador descalificado, no puede entrar").

`openSubModal` y `openRivalSubModal` originales se mantienen — siguen siendo válidos para el flujo "tap en banquillo desde la stats table".

---

### v1.7.2 — Modo banco: flujo "acción → jugador" con cadenas

Cambio de paradigma del live game. Hasta v1.7.1 había que **tocar primero el jugador** y luego la acción. Ahora es al revés: el banner de acciones está siempre visible, tocas la acción y la app pregunta **"¿quién?"**.

**Por qué.** La jugada se piensa primero como "¡canasta de 3!" y luego "¿quién la metió?". Es como suena, no como se anota a la antigua. Coincide con el flujo de Swish y Basketball Stats Assistant.

**Layout nuevo del live game**

1. Header con reloj, marcador y faltas (igual que antes).
2. **Quinteto en pista** con cards compactas (#dorsal · puntos · nombre corto · faltas). **Tocar una card = abrir modal de sustitución** (no registra acción).
3. **Banner ⚡ ACCIONES siempre visible** con secciones:
   - ⚡ PUNTOS: +2, +3, +1 / ✗2, ✗3, ✗TL.
   - 📦 REBOTES: OF, DEF.
   - 🎯 OTROS: AST, ROB, TAP, PER.
   - 🤚 FALTAS: FALT, TÉC, ANT, DESC + badge `F:N/4 · BONUS`.

**Flujo de captura**

1. Tocas una acción (ej: **+3 Triple**).
2. Modal "¿Quién?" con 5 botones grandes del quinteto (dorsal en el color del equipo, nombre corto, puntos acumulados).
3. Tocas Carlos.
4. (Si shot chart=ON) → modal de la cancha para tocar la zona.

**Encadenamientos automáticos**

Tras ciertas acciones se abre un modal opcional con botón "Saltar":

- **Tras canasta anotada (+2/+3)** → modal **🎁 Asistencia** con los otros 4 jugadores en pista. Tocas quién dio la asistencia o "Sin asistencia · Saltar".
- **Tras fallo (✗2/✗3) o TL fallado (✗TL)** → modal **📦 Rebote** con los 5 jugadores en pista (cualquiera puede coger su propio rebote ofensivo). Tocas quién = registra rebote ofensivo. Botón **🔴 Rebote del rival** para registrar rebote defensivo del rival, o **Sin rebote · Saltar**.

Cada paso de la cadena tiene siempre un escape (cancelar/saltar) — no fuerza al usuario a registrar todo. Si la jugada es rápida y no quieres asistencia, saltas.

**Lo que sigue igual**

- Faltas siguen abriendo el modal de TL inteligente (v1.6.15).
- Falta del rival sigue abriendo el modal de TL para nuestro equipo (v1.7.1, Fix B).
- Modal granular de TL sigue arrancando con todos en ✗ (v1.7.1, Fix A).
- Shot Chart sigue funcionando con el toggle del partido (v1.7.0).
- El selector "CASADEMONT / SURNE" sigue alternando para registrar al rival cuando hay rivalPlayers.

**Decisión técnica**

El `selectLivePid` sigue existiendo pero solo lo usan algunas pantallas internas (no el banner). El nuevo flujo no toca el modelo de datos — solo cambia cómo se introducen las acciones. Toda la persistencia, log, stats, shot chart, mapa, etc. funciona igual.

---

### v1.7.1 — Faltas del rival con TL + modal granular más natural

**Fix A · Modal granular de tiros libres con default ✗ y toggle ✓/✗**

Antes los TL arrancaban con `?` (sin marcar) y obligaban a tocarlos todos antes de poder confirmar. La realidad es que la mayoría de los TL en sénior amateur fallan, así que tocar uno por uno solo cuando entran es más rápido y elimina la ambigüedad.

Ahora:

- Todos los TL **arrancan en ✗ (fallado)** por defecto.
- **Un toque** → ✓ (entra).
- **Otro toque** → vuelve a ✗.
- Botón Guardar siempre habilitado, mostrando el conteo: **"Guardar (2/3 entran)"** en tiempo real.

Aplicado a los 3 modales granulares: `openTLShootModal` (con rivales registrados), `openTeamTLShootModal` (sin rivales) y el nuevo `openOurTLShootModal` (cuando los TL los tira nuestro equipo).

**Fix B · Falta del rival → modal TL para NUESTRO equipo**

Antes, cuando el rival cometía falta:
- Pulsabas el `+` de FALTAS rival en el header → solo incrementaba el contador. No abría modal.
- O si tenías rivalPlayers registrados, asignar falta al jugador rival → solo incrementaba contador.

Ahora **siempre que el rival comete falta** se abre un modal nuevo `openOurFoulTLModal` que pregunta:

1. **¿Quién tira de NUESTRO equipo?** Lista con dos secciones:
   - **EN PISTA** (resaltado en naranja, badge "EN PISTA").
   - **BANQUILLO** (badge gris). Útil para errores de pista o sustituciones rápidas.
2. **Nº de tiros libres** con default según contexto:
   - Personal sin bonus rival → `Sin TL`.
   - Personal en bonus rival (rivalFouls ≥5) → `2 TL` + banner verde "⚠️ BONUS rival · esta falta tira 2 TL".
   - Técnica → `1 TL`.
   - Antideportiva / Descalificante → `2 TL`.

Tras "Continuar — marcar tiros" se abre el modal granular `openOurTLShootModal` (✗ default). Al confirmar:

- Suma `made` puntos a nuestro marcador del cuarto actual.
- Suma `made` a `live.stats[pid].p1m` y `missed` a `live.stats[pid].p1a` del jugador.
- Log: "Carlos TL: 2/3".

**Otros**

- La parada de reloj con falta (B-38) ahora también se aplica cuando la comete el rival, no solo nuestro equipo.

---

### v1.7.0 — Modo Pro Shot Chart 🎯

Primera versión "mayor" de Kortline desde el cierre del seguimiento en vivo. Introduce el **Modo Shot Chart** estilo Swish / Basketball Stats Assistant: capturar la zona de cada tiro de campo en una cancha SVG y generar mapa de tiros del partido.

**Activación**

Toggle nuevo en el modal de **Crear/Editar partido**:

> 🎯 **Modo Shot Chart** [PRO]
> Cada tiro de campo (+2/+3 y fallos) abre la cancha para tocar la zona donde se hizo. Genera mapa de tiros del partido.
> Default: OFF.

Persistido en `m.shotChart`. Cuando está ON, todo el flujo de tiros de campo cambia (los tiros libres mantienen su flujo normal — son siempre desde la línea, no aporta capturar zona).

**Flujo de captura**

1. Tocas un jugador → ACTPAD.
2. Pulsas **+2 / +3 / ✗2 / ✗3**.
3. Se abre el **modal de captura** con la cancha SVG ocupando casi toda la pantalla. Header con `+2 anotado` (verde) o `✗ Fallo de 3` (rojo) según el botón.
4. **Pulsas la zona** donde se hizo el tiro.
5. Si la zona detectada coincide con el botón → registra y cierra automáticamente.
6. Si **discrepa** (ej: pulsaste +2 pero tocaste fuera del arco) → **pre-aviso** "¿Cambiar a 3 puntos? Pulsaste 2 pero la zona donde tocaste está fuera del arco". Decides Sí (cambia a 3) o No (mantiene 2).

**Detección de zonas**

Helper `_classifyShot(x,y)` que aplica las reglas FIBA reales sobre proporciones de cancha (15m × 14m media cancha, aro a 1.575m del fondo, arco de 3 a 6.75m, líneas rectas del corner three a 0.90m de las bandas):

- Línea recta del corner three: `x < 90cm` o `x > 1410cm` → 3.
- Arco curvo: distancia desde el aro ≥ 6.75m → 3, < → 2.

**Cancha SVG**

Media cancha vertical en proporciones FIBA reales. Líneas: tablero, aro (resaltado en naranja Kortline), zona/pintura, semicírculo del tiro libre, arco de 3, línea recta del corner three, semicírculo de no-charge, semicírculo del medio campo. Estilizada con paleta dark, líneas blancas semitransparentes.

**Pantalla 📍 Mapa de tiros**

Accesible desde:

- Botón **📍** en el header del live game (sólo visible si `m.shotChart=true`).
- Botón **📍** en el detalle del partido finalizado (sólo si hay tiros registrados).

Vista:

- **3 cards de resumen**: 2pt anotados/intentados con %, triples anotados/intentados con %, total acierto.
- **Cancha grande con todos los tiros** como puntos: 🟢 verde para 2pt anotado, 🔵 azul para triple anotado, ✗ rojo para fallado.
- **Filtros**: jugador (dropdown), cuarto (chips), anotados/fallados/todos.
- **Leyenda** abajo.

**Modelo de datos**

```js
m.shotChart = true; // toggle del partido
m.live.shots = [
  { pid, made: true|false, value: 2|3, x, y, q, clockAt, ts }
]
```

`x` y `y` están normalizados 0–1 (origen arriba-izquierda del SVG). Esto desacopla del tamaño exacto del SVG en pantalla.

**Retrocompatibilidad**

Partidos creados antes de v1.7.0 tienen `m.shotChart` sin definir → tratado como `false`. Funcionan exactamente igual que en v1.6.15. Solo los partidos nuevos (o editados con el toggle) entran al flujo de Shot Chart.

**Pendiente para v1.7.1** (iteración 2)

- 🟢 Heatmap por zonas con % por zona (esquinas, codos, top of the key, pintura, etc.).
- 🟢 Mapa agregado por jugador (toda la temporada, no solo un partido).
- 🟢 Exportar PNG del mapa para compartir por WhatsApp.
- 🟢 Toque mantenido (long-press) en un tiro del mapa para ver detalles (jugador, cuarto, tiempo).

---

### v1.6.15 — UX del live: faltas, TL granular y nombres

Pasada de QA UX usando un PBP real (Casademont vs Surne Bilbao, Liga Endesa). Se reprodujeron ~160 jugadas en la app desplegada y se identificaron las fricciones del flujo en vivo. Esta versión cierra las críticas y dos cambios mayores pedidos: sección de faltas dedicada y flujo unificado de TL.

**F1 · Modal de Tiros Libres "inteligente"**

El modal ya no preselecciona siempre `2 TL`. Ahora calcula el default según contexto:

- Falta personal (`foul`) sin bonus → **`Sin TL`** (lo más común: cambio de posesión).
- Falta personal en bonus (≥5 faltas de equipo en el cuarto) → **`2 TL`** + banner verde **"⚠️ BONUS · esta falta tira 2 TL"**.
- Falta técnica (`ftech`) → **`1 TL`** (FIBA 2024-25).
- Antideportiva / descalificante → **`2 TL`**.

El banner de bonus es muy visible — el anotador no se le pasa que esa falta ya entra con TL. Reduce drásticamente el número de "Saltar sin asignar" cuando no estás en bonus.

**Flujo unificado de tiros libres tiro a tiro**

Antes había dos flujos según si tenías jugadores del rival registrados:

- **Con rivales** → modal granular tiro-a-tiro con `?` que cambia a ✓/✗.
- **Sin rivales** → fila inline `0 / 1 / 2 / 3` para "cuántos entran" en total.

Ahora **ambos flujos son granulares** — siempre marcas cada TL como entra (✓) o falla (✗). Esto:

- Coincide con cómo se anota tiro a tiro en banquillo.
- Evita ambigüedades ("entraron 2 de 3" no dice cuál falló).
- Es coherente entre los dos modos.

**F2 · Helper `_shortName` para nombres con inicial**

Antes la card on-court de un jugador llamado **"I. Javier Rodríguez"** mostraba **"I."** (`name.split(" ")[0]`). Ahora el helper detecta si el primer trozo es una inicial (`length≤2` o termina en `.`) y usa el siguiente. Aplicado en court cards, bench cards, modal de TL, descripción de sustituciones y log del partido. Para nombres normales (`"Santi Yusta"`) se sigue usando el primer nombre como antes.

**🤚 Sección de faltas dedicada en el ACTPAD**

Las 4 faltas (FALT, TÉC, ANT, DESC) ya no comparten fila con asistencias y robos. Ahora tienen su propia caja con:

- Título **🤚 FALTAS** en mayúsculas, color naranja-amarillo.
- Badge dinámico a la derecha que cambia según el estado:
  - `F:0/4` (gris) cuando no hay bonus.
  - `F:4/4 · PRÓX BONUS` (amarillo) cuando la próxima va a tirar TL.
  - `F:5 · BONUS` (verde) cuando ya estamos en bonus.
- 4 botones más grandes (no compactos), separados de la caja de "OTROS" que ahora solo tiene AST/ROB/TAP/PER.

**Toast "⏱ Reloj parado por falta"**

Antes, cuando `stopOnFoul` paraba el reloj con una falta, el cambio era silencioso (botón ⏸ → ▶). Ahora aparece un toast efímero "⏱ Reloj parado por falta" para que el anotador vea el motivo.

**Pendientes para v1.6.16 / v1.7**

- 🟢 Botón `↺ Deshacer última jugada` prominente.
- 🟢 Confirmación al cambiar a una pestaña de cuarto pasado.
- 🟢 Modo rápido (jugador no se deselecciona tras cada acción) configurable en ajustes.
- 🚀 **v1.7.0 · Modo Pro Shot Chart** — registro de tiros con coordenadas en cancha SVG, mapa de calor por jugador, exportación PNG.

---

### v1.6.14 — Medio tiempo configurable + hotfix B-42

**Selector de duración del medio tiempo en el overlay**

Al terminar el Q2 (final de la primera mitad), el overlay de fin de cuarto ahora incluye un selector de pildoras encima del botón **▶ Iniciar Medio tiempo**:

`1' · 3' · 5' · 10' (default) · 15' · ⚙ Otro`

La pildora seleccionada queda resaltada en naranja y el botón Iniciar refleja la duración elegida en tiempo real. **⚙ Otro** abre un prompt para introducir cualquier valor entre 1 y 30 minutos. La selección sólo afecta a ese descanso concreto: el siguiente medio tiempo del próximo partido vuelve al default 10'.

Cambio acotado: los descansos cortos entre Q1↔Q2 y Q3↔Q4 siguen en 1 minuto fijo. Si en una versión futura quieres también esos configurables, se aplica el mismo patrón.

**Hotfix B-42 — esta vez de verdad**

El fix del v1.6.13 para "faltas de equipo en prórroga continúan del Q4" no se ejecutaba porque la inicialización de `m.live` ya pre-allocaba `quarters+1` slots de `teamFouls`, así que el `while(length<newQ)` no entraba nunca. Ahora `activateOT()` sobrescribe explícitamente el slot del nuevo OT con el valor del periodo previo (Q4 en OT1, OT1 en OT2, etc.). Verificado en simulación: con `teamFouls=[..,4,0]` antes de OT, tras `activateOT()` queda `[..,4,4]` — el OT arranca con las 4 faltas acumuladas del Q4.

**Pendientes para v1.6.15**

Del informe de QA contra reglamento siguen abiertos: 🟡 descansos entre cuartos según FIBA (1' → 2', B-44), 🟡 display de TM en prórroga (B-46), 🟡 aviso visual al entrar en bonus (B-49), 🟢 wording del badge BONUS (B-52). Todos no críticos.

---

### v1.6.13 — Reglamento FIBA en el live game

Pasada de QA del seguimiento en vivo contra el reglamento FIBA 2024-25 / FEB sénior amateur. Se simuló un partido completo, se mapeó el código contra las reglas y se priorizaron los hallazgos. Esta versión cierra los **🔴 críticos** y los **🟢 nice-to-have triviales** detectados.

**B-38 + B-53 · El reloj se para con falta (configurable por partido)**

Nuevo toggle **⏱ Reloj se para con falta** en el modal de crear/editar partido. Cuando está activo, registrar una falta personal, técnica, antideportiva o descalificante detiene automáticamente el reloj de juego (regla FIBA 7.4). Default según categoría del equipo:

| Categoría | Default |
|-----------|---------|
| Sénior, Junior, Cadete, Infantil, Alevín, Benjamín, Escuela | ON |
| 3x3, Otro | OFF |

El usuario puede sobreescribir el default por partido. Ideal para amistosos donde el árbitro no para el reloj.

**B-42 · Las faltas de equipo en prórroga continúan del Q4**

Antes, al activar OT, el contador `teamFouls[OT]` se inicializaba en 0, así que la prórroga arrancaba en frío. Ahora se arrastra el valor del Q4 (o del último OT si ya se jugaron prórrogas previas) tal como dicta la regla FIBA 37.2. Misma lógica para `rivalFouls`.

**B-47 · Descalificación correcta por técnicas y antideportivas**

Nueva función `_isDQ(st)` que considera todas las modalidades de falta:
- 5 faltas personales acumuladas
- 2 faltas técnicas
- 2 faltas antideportivas
- 1 técnica + 1 antideportiva
- 1 falta descalificante directa

El contador en las cards (●●●●●), el badge "DQ", el toast y el highlight rojo ahora reflejan el estado real. La cuenta total de faltas mostrada al usuario suma personal + técnica + antideportiva + descalificante con el helper `_totalFouls(st)`.

**B-50 · Faltas antideportiva (ANT) y descalificante (DESC)**

Dos nuevas acciones en el ACTPAD del jugador seleccionado, junto a Personal (FALT) y Técnica (TÉC). Layout reorganizado en 2 filas de 4 botones (asistencia/robo/tapón/pérdida arriba; faltas abajo).

- **ANT** Antideportiva — 2 TL + posesión, cuenta para descalificación.
- **DESC** Descalificante — 2 TL + posesión + expulsión inmediata. Disparada por una sola.

Ambas suman a `teamFouls` y abren el modal de TL como las personales.

**B-48 · Falta técnica de equipo ya no cuenta doble**

Bug en `liveTeamAction` (modo "solo stats del equipo"): una falta técnica incrementaba `teamFouls` dos veces. Eliminada la línea duplicada — ahora suma 1 como cualquier otra falta.

**B-51 · Default de TL para falta técnica = 1 (FIBA 2024-25)**

El modal de tiros libres preselecciona ahora **1 TL** para falta técnica (era 2). Las antideportivas y descalificantes preseleccionan **2 TL**. Las personales en bonus o lanzamiento siguen con default 2. El usuario puede ajustar manualmente si su liga aplica reglas distintas.

**Bugs resueltos v1.6.13**

| ID | Descripción |
|----|-------------|
| B-38 | Reloj no se paraba con falta (regla FIBA 7.4). Ahora configurable por partido con default ON en categorías reglamentarias |
| B-42 | Faltas de equipo en prórroga reseteaban a 0 en lugar de continuar del Q4 (regla FIBA 37.2) |
| B-47 | 2 técnicas / 2 antideportivas / 1 técnica+1 antideportiva no descalificaban al jugador |
| B-48 | Falta técnica de equipo en modo team-only contaba doble en `teamFouls` |
| B-50 | Faltas antideportiva y descalificante no existían como acciones diferenciadas |
| B-51 | Default de TL para falta técnica era 2; FIBA 2024-25 son 1 + posesión |
| B-53 | (mejora) Toggle "reloj para con falta" configurable por partido y categoría |

**Pendientes para v1.6.14** (🟡 importantes y 🟢 menores del informe de QA): descansos entre cuartos según FIBA estricto (B-44), display de TM en prórroga (B-46), aviso visual al entrar en bonus (B-49), wording del badge BONUS (B-52).

Informe de QA completo en `QA_LIVEGAME_v1612.md`.

---

### v1.6.12 — HOY con marca de club y actividades sorpresa

**Título de HOY personalizado con el nombre del club**

El header de la pantalla HOY ahora muestra el nombre del club configurado en ⚙️ Ajustes (`S.clubName`) como título principal. Si no hay club configurado o sigue como "Kortline" (default), mantiene el "Hoy" genérico de siempre. La fecha pasa a una sub-línea más discreta debajo del título. Truncado con elipsis si el nombre es muy largo.

**Botón ➕ flotante para entrenamientos y partidos sorpresa**

Nuevo FAB naranja en la esquina inferior derecha de HOY (encima de la navbar, respeta `safe-area-inset-bottom` para iPhones con notch). Al pulsarlo abre un bottom sheet con dos opciones:

- **🏋️ Entrenamiento sorpresa** — para pasar lista hoy aunque el equipo no tenga entreno programado en su horario semanal. Lleva directamente al pase de lista de hoy.
- **🏆 Partido sorpresa** — abre el modal de crear partido con la fecha pre-rellenada a hoy (amistosos, copa, repesca…).

Si solo hay un equipo en el club, el FAB salta directo a la acción. Si hay varios, el bottom sheet pasa a un picker de equipo con un botón ← para volver al menú principal. El picker muestra el color del equipo como chip lateral, su nombre y categoría.

**Detalles de diseño**

- FAB de 56 px circular, gradiente naranja oficial (`#F06318` → `#dc5414`), sombra elevada y feedback de pulsación con `:active` (escala 0,92).
- En desktop el FAB se reposiciona dentro del frame de 430 px en vez de pegarse al borde derecho de la ventana.
- El menú principal y el picker comparten el mismo `bottom sheet` con `.mhandle`, así que también se cierran arrastrando hacia abajo (drag-to-dismiss de v1.6.8).

---

### v1.6.11 — Autoguardado del pase de lista

**Se elimina el botón 💾 Guardar del pase de lista**

La asistencia ya se persiste al instante (cada toque en el botón de estado, cada estrella, cada cambio de justificación). Las únicas piezas que aún dependían de un botón Guardar explícito eran las **notas del entrenador** y los **ejercicios del entrenamiento**. Desde v1.6.11 estas también se autoguardan con debounce de **800 ms** después de dejar de escribir.

**Indicador de autoguardado**

Donde antes estaba el botón grande naranja ahora hay una caja discreta en verde con el mensaje `💾 Autoguardado activo`. Cada vez que se persisten los cambios parpadea a `✓ Guardado` durante 1,5 segundos y vuelve al estado de reposo. El botón circular verde de WhatsApp 📤 se mantiene a la derecha.

**Commit al salir**

Si el usuario sale de la pantalla antes de que transcurra el debounce (`←` atrás, navbar, `HOY`, cambio de fecha, 📤 compartir), el borrador en memoria se vuelca al state y a localStorage de forma síncrona. No se pierde ni un carácter.

**Alcance del dirty tracking**

El sistema introducido en v1.6.10 sigue vivo, pero limitado a donde realmente aporta valor:

- **Notas del partido** (modal de detalle del partido) — mantiene botón explícito porque la pantalla tiene más contexto editable al mismo tiempo.
- **Modales CRUD** (equipo, jugador, lesión, partido, ajustes del club) — aquí el gate de tres opciones es necesario para evitar registros fantasma al cancelar.

**Bugs resueltos v1.6.11**

| ID | Descripción |
|----|-------------|
| B-38 | El pase de lista exigía un paso manual de Guardar para las notas/ejercicios aunque el resto de campos ya eran autoguardados — fricción innecesaria |

---

### v1.6.10 — Dirty tracking y aviso de cambios sin guardar

**Sistema transversal de detección de cambios sin guardar**

Nueva variable global `_dirty` que mantiene el contexto con cambios pendientes. Intercepta navegación (← atrás, navbar, `HOY`, cambio de fecha) y cierre de modales (X, backdrop, drag-to-dismiss). Al detectar intención de salir con cambios, abre un modal con 3 opciones: **💾 Guardar y salir**, **🗑 Descartar y salir**, **✏️ Seguir editando**.

> Nota v1.6.11: el pase de lista se migró a autoguardado, por lo que ya no aparece en este listado. El dirty tracking se mantiene en notas del partido y modales CRUD.

**Pantallas con el patrón aplicado**

- **Pase de lista** (asistencia): el botón `💾 Guardar` vuelve a estado activo al editar notas/ejercicios tras haber guardado. Tras guardar muestra `✅ Guardado`. El borrador de notas/ejercicios **ya no se pierde** al tocar asistencia, cambiar fecha o re-renderizar (nuevo `S._attDraft` en memoria).
- **Notas del partido**: mismo patrón con botón `💾 Guardar notas` ↔ `✅ Notas guardadas` y borrador preservado en `S._matchNotesDraft`.
- **Ajustes del club**: dirty tracking sobre todos los inputs. Cerrar con X, backdrop o arrastre dispara el aviso si hay cambios.
- **Modal de equipo** (crear/editar): idem.
- **Modal de jugador** (crear/editar): idem.
- **Modal de lesión** (marcar y editar): idem.
- **Modal de partido** (crear/editar): idem.

**Utilidades nuevas**

- `markDirty(cfg)` · `clearDirty()` · `_guardedExit(proceed)` — API central.
- `_confirmDirty(cfg, onDiscard, onSave)` — modal de 3 opciones.
- `_attachModalDirtyTracking(modalId, saveFn, label)` — engancha listeners genéricos a inputs/selects/textareas de un modal.
- `_closeModal(modalId)` — cierra un modal respetando el gate dirty.
- `navBack` / `navTo` / `navRoot` y el drag-to-dismiss respetan el gate.

**Bugs resueltos v1.6.10**

| ID | Descripción |
|----|-------------|
| B-34 | Tras pulsar Guardar en el pase de lista, editar notas/ejercicios no reactivaba el botón para volver a guardar |
| B-35 | Salir del pase de lista con cambios sin guardar en notas descartaba silenciosamente sin avisar |
| B-36 | Tocar asistencia (cycleAtt) o cambiar de fecha perdía las notas/ejercicios no guardadas |
| B-37 | Cerrar modales (equipo, jugador, lesión, partido, ajustes) con X/backdrop/arrastre descartaba cambios sin aviso |

---

### v1.6.9 — Nombres de equipo en MAYÚSCULAS y fix del borrado

**Nombres de equipo normalizados**

- Al crear o editar un equipo, el nombre se guarda siempre en **MAYÚSCULAS** (`toUpperCase()` en `saveTeam`). Coherente con cómo ya se venía mostrando en tarjetas, pase de lista y confirmación tipografiada de borrado.
- No se fuerza mayúsculas en nombres de jugadores ni en otros campos — sólo en el nombre del equipo.
- Sin migración: los equipos existentes quedan como estén hasta que el entrenador los edite (decisión consciente para no tocar datos en caliente).

**Fix: borrado de equipo fallaba al escribir en minúsculas**

- El input del modal de confirmación de borrado tenía `text-transform:uppercase` como estilo CSS, lo que hacía que el texto se viera en mayúsculas pero el `value` real mantenía la caja que escribía el usuario. La comparación estricta `value===requiredText` no coincidía y el botón nunca se activaba.
- Solución: el `oninput` ahora ejecuta `this.value=this.value.toUpperCase()` para normalizar el valor real. Además, la comparación del botón es case-insensitive como red de seguridad ante pegados. Añadidos `autocapitalize="characters"`, `autocomplete="off"`, `autocorrect="off"` y `spellcheck="false"` al input.

**Bugs resueltos v1.6.9**

| ID | Descripción |
|----|-------------|
| B-33 | Borrar un equipo requería escribir el nombre exactamente en mayúsculas — el `text-transform:uppercase` del input era solo visual y no coincidía con el valor comparado |

---

### v1.6.8 — Valoración colectiva inteligente, info FEB y bottom sheets

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

- WhatsApp de convocatorias (mensaje de call-up con horario, rival y quinteto)
- Gestión de temporadas y archivado
- Vista de resumen mensual
- Estadísticas por jugador por partido
- Plantilla de alineación para compartir
