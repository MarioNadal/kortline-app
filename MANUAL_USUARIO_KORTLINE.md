# Kortline — Manual de Usuario

**Versión 1.6.8**
_Kortline — De la Pista al Dato_

---

## Primeros pasos

### Instalación como app

Kortline funciona desde el navegador, pero puedes instalarla como app nativa:
- **iOS (Safari):** Compartir → Añadir a pantalla de inicio
- **Android (Chrome):** Menú ⋮ → Añadir a pantalla de inicio

### Configuración inicial del club

Antes de empezar, pulsa el **logo** en la esquina superior izquierda para entrar en ⚙️ Configuración:

- **Logo** — imagen personalizada del club
- **Nombre del club** — aparece en mensajes y encabezados
- **Abreviatura** — versión corta para los mensajes WhatsApp (ej. `CB JACA`)
- **Lema / cierre** — texto opcional al final de todas las convocatorias (ej. `¡Vamos FamiliaCBJaca! 🏀`). Si se deja vacío no aparece nada.

### Seguimiento avanzado (opcional)

Dentro de ⚙️ Configuración encontrarás la sección **🎯 Seguimiento avanzado del entrenamiento** con 4 interruptores. Actívalos solo si los vas a usar — cuantas menos opciones, más rápido el pase de lista:

- 📋 **Ejercicios de la sesión** — campo libre para anotar qué has trabajado
- 📷 **Foto del entrenamiento** — guarda una foto por sesión
- ⭐ **Valoración colectiva** — puntúa del 1 al 10 el entrenamiento global
- 👤 **Valoración individual** — puntúa a cada jugador presente con 1-10 ★

---

## Gestión de equipos

### Crear un equipo

Pantalla **Equipos** → **＋**. Configura nombre, categoría, entrenador/es, días y horarios, y color identificativo.

> 💡 **Horarios rápidos:** escribe directamente la hora y la casilla del día se marca sola. No hace falta pulsar antes el check.

### Añadir jugadores

Dentro del equipo → sección **Plantilla** → **＋ Añadir jugador**.

Cada jugador tiene:
- **Foto / avatar** (opcional) — se muestra junto al dorsal en la plantilla y en el pase de lista
- **Nombre**
- **Dorsal** — con botones `−/+` para ajustar con el pulgar y sugerencia automática del próximo libre
- **Posición**
- **Notas** opcionales

Los jugadores se ordenan automáticamente por dorsal ascendente (los que no tienen número van al final).

> 💡 Las **lesiones** ya no se marcan desde esta ficha. Cada jugador tiene un botón **🚑** propio en la fila de la plantilla (ver apartado **🚑 Gestión de lesiones**).

---

## 🚑 Gestión de lesiones

Kortline tiene un flujo dedicado para gestionar lesiones. El objetivo es que el % de asistencia no castigue a un jugador lesionado y que el historial del club quede completo.

### Dar de baja (marcar como lesionado)

En la plantilla, junto al botón ✏️ (editar) y 🗑 (eliminar) de cada jugador, hay un botón **🚑**:
- **Gris** → el jugador no tiene lesión activa
- **Rojo** → el jugador está lesionado (y aparece un punto rojo sobre el dorsal)

Al pulsar **🚑** en un jugador sano se abre el modal **Nueva lesión**:

1. **Fecha de inicio** — por defecto hoy; se puede retroceder
2. **Origen** — cuatro chips rápidos:
   - 🏀 **Entreno**
   - 🏆 **Partido**
   - 🌐 **Fuera** (fuera del baloncesto)
   - ❔ **Desconocido**
3. **Detalle del origen** — desplegable opcional (selector de partido concreto, etc.)
4. **Explicación** — texto libre (tipo de lesión, parte del cuerpo, estimación del tiempo de recuperación, parte médico…)

Al guardar, Kortline hace **tres cosas automáticamente**:

1. **Backfill de asistencia** — todas las sesiones entre la fecha de inicio y hoy pasan a **◎ Justificado · Lesionado/a**, con la explicación como nota
2. **Snapshot FEB** — se guarda el % de asistencia del jugador en ese momento. Si ya estaba en riesgo, seguirá apareciendo en el panel ⚠️ **Riesgo FEB** mientras dure la lesión (no desaparece solo porque el porcentaje "mejore" durante la baja)
3. **Badge visible** — se muestra 🚑 sobre el dorsal en plantilla, pase de lista, convocatorias y partidos, pero solo en las fechas **iguales o posteriores** a la fecha de inicio

