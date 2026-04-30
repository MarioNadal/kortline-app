# Kortline — Manual de Usuario

**Versión 1.8.3** · _De la pista al dato_

> 🏀 Kortline es la PWA del **CB Jaca** para gestionar asistencia, partidos y estadísticas avanzadas desde el banquillo. Funciona offline en cualquier móvil, no necesita servidor y todos los datos viven en tu navegador. Diseño dark, mobile-first, paleta naranja `#F06318` y navy `#070f1e`.

---

## Tabla de contenidos

1. [Bienvenida y filosofía](#1-bienvenida-y-filosofía)
2. [Primeros pasos](#2-primeros-pasos)
3. [Pantalla HOY](#3-pantalla-hoy)
4. [Gestión de equipos y plantilla](#4-gestión-de-equipos-y-plantilla)
5. [Lesiones 🚑](#5-lesiones-)
6. [Pase de lista (entrenamiento)](#6-pase-de-lista-entrenamiento)
7. [Día de partido](#7-día-de-partido)
8. [Modo Pro Shot Chart 🎯](#8-modo-pro-shot-chart-)
9. [Estadísticas](#9-estadísticas)
10. [Backup y datos](#10-backup-y-datos)
11. [Tips Pro](#11-tips-pro)
12. [Resolución de problemas](#12-resolución-de-problemas)

---

## 1. Bienvenida y filosofía

Kortline cubre el ciclo completo de un equipo de baloncesto amateur:

- **Diario**: pase de lista, valoraciones, ejercicios.
- **Semanal**: convocatorias, calendario.
- **Partido**: live game con marcador, faltas, TM, sustituciones, shot chart.
- **Temporada**: stats agregadas, riesgo FEB, mapa de tiros agregado.
- **Compartir**: WhatsApp, exportar PDF/Excel/PNG, JSON de backup.

Todo en un **único archivo HTML** que vive en tu móvil. Sin servidor. Sin cuentas. Tus datos son tuyos.

---

## 2. Primeros pasos

### 2.1 Instalación como app

Kortline funciona desde el navegador, pero te recomendamos instalarla como PWA para acceso rápido y modo offline:

| Sistema | Cómo |
|---------|------|
| **iOS** (Safari) | Compartir → **Añadir a pantalla de inicio** |
| **Android** (Chrome) | Menú ⋮ → **Añadir a pantalla de inicio** o **Instalar aplicación** |

La primera vez que abras Kortline en cada plataforma verás un pop-up con el paso a paso.

> **🆕 v1.8.4 · Modo offline real.** Tras abrir Kortline una vez con red, la app queda cacheada en el dispositivo. Si en el banquillo no hay cobertura, recargar sigue funcionando: el partido en vivo, el pase de lista y los datos guardados están disponibles offline. La app se actualiza sola cuando vuelves a tener red.

### 2.2 Configuración del club

Pulsa el **logo** arriba a la izquierda para abrir ⚙️ **Ajustes del club**.

| Campo | Para qué |
|-------|----------|
| **Logo** | Imagen personalizada del club (recomendado: cuadrado, fondo transparente) |
| **Nombre del club** | Aparece en encabezados, mensajes, exports y como **título de HOY** (v1.6.12) |
| **Abreviatura** | Versión corta para WhatsApp (`CB JACA`) |
| **Lema / cierre** | Texto opcional al final de las convocatorias (`¡Vamos FamiliaCBJaca! 🏀`) |
| **Umbral riesgo FEB** | % de asistencia mínimo (estándar 75%) |

### 2.3 Seguimiento avanzado del entrenamiento

Sección **🎯 Seguimiento avanzado** con 4 toggles. Activa solo lo que vas a usar — cuanto menos, más rápido el pase de lista:

| Toggle | Para qué |
|--------|----------|
| 📋 **Ejercicios de la sesión** | Campo libre para anotar el plan del día |
| 📷 **Foto del entrenamiento** | Una foto por sesión (con compresión adaptativa, v1.8.1) |
| ⭐ **Valoración colectiva** | Puntúa 1-10 cómo ha entrenado el equipo |
| 👤 **Valoración individual** | Puntúa 1-10 ★ a cada jugador presente |

> 💡 Si activas las dos valoraciones, la colectiva se calcula **automáticamente** como media de las individuales (v1.6.8). Mantén pulsado ✏️ ~1s para editar manual.

---

## 3. Pantalla HOY

La pantalla de inicio. Muestra solo lo del día actual.

```
┌─────────────────────────────────────┐
│ [logo]  CB JACA          [N HOY]    │   ← v1.6.12
│         Hoy · sábado, 25 abril       │
├─────────────────────────────────────┤
│                                     │
│  🏀 PARTIDOS                        │
│  ┌─────────────────────────────┐    │
│  │ Sénior  vs  Bilbao          │    │
│  │ 20:00 · 🟢 Casa             │    │
│  │ [▶ Empezar/Continuar] [📋]  │    │
│  └─────────────────────────────┘    │
│                                     │
│  🏋️ ENTRENAMIENTOS                  │
│  ┌─────────────────────────────┐    │
│  │ Sub-16 · 19:30      Pasada  │    │
│  │ 92% · 12 PRES · 0 AUSE      │    │
│  │ [✏️ Editar lista]    [📤]   │    │
│  └─────────────────────────────┘    │
│                                     │
│                            ┌─────┐  │   ← FAB v1.6.12
│                            │  +  │  │
│  [🏠 HOY] [👥 EQ] [📊 STATS] └─────┘  │
└─────────────────────────────────────┘
```

### 3.1 Título con el nombre del club

Si tu club no es "Kortline" en Ajustes, el título grande del header pasa a ser **el nombre del club** y la fecha queda en sub-línea. Si no, "Hoy · fecha".

### 3.2 Botón ➕ flotante (FAB) — actividad sorpresa

Esquina inferior derecha. Para crear actividades **fuera del horario habitual** del equipo:

- 🏋️ **Entrenamiento sorpresa** — refuerzos, sesiones extra, recuperaciones. Lleva al pase de lista de hoy.
- 🏆 **Partido sorpresa** — amistosos, copa, calendario fuera de liga. Abre el modal de crear partido con fecha = hoy.

Si tienes un solo equipo, salta directo. Si tienes varios, picker con flecha ← para volver al menú principal.

---

## 4. Gestión de equipos y plantilla

### 4.1 Crear un equipo

**Equipos** → **＋**:

- **Nombre** — se guarda siempre en MAYÚSCULAS aunque escribas en minúsculas (v1.6.9).
- **Categoría** — afecta a defaults: nº de cuartos, duración, "reloj se para con falta" (sénior/junior/cadete = ON, 3x3 = OFF).
- **Entrenador/es** — uno o varios.
- **Días + horarios** — escribe la hora y el día se marca solo (v1.6.1).
- **Color** — paleta oficial Kortline para el equipo.

### 4.2 Plantilla de jugadores

Dentro del equipo → **＋ Añadir jugador**.

| Campo | Notas |
|-------|-------|
| **Foto/avatar** | Opcional; aparece junto al dorsal en plantilla y pase de lista |
| **Nombre** | Si empieza con inicial (`I. Javier Rodríguez`), el cortado en cards muestra "Javier" no "I." (v1.6.15) |
| **Dorsal** | Botones `−/+` para ajustar con el pulgar; sugerencia automática del próximo libre |
| **Posición** | Texto libre |
| **Notas** | Texto libre |

Los jugadores se ordenan por **dorsal ascendente**; los sin número van al final.

### 4.3 Acciones por fila de jugador

Cada fila tiene tres botones:

- ✏️ **Editar** — datos básicos (foto, nombre, dorsal, posición, notas).
- 🚑 **Lesión** — gris si sano, rojo si lesionado (ver sección 5).
- 🗑 **Eliminar** — pide confirmación.

---

## 5. Lesiones 🚑

Flujo dedicado para que el % de asistencia no penalice al lesionado y el historial quede completo.

### 5.1 Dar de baja

Pulsa **🚑** en un jugador sano. Modal **Nueva lesión**:

1. **Fecha de inicio** — por defecto hoy.
2. **Origen** — chips rápidos: 🏀 Entreno · 🏆 Partido · 🌐 Fuera · ❔ Desconocido. Si entreno o partido, dropdown con las 24 sesiones más recientes.
3. **Notas** — tipo, zona, semanas estimadas.

Al guardar:
- Punto rojo animado sobre el dorsal en plantilla y pase de lista.
- Badge `🚑 10/04 (6d)` en la fila (formato compacto, v1.6.7).
- **Backfill automático**: las sesiones desde la fecha de inicio quedan auto-justificadas con motivo `🤕 Lesión` y etiqueta `AUTO`.
- **Snapshot FEB**: se congela el % de asistencia previo. Si ya estaba en riesgo, sigue apareciendo en alertas con su % congelado.

### 5.2 Estado lesionado en el pase de lista

- Junto al nombre aparece 🚑.
- El estado se marca como `Excused` con motivo `🤕 Lesionado/a` y etiqueta gris `AUTO`.
- Solo se muestra como lesionado en fechas **iguales o posteriores** a la fecha de inicio (v1.6.7 · `isInjuredOn`).

### 5.3 Dar de alta

Pulsa **🚑** en un lesionado. Mini-modal con resumen (días, origen, nota) y tres acciones:

- ✅ **Dar de alta médica** — un solo toque. Hoy queda como fecha de alta.
- ✏️🚑 **Editar datos de la lesión**.
- **Cerrar**.

Tras el alta:
- Backfill final hasta la fecha del alta.
- Lesión archivada en `injuryHistory[]` con start, end, días, origen, etc.
- El jugador vuelve a estar sano y entra de nuevo en el cómputo normal de asistencia.

### 5.4 Historial de lesiones

Dentro del modal de jugador, un panel desplegable muestra el histórico (cuántas, días totales, orígenes). Útil para detectar patrones.

---

## 6. Pase de lista (entrenamiento)

Pantalla a la que vas desde HOY → **📋 Pasar lista** o desde un equipo.

```
┌─────────────────────────────────────┐
│ ←  Pase de Lista          [📤]      │
│    SÉNIOR TEST                       │
├─────────────────────────────────────┤
│  ‹  lun, 27 abr  ›    [HOY]          │
├─────────────────────────────────────┤
│  ┌─PRES─┐ ┌─AUSE─┐ ┌─TARD─┐ ┌─JUST─┐ │   ← contadores
│  │  10  │ │   1  │ │   1  │ │   2  │ │     clicables (filtro)
│  └──────┘ └──────┘ └──────┘ └──────┘ │
│                                     │
│  ↺ Resetear a presentes  (si hay cambios)
│                                     │
│  ┌─#4 Carlos    ✓ Presente    [✓] ─┐│
│  │ #5 Diego     ✗ Ausente     [✗] ││
│  │ #6 Eva 🚑    ◎ Justificado [◎] ││
│  │ ...                             ││
│  └─────────────────────────────────┘│
│                                     │
│  📋 Ejercicios del entrenamiento     │
│  📝 Notas del entrenador             │
│                                     │
│  ┌────────────────────────┐ ┌─────┐ │
│  │ 💾 Autoguardado activo │ │ 📤  │ │
│  └────────────────────────┘ └─────┘ │
└─────────────────────────────────────┘
```

### 6.1 Estados de asistencia

Toca el botón derecho de cada jugador para ciclar:

| Estado | Icono | Color |
|--------|-------|-------|
| **Presente** | ✓ | Verde |
| **Ausente** | ✗ | Rojo |
| **Tarde** | ⏱ | Amarillo |
| **Justificado** | ◎ | Gris |

Para justificados, pulsa `+ Motivo` para añadir la razón (enfermedad, lesión, examen, etc.) — quedan reflejados en exports y stats.

### 6.2 Contadores clicables (filtro rápido)

Las 4 cajas **PRES / AUSE / TARD / JUST** son botones. Pulsa para filtrar la lista a solo ese estado. La caja activa se resalta con ✓ y un banner indica el filtro. **✕ Todos** lo quita. Los contadores con valor 0 no son clicables. El filtro es **efímero** — se borra al cambiar de fecha o salir.

### 6.3 Reset rápido

Si has tocado por error, aparece un enlace discreto **↺ Resetear a presentes** arriba a la derecha (solo si hay cambios). Pide confirmación antes de aplicar.

### 6.4 Autoguardado del pase de lista (v1.6.11)

**No hay botón Guardar.** Todo se autoguarda al instante:

- Asistencia, justificaciones, valoración colectiva e individual, foto → guardado al toque.
- Notas y ejercicios → debounce de **0,8 segundos** después de dejar de escribir.

Donde antes estaba el botón Guardar, ahora hay una caja verde con **💾 Autoguardado activo**. Cada vez que persiste cambios parpadea a **✓ Guardado** durante 1,5 s. A su lado el botón circular verde 📤 para compartir por WhatsApp.

Si sales de la pantalla antes de que se complete el debounce (← atrás, HOY, cambio de fecha, navbar, 📤 compartir), Kortline vuelca el borrador al instante. **No pierdes nada.**

### 6.5 Foto del entrenamiento (v1.8.1)

Pulsa la caja **📷 Añadir foto** y elige desde cámara o galería del móvil. Kortline aplica **compresión adaptativa**:

| Intento | Lado máx | Calidad JPEG | Tamaño aprox |
|---------|----------|--------------|--------------|
| 1 | 600 px | 0.70 | ~80–120 KB |
| 2 | 480 px | 0.65 | ~50–80 KB |
| 3 | 400 px | 0.55 | ~30–50 KB |
| 4 | 320 px | 0.45 | ~20–30 KB |
| 5 | 240 px | 0.40 | ~10–15 KB |

Toast `⏳ Procesando foto…` mientras comprime y al final `📷 Foto guardada (~85 KB)` indicando el nivel real. Si no cabe ni con el nivel 5: toast `⚠️ Sin espacio. Borra fotos antiguas o exporta backup` y se mantiene la foto anterior.

### 6.6 Valoración colectiva inteligente (v1.6.8)

Si tienes activadas **ambas** valoraciones (colectiva + individual), la colectiva se calcula como **media de las individuales**. Badge verde `🔗 Auto`.

Para editar manual: **mantén pulsado** el botón ✏️ ~1 s. Anillo naranja se va llenando. Estrellas desbloqueadas → tocas. Badge naranja `✏️ Manual` + botón verde `🔗 Volver a modo automático`.

### 6.7 Aviso de cambios sin guardar (v1.6.10)

El sistema de **dirty tracking** se mantiene en notas del partido y modales CRUD (equipo, jugador, lesión, partido, ajustes). Si intentas salir con cambios sin guardar:

> ⚠️ Cambios sin guardar
>
> [💾 Guardar y salir]
> [🗑 Descartar y salir]
> [✏️ Seguir editando]

> El pase de lista NO usa este aviso desde v1.6.11 — está autoguardado.

---

## 7. Día de partido

### 7.1 Crear un partido

Equipo → **Partidos** → **＋ Añadir partido**:

- **Rival** (obligatorio).
- **Fecha** y **hora**.
- **Campo**: 🏠 Casa / ✈️ Fuera / ⚖️ Neutral.
- **Pabellón** (opcional).
- **Formato del partido** — nº de cuartos y minutos por cuarto. Default según categoría.
- **Toggles** — varios:

| Toggle | Defecto | Para qué |
|--------|---------|----------|
| 📊 Estadísticas del rival | OFF | Anota stats jugador a jugador del rival (requiere registrar sus jugadores) |
| 👥 Solo stats del equipo | OFF | No registra stats individuales, solo totales |
| ⏱ Reloj se para con falta | ON en sénior/junior/cadete/infantil/alevín, OFF en 3x3/otro | FIBA estricto: cualquier falta detiene el reloj (v1.6.13) |
| 🎯 Modo Shot Chart [PRO] | OFF | Captura coordenadas de cada tiro de campo en cancha SVG (v1.7.0, ver sección 8) |

### 7.2 Convocatoria

Tras crear partido o pulsando **✏️ Editar** sobre la convocatoria existente, se abre el wizard de **CONVOCATORIA · Equipo + Rival**. Dos pasos (rival opcional).

#### Paso 1 — Nuestro equipo

```
┌─────────────────────────────────────┐
│  CONVOCATORIA            [1/2]       │
│  Bilbao · sábado, 25 abr             │
│  [👥 CASADEMONT TEST] [🔴 Bilbao]    │
├─────────────────────────────────────┤
│  👥 Nuestro equipo                   │
│  6 convocados · 5 titulares          │
│  Toca para convocar · ⭐ titular · (C)│
│                                     │
│  ┌─────────────────────────────────┐ │   ← Banner v1.7.7
│  │ © Capitán: #4 Carlos Uno        │ │
│  │ Dirige al equipo si te expulsan  │ │
│  └─────────────────────────────────┘ │
│                                     │
│  ┌─[✓] #4 Carlos    [⭐] [(C)] ────┐│
│  │  [✓] #5 Diego    [⭐] [(C)]    ││
│  │  [ ] #11 Eva                     ││
│  │  ...                             ││
│  └─────────────────────────────────┘│
│                                     │
│  [Siguiente: Bilbao →]               │
│  [✅ Listo — ir al partido]           │
└─────────────────────────────────────┘
```

**Botones laterales en cada fila:**

- **⭐ Titular** — solo si el jugador está convocado. Máximo 5.
- **(C) Capitán** — solo si convocado. Máximo 1 (al pulsar otro, el anterior pierde la C).

**Banner del capitán prominente (v1.7.7):**

- 🟢 Verde si designado: `© Capitán: #X Nombre · Dirige al equipo si el entrenador es expulsado`.
- 🟡 Amarillo si no: `⚠️ Sin capitán designado · FIBA: pulsa (C) junto a un convocado`.

**Convocatoria fluida (v1.7.6):** al tocar jugadores, **el scroll se mantiene** donde estaba (refresh in-place de cada fila, no redibujado del modal completo).

#### Validaciones al pulsar "✅ Listo"

Se comprueba en cadena (v1.7.7):

| Caso | Tipo | Mensaje |
|------|------|---------|
| 0 convocados | 🔒 Bloqueante | "Sin convocados — no puedes empezar el partido" |
| < 5 convocados | 🔒 Bloqueante | "Solo X convocados — FIBA exige 5 en pista" |
| < 5 titulares | ⚠️ Aviso | "Faltan titulares (X/5)" + opción "Continuar igual (no recomendado)" |
| Sin capitán | ⚠️ Aviso | "Sin capitán designado · FIBA: dirige si te expulsan" + "Continuar igual" |

Los **bloqueantes** no permiten seguir. Los **avisos** sí — puedes ignorarlos conscientemente con el botón gris.

#### Paso 2 — Rival (opcional)

Si activaste 📊 Estadísticas del rival, añade aquí los dorsales y nombres del rival. Es lo que permite asignar TLs y faltas a jugadores rivales concretos en el live.

### 7.3 Live game — Modo Banco (v1.7.2)

Cambio de paradigma desde v1.7.2: el flujo es **acción → jugador**, no al revés.

```
┌─────────────────────────────────────┐
│  ←  🔴 EN VIVO · Q1   [BONUS] [F:5/4] [📍] [📤] [🏁]
│     CASADEMONT vs BILBAO             │
│  ┌──────────────────────────────────┐│
│  │ 10:00 ✏️    [▶ play] [↺] [T.M] ││   ← Reloj
│  └──────────────────────────────────┘│
├─────────────────────────────────────┤
│  CASADEMONT [12]:[8] BILBAO          │   ← Marcador
│  FALTAS ●●○○○        FALTAS ●●●○○    │
│  T.M.   ●○                ○○ T.M.    │
│  ┌─Q1─┐ ┌─Q2─┐ ┌─Q3─┐ ┌─Q4─┐         │   ← Cuartos
│  │ 12 │ │  🔒│ │  🔒│ │  🔒│         │     v1.7.9
│  └────┘ └────┘ └────┘ └────┘         │
├─────────────────────────────────────┤
│  ▶ EN PISTA (5/5)  Toca para sustituir
│  ┌─#4─┐┌─#5─┐┌─#11┐┌─#7─┐┌─#10┐      │
│  │ 8  ││ 4  ││ 0  ││ 2  ││ 6  │      │
│  │Carl││Dieg││Eva ││Feli││Javi│      │
│  └────┘└────┘└────┘└────┘└────┘      │
├─────────────────────────────────────┤
│  ⚡ ACCIONES                         │
│  ⚡ PUNTOS                           │
│  [+2] [+3] [+1 TL]                  │
│  [✗2] [✗3] [✗ TL]                   │
│  📦 REBOTES                          │
│  [OF] [DEF]                         │
│  🎯 OTROS                            │
│  [AST] [ROB] [TAP] [PER]            │
│  🤚 FALTAS                F:5/4 BONUS│   ← Badge dinámico
│  [FALT] [TÉC] [ANT] [DESC]          │     v1.6.15
└─────────────────────────────────────┘
```

#### 7.3.1 Cómo registrar acciones

1. **Toca la acción** en el banner (por ejemplo +3 Triple).
2. Modal **¿Quién?** con 5 botones grandes del quinteto.
3. Tocas el jugador.
4. (Si shot chart está ON) → tocar zona de la cancha (sección 8).
5. **Encadenamientos automáticos** opcionales:
   - Tras canasta → modal **🎁 ¿Asistencia?** con los otros 4 + Saltar.
   - Tras fallo (✗2/✗3/✗TL) → modal **📦 ¿Rebote?** con los 5 + 🔴 Rebote del rival + Saltar.

> 💡 **Las cards del quinteto NO registran acciones.** Tocarlas abre el modal de sustitución (ver 7.3.2).

#### 7.3.2 Sustituciones

Al tocar una card del quinteto:

```
↔ Sustitución
SALE: #4 Carlos Uno

¿Quién entra?
  #6 Hugo
  #33 Helena
  ...
```

Lista del banquillo válido (los descalificados aparecen en gris y no son seleccionables). Si hay descalificación forzosa, el modal lo abre la app sin que toques nada (sección 7.3.5).

> Para llevar al rival a otro jugador (si hay rivalPlayers), toca el toggle CASADEMONT/BILBAO arriba.

#### 7.3.3 Sección 🤚 Faltas (v1.6.15)

Caja propia del banner con cuatro botones:

| Acción | Default TL | Cuándo |
|--------|------------|--------|
| **FALT** Personal | Sin TL si no bonus / 2 TL si bonus | Falta normal |
| **TÉC** Técnica | 1 TL + posesión (FIBA 2024-25) | Protesta, demora, banquillo |
| **ANT** Antideportiva | 2 TL + posesión | Contacto excesivo, intencional |
| **DESC** Descalificante | 2 TL + posesión + expulsión | Agresión, segunda antideportiva |

**Badge dinámico** a la derecha del título:

- `F:0/4` (gris) — sin bonus aún.
- `F:4/4 · PRÓX BONUS` (amarillo) — la siguiente falta tirará TL.
- `F:5 · BONUS` (verde) — ya en bonus.

#### 7.3.4 Modal de tiros libres inteligente (v1.6.15)

El modal calcula default según contexto:

- Personal sin bonus → **Sin TL** preseleccionado.
- Personal en bonus → **2 TL** + banner verde `⚠️ BONUS · esta falta tira 2 TL`.
- Técnica → **1 TL**.
- Antideportiva / Descalificante → **2 TL**.

Tras elegir nº TL > 0 → modal granular **tiro a tiro** (v1.7.1):

```
🎯 Tiros libres
3 tiros — toca los que entran
[✗] [✗] [✗]   ← arrancan todos en fallado
[Guardar (0/3 entran)]   ← se actualiza al tocar
```

Cada toque cambia ✗ → ✓. Otro toque vuelve a ✗. Por defecto **todos fallados** (la mayoría suelen fallar) — solo tocas los que entran. Botón final con conteo en tiempo real.

#### 7.3.5 Faltas del rival → tiros libres NUESTROS (v1.7.1)

Cuando el rival comete falta — tocando el `+` de FALTAS rival en el header o asignándola a un jugador rival concreto — Kortline abre automáticamente:

1. Picker del **tirador nuestro**: lista con dos secciones **EN PISTA** (los 5 actuales, resaltados) y **BANQUILLO** (los demás convocados).
2. Nº de TL con default según bonus rival y banner verde si aplica.
3. Modal granular ✗ default tras elegir nº.

Si entra el TL, los puntos suman a nuestro marcador y a `stats[pid].p1m` del jugador. Si fallan, suman a `p1a`.

#### 7.3.6 Sustitución forzosa tras descalificación (v1.7.5)

Cuando una falta descalifica al jugador (5 personales, 2 técnicas, 2 antideportivas, 1 técnica + 1 antideportiva, o 1 descalificante directa) y está en pista, se abre automáticamente:

```
⛔ Descalificado
2 faltas técnicas

⬇️ SALE: #5 Diego Dos

ELIGE SUSTITUTO DEL BANQUILLO
[#7 Felipe (0 faltas)]
[#33 Helena (2 faltas)]
...
```

**Sin botón Cancelar.** Tienes que elegir un sustituto sí o sí. Excepción única: si todo el banquillo está descalificado, aparece aviso `⚠️ Banquillo agotado · continuarás con menos jugadores en pista` + botón único `OK, sacar sin sustituir`.

#### 7.3.7 Reloj y tiempos muertos

**Reloj** — botón ▶/⏸ para iniciar/pausar, ↺ para resetear, toca el tiempo para editarlo manualmente. Avisos visuales a 2:00, 1:00, 30s y 10s.

**Reloj se para con falta (v1.6.13).** Si el toggle del partido está ON, registrar una falta para automáticamente el reloj y muestra toast `⏱ Reloj parado por falta`.

**Tiempos muertos** — botón **T.M** abre overlay pantalla completa con:
- Cuenta atrás 1:00.
- Reloj de juego pausado.
- Dots por equipo y mitad (2 en H1, 3 en H2, regla FEB amateur).
- Sustituciones del quinteto durante el TM.
- Botón ▶ Reanudar para terminar antes.

#### 7.3.8 Cuartos bloqueados (v1.7.9)

Los tabs **Q2 / Q3 / Q4** aparecen **en gris al 45% de opacidad** con icono **🔒** mientras no hayas llegado a ellos. No reaccionan al click — toast `⚠️ Aún no has llegado a Qx`.

#### 7.3.9 Confirmación al editar un cuarto pasado (v1.8.5)

Si tocas la pestaña de un cuarto distinto al actual (típico al hacer scroll en las pestañas Q1/Q2/...), aparece confirmación:

> ⚠️ Estás en **Q3**. ¿Editar **Q1**?
> Las acciones que registres se guardarán en Q1.
>
> [Editar Q1] · [Cancelar]

Solo afecta a cuartos **ya jugados** (los bloqueados con 🔒 siguen sin reaccionar). Cambiar al cuarto actual no necesita confirmación.

#### 7.3.10 Toast al entrar en bonus (v1.8.5)

Al cruzar la 5ª falta de equipo en un cuarto se dispara una sola vez:

> 🚨 BONUS activo · próxima falta = 2 TL

La sección 🤚 Faltas mantiene el badge "BONUS" estático mientras el cuarto siga en bonus; el toast es solo el aviso del **momento exacto del cruce**.

#### 7.3.11 🚀 Modo rápido (v1.8.5)

Toggle nuevo en ⚙️ Ajustes → "Modo rápido (live game)":

> **🚀 Sin preguntas de cadena**
> Tras anotar canasta o fallo, NO preguntará por asistencia/rebote. Más rápido si solo registras lo esencial.

Default OFF. Útil cuando el ritmo del partido va alto y solo te interesa el marcador + stats básicas. Las stats de asistencias y rebotes se siguen pudiendo registrar manualmente desde el banner.

#### 7.3.12 Selector de equipo on-court mejorado (v1.8.5)

El toggle "Nosotros / Rival" del live game ahora muestra:

- **Punto de color** del equipo (con borde blanco si está activo).
- **Abreviatura** si la has configurado (ej. `JAC` en lugar de `CB Jaca Sénior`).
- **Truncado inteligente** que prefiere la primera palabra significativa antes de cortar con "…":
  - `Casademont Zaragoza` → `Casademont`
  - `Surne Bilbao` → `Surne Bilbao` (cabe entero)
  - `I.A.U.D Tarazona` → `I.A.U.D`

Cuando el reloj llega a 0 al final del Q1, se desbloquea Q2; etc. Puedes volver a un cuarto pasado para revisar o añadir acciones.

#### 7.3.9 Descansos entre cuartos

| Cuándo | Duración |
|--------|----------|
| Entre cuartos (Q1↔Q2, Q3↔Q4) | 1 minuto fijo |
| Medio tiempo (Q2↔Q3) | 10 min por defecto, **configurable en el momento** |

**Selector de medio tiempo (v1.6.14).** Al terminar el Q2, encima del botón **▶ Iniciar Medio tiempo** aparece:

```
DURACIÓN DEL MEDIO TIEMPO
[1'] [3'] [5'] [10'] [15'] [⚙ Otro]
```

Toca la pildora que quieras (10' por defecto). **⚙ Otro** abre prompt para 1–30 min. La elección solo afecta a este descanso.

Durante el descanso aparece overlay con cuenta atrás y mensaje "Próximo: Q3". Botón **▶ Iniciar Q3** para terminar antes.

#### 7.3.10 Prórroga automática

Al llegar a 0 el reloj del último cuarto **en empate**, aparece automáticamente:

```
🤝 ¡EMPATE!
Fin del Q4 · 47 — 47
¿Se juega prórroga?
[🏀 Jugar OT]   [🏁 Finalizar partido]
```

Cada OT dura **5 minutos**. Las **faltas de equipo en OT continúan del Q4** (regla FIBA 37.2 — no se resetean) (v1.6.13/v1.6.14).

#### 7.3.11 "Continuar partido" desde la 1ª vez (v1.7.9)

Una vez has entrado al live game al menos una vez (aunque no hayas registrado nada), el botón en HOY y matchDetail pasa a **🔴 Continuar partido / Continuar en vivo** (rojo). El badge "🔴 EN JUEGO" y el marcador se mantienen restrictivos: solo aparecen cuando hay actividad real.

---

## 8. Modo Pro Shot Chart 🎯

Iteración Pro de Kortline para clubes que quieren analítica avanzada de tiros.

### 8.1 Activar

En el modal de **Crear/Editar partido**, toggle **🎯 Modo Shot Chart [PRO]**. Solo afecta al partido en curso. Default OFF.

### 8.2 Captura de cada tiro

Cuando está ON y pulsas **+2 / +3 / ✗2 / ✗3** en el banner de acciones (tras elegir jugador), se abre la cancha SVG a pantalla completa:

```
┌─────────────────────────────────────┐
│  🎯 SHOT CHART        [✕ Cancelar]   │
│  Carlos #4                           │
│  ┌─────────────────────────────────┐ │
│  │ +2 Canasta — Pulsa la zona      │ │
│  └─────────────────────────────────┘ │
│       ┌────────────────┐             │
│       │ [cancha SVG]   │             │
│       │   semi cancha  │             │
│       │   con líneas   │             │
│       │   FIBA reales  │             │
│       └────────────────┘             │
│  Si tocas fuera del arco con +2,     │
│  te avisaremos antes de cambiar.     │
└─────────────────────────────────────┘
```

Tocas la zona donde se hizo el tiro → registra coordenadas y cierra. Si hay **discrepancia** entre el botón pulsado y la zona detectada (`+2` pero zona de 3, o viceversa) aparece pre-aviso (v1.7.4):

```
⚠️ Zona y tipo no coinciden

Pulsaste Canasta de 2 pero la zona donde
tocaste está fuera del arco de 3.

[✓ Registrar como Triple anotado]
[↺ Volver a tocar zona de 2p]
```

- **✓ Registrar como triple** → cambia el valor según la zona.
- **↺ Volver a tocar** → reabre la cancha. Tienes que tocar zona consistente con el +2 original.

> Garantía: ningún shot guardado tiene coordenadas inconsistentes con su valor.

### 8.3 Mapa de tiros 📍

Botón **📍** en el header del live game (visible si shotChart=ON) y en el detalle del partido finalizado. También accesible desde HOY si el partido está activo.

```
┌─────────────────────────────────────┐
│  ←  📍 Mapa de tiros        [📤]    │
│     CASADEMONT vs BILBAO             │
├─────────────────────────────────────┤
│  [🎯 Puntos]   [🔥 Heatmap zonas]    │   ← v1.8.2
│  [📅 Este partido]  [🗓 Temporada]   │   ← v1.8.2
├─────────────────────────────────────┤
│  JUGADOR  [▼ Todos los jugadores]    │
│  [Todos] [Q1] [Q2] [Q3] [Q4]         │
│  [Todos] [✓ Anotados] [✗ Fallados]   │
│                                     │
│  ┌──┐  ┌──┐  ┌──┐                   │
│  │2/3│ │1/2│ │3/5│   ← cards resumen │
│  │2pt│ │tri│ │tot│                   │
│  └──┘  └──┘  └──┘                   │
│                                     │
│       ┌────────────────┐             │
│       │ cancha + tiros │             │
│       │ 🟢 2pt anot     │             │
│       │ 🔵 3pt anot     │             │
│       │ ✗  fallado      │             │
│       └────────────────┘             │
└─────────────────────────────────────┘
```

#### Modos de visualización (v1.8.2)

| Modo | Qué muestra |
|------|-------------|
| **🎯 Puntos** | Cada tiro como punto individual (verde 2pt, azul triple, ✗ rojo fallado) |
| **🔥 Heatmap zonas** | Cancha dividida en 7 zonas, cada zona pintada según `%` de acierto. Texto `X/Y · pct%` en cada zona |

Las 7 zonas FIBA son: pintura, mid izquierda/centro/derecha, esquina izquierda 3pt, top + alas 3pt, esquina derecha 3pt.

Gradiente del heatmap:

| % | Color |
|---|-------|
| <20% | 🔴 rojo |
| 20–29% | 🟠 naranja |
| 30–39% | 🟡 amarillo |
| 40–49% | 🟢 verde claro |
| ≥50% | 🟢 verde |
| sin tiros | gris translúcido |

#### Fuente de datos (v1.8.2)

| Toggle | Qué incluye |
|--------|-------------|
| **📅 Este partido** | Solo `m.live.shots` del partido actual |
| **🗓 Toda la temporada** | Concatena los `shots` de todos los partidos del equipo. El picker de jugadores se amplía con cualquiera convocado en cualquier partido. Filtros por cuarto desaparecen (no aplica) |

### 8.4 Exportar PNG para WhatsApp (v1.8.2)

Botón verde **📤** en el header del mapa. Genera un PNG ~1000×1000 px con:
- Cabecera: nombre del club + jugador filtrado + fecha + ratio `made/att` + `%`.
- Cancha completa con la vista actual (puntos o heatmap).
- Fondo navy oficial del club.

**Si el dispositivo soporta `navigator.canShare({files})`** (iOS Safari, Android Chrome modernos) → abre el menú nativo de compartir con WhatsApp/etc directamente. Si no → descarga `kortline-tiros-{equipo}-{fecha}.png` y lo compartes manualmente.

---

## 9. Estadísticas

### 9.1 Stats avanzadas en el live game (v1.8.0)

En la tabla del live (a pantalla completa girando el móvil):

| Columna | Qué es |
|---------|--------|
| **MIN** | Minutos jugados — calculado vía log de subs y tiempo absoluto del juego |
| **PTS** | Puntos totales (1×p1m + 2×p2m + 3×p3m) |
| **T2 / T3 / TL** | Anotados / Intentos |
| **eFG%** | Tiro efectivo: `(p2m + 1.5×p3m) / intentos × 100`. Pondera triples |
| **RO / RD** | Rebotes ofensivos / defensivos |
| **AST / F / ROB / TAP / PER** | Asistencias / Faltas / Robos / Tapones / Pérdidas |
| **+/-** | Diferencia de marcador mientras está en pista (verde positivo / rojo negativo) |
| **EFF** | Eficiencia FEB: `pts + reb + ast + stl + blk − fallados − to − faltas` |

La fila de **Totales** muestra los agregados con eFG% y EFF también calculados.

### 9.2 Pantalla completa por giro (v1.8.0)

**Gira el móvil a horizontal** estando en el live game → se abre automáticamente el overlay de stats a pantalla completa con todas las columnas. Al volver a vertical se cierra solo. Sin botón manual — más limpio y resuelve el problema del botón "atrás" detrás de la barra de notificaciones.

### 9.3 Pantalla de estadísticas globales

**Equipo → 📊 Stats**:

- **Tarjetas por jugador** — % asistencia, sesiones jugadas, racha, valoración media.
- **Riesgo FEB** — jugadores por debajo del umbral (75% por defecto, configurable) marcados con ⚠️. Lesionados aparecen con `🚑 lesionado desde fecha · congelado`.
- **Filtros**: Todos / ⚠️ Riesgo / 🔥 Racha mala.
- **Gráficos** — tendencia 24 últimas sesiones.
- **Exports** — PDF (con marcado de riesgo) y Excel (4 hojas: Resumen, Mensual con media ponderada, Sesiones, Lesiones).

> 💡 El export respeta el filtro activo. Si tienes "⚠️ Riesgo" puesto, el PDF/Excel solo lleva esos jugadores.

---

## 10. Backup y datos

### 10.1 Filosofía honesta

Kortline guarda todo en `localStorage` del navegador. Eso significa que **si limpias la caché del navegador, pierdes todo**. La única forma segura de proteger tus datos es **exportar el JSON manualmente y guardarlo**:

- Drive / Dropbox / iCloud
- Email a ti mismo
- Pendrive físico

> 💾 Aviso visible en HOY: si nunca has exportado, aparece banner amarillo `Sin backup reciente`.

### 10.2 Exportar / Importar

⚙️ Ajustes → 💾 Copia de seguridad:

- **⬇️ Exportar** — descarga `kortline-backup-{fecha}.json` con TODO (equipos, jugadores, sesiones, partidos, eventos, fotos, shots, configuración, logo).
- **⬆️ Importar** — sube un JSON exportado anteriormente. **Sobreescribe** los datos actuales — exporta primero por si acaso.

### 10.3 Fin del autobackup duplicador (v1.8.3)

Hasta v1.8.2, cada `save()` duplicaba todos los datos en `cbj:autobackup` del mismo localStorage. Eso era una falsa seguridad (si limpias caché, también pierdes el autobackup) y consumía la mitad del espacio disponible — la primera foto subida ya no cabía.

**v1.8.3 elimina el autobackup automático.** Si tienes un autobackup viejo (residuo de versiones previas), aparece banner amarillo en Ajustes → Copia de seguridad:

> 🔄 Autobackup antiguo: **74 KB**
>
> v1.8.3 ya no genera autobackup duplicado. Si tu app va lenta o no caben fotos, bórralo aquí.

Con dos botones:

- **🔄 Restaurar** — usar el autobackup viejo (por si querías recuperar algo).
- **🗑 Borrar (libera 74 KB)** — limpia el autobackup. Tus datos reales no se tocan.

> 💡 Antes de borrar, exporta el JSON manualmente — ese es tu backup real.

---

## 11. Tips Pro

### 11.1 Atajos del live game

- **Tocar jugador en pista** = abrir modal de sustitución (no registra acciones).
- **Tocar acción en banner** = picker "¿quién?" con los 5 del quinteto.
- **Tras canasta** → modal asistencia automático con Saltar.
- **Tras fallo** → modal rebote automático con "Rebote del rival" + Saltar.
- **Pestaña de cuarto futuro** = bloqueada con 🔒 hasta que llegues.
- **Girar móvil** = pantalla completa de stats con MIN, +/-, EFF, eFG%.

### 11.2 Convocatoria rápida

- Botones **Todos** / **Ninguno** arriba a la derecha del wizard.
- El **scroll se mantiene** al tocar jugadores (v1.7.6).
- Si activas un jugador como **titular** sin querer, vuélvelo a tocar y se desactiva.
- **Capitán** se cambia tocando (C) en otra fila.

### 11.3 Shot Chart productivo

- **Activa shotChart solo en partidos importantes** — añade 1 toque por tiro, no compensa en amistosos.
- Tras finalizar el partido, ve a **📍 Mapa de tiros** → pulsa **🔥 Heatmap zonas** para resumen visual de zonas eficientes.
- Cambia a **🗓 Toda la temporada** + filtra por jugador para análisis acumulado.
- Comparte por WhatsApp con el botón **📤** — los jugadores reciben mapa visual de su rendimiento.

### 11.4 Stats avanzadas en partido

- **MIN** se acumula con tracking de subs — útil para repartir minutos equitativos.
- **+/-** ayuda a ver impacto real del jugador en el marcador (alguien sin puntos con +/- alto suele defender bien).
- **EFF** condensa en un número la productividad — buen indicador para partido individual.
- **eFG%** = mejor que FG% normal porque pondera triples (1 triple cuenta como 1.5×).

---

## 12. Resolución de problemas

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| **Foto da "Almacenamiento lleno"** | autobackup duplicador (pre-v1.8.3) | Ajustes → Copia de seguridad → 🗑 Borrar autobackup antiguo |
| **No salta a "Continuar partido"** | partido nunca abierto | Entra al live al menos una vez |
| **Banner del capitán sigue amarillo** | hotfix v1.7.8 no en producción | Actualiza la app / hard refresh |
| **Stats en horizontal sin botón atrás** | desde v1.8.0 ya no hay botón | Vuelve a vertical y se cierra solo |
| **Modal TL aparece tras CADA falta** | sin bonus el default es "Sin TL" | Pulsa "Confirmar (sin TL)" o el botón gris "Saltar sin asignar" |
| **Carlos en card aparece como "I."** | nombre empieza con inicial pre-v1.6.15 | Edita el jugador y reabre el live game (`_shortName` lo arregla) |
| **No puedo saltar a Q3** | Q3 está bloqueado hasta llegar | Lleva el reloj del Q2 a 0 — Q3 se desbloquea solo |
| **Convocatoria salta al inicio al tocar jugador** | regresión pre-v1.7.6 | Actualiza la app — hace refresh in-place |
| **Shot guardado en zona equivocada** | tocaste mal y elegiste "Mantener" pre-v1.7.4 | En v1.7.4+ el botón es "↺ Volver a tocar zona" — fuerza consistencia |

---

## Anexo: glosario de iconos

| Icono | Significado |
|-------|-------------|
| 🏀 | Partido o canasta |
| 🏋️ | Entrenamiento |
| 🚑 | Lesión (jugador) |
| 📋 | Pasar lista / convocatoria |
| 📷 | Foto del entrenamiento |
| 📤 | Compartir / exportar |
| 📥 | Descargar |
| 📍 | Mapa de tiros |
| 🎯 | Modo Shot Chart |
| 🔥 | Heatmap |
| 🗓 | Temporada |
| 📅 | Este partido |
| ⏱ | Reloj / TM |
| ⚡ | Acciones del banner |
| 📦 | Rebotes |
| 🤚 | Faltas |
| ⛔ | Descalificado / DQ |
| 🔒 | Bloqueado (cuarto futuro) |
| ⚠️ | Aviso |
| ✓ ✗ | Anotado / Fallado |
| ⭐ | Titular |
| (C) | Capitán |
| 💾 | Autoguardado |
| 🔄 | Sincronizar / restaurar |
| 🗑 | Borrar |
| ↺ | Reset / volver a tocar |
| ↔ | Sustitución |
| ⬇️ ⬆️ | Sale / Entra |

---

_Kortline · Hecho con 🧡 para CB Jaca · v1.8.5_
_Desarrollado por Mario Nadal Ara_