### Fila del jugador lesionado

En la plantilla aparece una línea corta bajo el nombre:

```
🚑 10/04 (6d)
```

Es decir: **lesionado desde el 10 de abril, lleva 6 días**. El contador se actualiza solo cada día.

### Dar de alta (recuperación)

Al pulsar **🚑** en un jugador que ya está lesionado, se abre el modal **Recuperación**:

- Muestra un resumen rápido: fecha de inicio, días acumulados, origen y explicación
- **✅ Dar de alta médica** — un solo toque. Hoy queda como fecha de alta, el jugador vuelve a estar sano y la lesión pasa al historial
- **✏️🚑 Editar datos de la lesión** — abre el modal completo para corregir fecha, origen o explicación (no es el editor del jugador)
- **Cerrar** — salir sin cambios

Si necesitas fijar la fecha de alta en un día pasado (porque te has acordado tarde), usa primero **✏️🚑 Editar** para retroceder la fecha de alta; el backfill se ajusta solo.

### Historial de lesiones

Cada alta se guarda con fecha de inicio, fecha de alta, días totales, origen y explicación. Queda disponible en la ficha del jugador como historial médico del club.

### Detalles útiles

- La **palabra "lesionado" escrita en las notas** del jugador sigue reconociéndose como lesión activa (compatibilidad con datos antiguos). Si quieres migrar, da de baja al jugador desde el botón 🚑 y elimina la palabra de las notas.
- Si cambias la fecha de inicio hacia atrás, las sesiones entre la nueva fecha y la anterior también se rellenan automáticamente. Si la adelantas, las sesiones que queden fuera del rango se limpian.
- El % de asistencia se recalcula al instante: las sesiones en rango dejan de contar como ausencia.

---

## Pase de lista

### Pasar lista hoy

Desde **Hoy** → **📋 Pasar lista** en el equipo correspondiente.

### Estados de asistencia

Toca el botón derecho de cada jugador para ciclar entre:
- ✓ **Presente** · ✗ **Ausente** · ⏱ **Tarde** · ◎ **Justificado**

Para justificados, pulsa `+ Motivo` para añadir la razón (enfermedad, lesión, examen, etc.).

### Contadores clicables (filtro rápido)

Las 4 cajas **PRES / AUSE / TARD / JUST** de la parte superior son clicables:

- Pulsa una caja para **filtrar** la lista y ver solo jugadores en ese estado
- La caja activa se resalta con un ✓ y borde naranja
- Aparece un banner con el nombre del filtro y botón **✕ Todos** para quitarlo
- El filtro es efímero — se limpia al cambiar de fecha o salir de la pantalla
- Las cajas con valor 0 no son clicables

### Reset rápido

Si has modificado asistencias y quieres volver a empezar, aparece un enlace discreto **↺ Resetear a presentes** arriba a la derecha de la lista (solo si hay cambios). Pide confirmación antes de aplicar para evitar resets accidentales.

### Funciones opcionales (activadas en ⚙️ Configuración)

Si has activado alguna función en **🎯 Seguimiento avanzado**, aparecerán bajo la lista:
- ⭐ Valoración colectiva del entrenamiento (1–10)
- 👤 Valoración individual — toca las estrellas junto a cada jugador presente o con retraso
- 📋 Campo de ejercicios del día
- 📷 Foto de la sesión

### Valoración colectiva inteligente

Cuando **ambas valoraciones** están activas (⭐ colectiva + 👤 individual), la colectiva se calcula **automáticamente** como la media de las individuales. Verás un badge verde `🔗 Auto` y las estrellas reflejan la nota media.

Si quieres poner una nota manualmente (por ejemplo, el equipo ha trabajado mejor de lo que sugieren las notas individuales), **mantén pulsado** el botón ✏️ durante ~1 segundo. Un anillo naranja se va llenando mientras pulsas — al completarse, las estrellas se desbloquean y puedes tocarlas. Aparece un badge naranja `✏️ Manual`.

Para volver al modo automático, pulsa el botón verde `🔗 Volver a modo automático` que aparece debajo.

> 💡 Si solo tienes activada la colectiva (sin individual), las estrellas son siempre libres — no hace falta desbloquear nada.

---

## Estadísticas

### Vista tabla

Muestra el % de asistencia de cada jugador con semáforo:
- 🟢 ≥90% · 🟡 ≥umbral FEB · 🔴 <umbral (riesgo)

El umbral FEB es configurable en ⚙️ Configuración (por defecto 75%).

También detecta **rachas de ausencias consecutivas** y **valoración media** si está activada.

### Indicador Riesgo FEB

En la parte superior de las estadísticas hay tres cajas: **Media**, **Sesiones** y **Riesgo FEB**. La caja de riesgo es **clickable** (tiene un icono ⓘ) — al pulsarla se abre un panel explicativo con la definición según la FEB, tu umbral actual, y la leyenda completa de colores.

### Cerrar paneles arrastrando

Todos los paneles inferiores (configuración, modales, etc.) se pueden cerrar **arrastrando la barrita gris** de la parte superior hacia abajo. Si arrastras lo suficiente (unos 120px), el panel se cierra con una animación suave.

### Vista gráfica

Accede desde el botón 📊 del equipo. Incluye tendencia de asistencia, barras por jugador, distribución y evolución mensual.

---

## Compartir por WhatsApp

### Asistencia del día

Desde el pase de lista → botón **📤** (esquina superior derecha). Genera dos versiones:
- **Para padres/grupo** — solo nombres y asistencia
- **Uso interno** — con motivos de justificación, notas y valoraciones

### Resumen semanal

Disponible en la misma pantalla, con los últimos 7 entrenamientos.

---

## Partidos

### Crear un partido

Equipo → **🏟️ PARTIDOS** → **＋**. Configura rival, fecha, hora, lugar, formato de cuartos y opciones de estadísticas.

### Introducir marcador

En el detalle del partido aparece la cuadrícula de cuartos. Al escribir cualquier puntuación:
- El **marcador total** se actualiza instantáneamente
- El **badge de resultado** (🏆 Victoria / ❌ Derrota / 🤝 Empate) se actualiza al momento
- El guardado se produce **automáticamente** al saltar al siguiente campo — no hay botón de guardar

Los cuartos usan botones `+/−` (steppers) para ajustes rápidos con el pulgar. Toca el número para escribir directamente.

### Prórroga manual

Si el partido termina en empate y no usaste el seguimiento en vivo, pulsa **＋ Añadir prórroga** debajo de la cuadrícula. Se añade la columna OT. Si necesitas OT2 o OT3, vuelve a pulsarlo. Para quitar una OT añadida por error, pulsa la **✕** que aparece en la esquina de la última OT.

**Etiquetas:**
- 1 prórroga → `OT`
- 2 prórrogas → `OT1`, `OT2`
- 3 prórrogas → `OT1`, `OT2`, `OT3`

### Convocatoria y capitán (FIBA)

En el detalle del partido → sección **👥 Convocatoria** → **✏️ Editar**.

El wizard sigue este orden:
1. **Convocados** — selecciona hasta 12 (límite FIBA)
2. **Titulares** — marca los 5 del quinteto inicial
3. **Capitán** — designa uno (dirige el equipo si el entrenador es expulsado)

El banner del capitán siempre está visible: verde si está designado, amarillo si no.

Al pulsar **Listo** la app valida en cadena:
- Sin convocados → aviso
- Menos de 5 convocados → aviso
- Menos de 5 titulares → aviso
- Sin capitán → aviso

Cada aviso te permite corregir o continuar si lo decides conscientemente.

**Compartir convocatoria:** botón **📤 Lista** junto a la sección de convocatoria.

### Compartir resultado

Botón **📤** junto al marcador. Genera un mensaje con resultado, marcador, diferencia (+/− pts) y desglose por cuartos.

---

## Marcador en vivo

### Iniciar seguimiento

Equipo → Partidos → partido → **▶ Empezar partido** (o **🔴 Continuar partido** si ya había empezado). El botón "Continuar" aparece desde la primera vez que entras, sin esperar a que haya acciones registradas.

### Picker de quinteto bloqueante

Si intentas empezar con menos de 5 jugadores en pista, aparece un picker de 5 slots. Cada slot vacío tiene un botón **＋** para elegir entre los convocados. El botón **▶ Empezar partido** se activa solo cuando los 5 están rellenos. Sin 5 titulares **no se puede entrar**.

### Registrar acciones

1. **Toca un jugador** en la cuadrícula "En Pista"
2. Pulsa la acción: +2, +3, +1 TL, fallos, rebotes, asistencias, robos, tapones, faltas...
3. Al registrar, el jugador **se deselecciona automáticamente**

### Bloqueo de cuartos futuros

Los tabs Q2 / Q3 / Q4 aparecen en gris y desactivados hasta que el reloj avanza. Puedes volver a cuartos pasados para revisar o añadir acciones, pero no saltar a uno que aún no ha empezado.

### Marcador del rival

Si no tienes estadísticas del rival activadas, usa los botones **＋** y **−** bajo el marcador rival.

### Reloj

El reloj cuenta hacia atrás (tiempo que queda). Toca el tiempo para editarlo manualmente con botones `+/−`. Botón **▶/⏸** para iniciar/pausar, **↺** para resetear.

**Aviso de 10 segundos:** cuando queden menos de 10s, se activa un aviso visual.

### Tiempo muerto

Pulsa el botón **T.M** (esquina superior derecha del reloj) y selecciona qué equipo lo pide:

- Aparece un **overlay a pantalla completa** con cuenta atrás de 1:00
- El **reloj se detiene automáticamente**
- Dots por equipo y mitad (2 en la primera mitad, 3 en la segunda, regla FEB amateur)
- Durante el TM puedes hacer sustituciones del quinteto en pista
- Pulsa **▶ Reanudar** para terminar antes de tiempo
- Al llegar a 0 se cierra solo con un aviso "¡Fin del T.M.! Reanudamos"

### Descansos entre cuartos

Al terminar cada cuarto aparece un overlay centrado a pantalla completa con las acciones del último segundo antes del descanso:
- Q1↔Q2 y Q3↔Q4 → **1 minuto**
- Medio tiempo (Q2↔Q3) → **10 minutos**

Basado en el reglamento FEB amateur.

### Prórroga automática

Al llegar a 0 el reloj del último cuarto **en empate**, aparece automáticamente:

```
🤝 ¡EMPATE!
Fin del Q4 · 47 — 47
¿Se juega prórroga?
[ 🏀 Jugar OT ] [ 🏁 Finalizar partido ]
```

Pulsa **Jugar OT** para activar 5 minutos de prórroga. Las pestañas Q1–Q4 no se tocan, se añade una nueva pestaña OT. Si esa OT también termina en empate, se ofrece OT2, y así sucesivamente.

Si necesitas activar la prórroga manualmente (sin que el reloj haya llegado a 0), pulsa **✏️** junto al periodo activo y aparecerá un botón de activación si hay empate.

### Historial de acciones por cuarto

El historial del partido se encuentra al final de la pantalla, agrupado por cuartos:
- El **cuarto en curso** aparece abierto y con borde naranja y etiqueta **EN CURSO**
- Los **cuartos anteriores** aparecen cerrados, mostrando en el encabezado el resumen de puntos (`+8 pts 🟢 / -5 🔴`) y el número de acciones
- Pulsa cualquier encabezado para expandir o colapsar ese cuarto
- Las acciones muestran reloj, dorsal, nombre, tipo y puntos anotados
- El botón **✕** de cada fila elimina esa acción y descuenta los puntos del cuarto correspondiente
- El botón **↩️** (encima de los botones de acción) deshace la última acción registrada

### Compartir marcador en vivo

Botón **📤** (verde) en el header. Genera el mensaje con cuarto actual y tiempo restante: `🔴 EN VIVO · Q3 · 04:23`.

### Estadísticas en pantalla completa

Gira el móvil o pulsa **📊 Pantalla completa** para ver la tabla de estadísticas en landscape. La vista incluye:
- **Marcador grande** con diferencia de puntos en color (verde/rojo)
- **Parciales por cuarto** (`Q1 8–6 ✅ · Q2 7–9 ❌ · ...`)
- **Tabla completa** con fila de totales para ambos equipos
- Soporte de muesca (safe-area) en iPhones en horizontal

### Finalizar partido

Botón **🏁** en el header → confirma el resultado. El partido pasa a "finalizado".

---

## Eventos y Convocatorias

### Crear un evento

Equipo → **📅 EVENTOS Y CONVOCATORIAS** → **＋**. Tipos:
- 🏟️ **Partido** — con campo para el rival
- 🔧 **Tecnificación** — con nombre/descripción
- 📌 **Otro** — genérico

Rellena fecha, hora, hora de concentración, lugar y mensaje opcional del entrenador.

### Convocatoria automática

Al crear un evento, la app **pre-selecciona todos los jugadores ordenados por % de asistencia** (los que más vienen aparecen primero). Puedes ajustar manualmente.

### Gestionar convocados

- Toca un jugador para incluirlo/excluirlo
- El badge de % (🟢/🟡/🔴) ayuda a decidir
- Botones **Todos** / **Ninguno** para selección rápida

### Compartir convocatoria de evento

Botón **📤** en la card del evento. El mensaje incluye tipo, fecha, hora, concentración, lugar, lista numerada de convocados con dorsal, mensaje del entrenador y lema del club.

---

## Copia de seguridad

### Exportar datos

⚙️ Configuración → **⬇️ Exportar** → descarga un archivo `.json` con todos los datos (incluye club, equipos, plantilla, sesiones, partidos y eventos).

### Importar datos

⚙️ Configuración → **⬆️ Importar** → selecciona el archivo. **Sobreescribe todos los datos actuales.**

### Autobackup

La app guarda automáticamente en cada cambio. Restaurable desde ⚙️ Configuración → **🔄 Restaurar último autobackup**.

La sección de copia de seguridad muestra siempre la fecha del último export y del último autobackup.

> 💡 Exporta un backup antes de cambiar de dispositivo o limpiar el navegador.

---

## Preguntas frecuentes

**¿Funciona sin internet?**
Sí, una vez cargada funciona completamente offline.

**¿Puedo usarla en varios dispositivos?**
Los datos son locales. Para sincronizar, exporta el backup en un dispositivo e impórtalo en el otro.

**¿Qué pasa si cierro el navegador?**
Los datos se guardan automáticamente en cada cambio. No se pierde nada.

**¿Cómo cambio el umbral de riesgo FEB?**
⚙️ Configuración → **📊 Estadísticas y exportación** → selecciona el umbral (60–85%). El estándar FEB es 75%.

**¿Puedo tener varios equipos?**
Sí, sin límite. Cada equipo tiene su plantilla, historial y configuración independientes.

**¿Cómo marco a un jugador como lesionado?**
En la plantilla del equipo, pulsa el botón **🚑** de la fila del jugador (junto al lápiz y la papelera). Se abre el modal **Nueva lesión** donde indicas fecha, origen y explicación. Kortline rellena automáticamente las sesiones pasadas como justificadas por lesión para que el % de asistencia no se vea castigado. Ver el apartado **🚑 Gestión de lesiones** para el flujo completo.

**¿Cómo doy de alta a un jugador recuperado?**
Pulsa otra vez el botón **🚑** (que ahora estará en rojo). Se abre el modal de recuperación con el botón **✅ Dar de alta médica**. Un solo toque y el jugador vuelve a estar sano.

**¿El % de asistencia baja cuando un jugador está lesionado?**
No. Al marcar la lesión, las sesiones del periodo pasan a ◎ Justificado · Lesionado/a y dejan de contar como ausencias. Además, si el jugador ya estaba en ⚠️ Riesgo FEB al lesionarse, seguirá apareciendo ahí durante la baja (el estado queda congelado).

**¿Puedo añadir foto a los jugadores?**
Sí, al editar un jugador pulsa el círculo de foto en la parte superior. La foto se muestra como avatar junto al dorsal en la plantilla y en el pase de lista.

---

**¿La valoración colectiva se calcula sola?**
Sí, si tienes activadas la colectiva y la individual al mismo tiempo. La nota del equipo será la media de las valoraciones individuales (modo Auto). Puedes editarla manualmente con una pulsación larga en el botón ✏️.

**¿Qué es el indicador "Riesgo FEB" de las estadísticas?**
Es el número de jugadores cuya asistencia está por debajo del umbral configurado. Pulsa la caja para ver una explicación detallada con la leyenda de colores.

**¿Cómo cierro los paneles/modales?**
Puedes pulsar fuera del panel, pulsar "Cancelar", o arrastrar la barrita gris de la parte superior hacia abajo.

---

_Kortline v1.6.8 · Mario Nadal Ara · [github.com/MarioNadal/kortline-app](https://github.com/MarioNadal/kortline-app)_
