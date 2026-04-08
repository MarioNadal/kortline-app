# Kortline — Manual de Usuario

**Versión 1.4.0**  
*Kortline — De la Pista al Dato*

---

## Primeros pasos

### Instalación como app
Kortline funciona desde el navegador, pero puedes instalarla como app nativa:
- **iOS (Safari):** Compartir → Añadir a pantalla de inicio
- **Android (Chrome):** Menú ⋮ → Añadir a pantalla de inicio

### Configuración inicial del club
Antes de empezar, pulsa el **logo** en la esquina superior izquierda:

- **Nombre del club** — aparece en mensajes y encabezados
- **Abreviatura** — versión corta para los mensajes WhatsApp (ej. `CB JACA`)
- **Lema / cierre** — texto opcional al final de todas las convocatorias (ej. `¡Vamos FamiliaCBJaca! 🏀`). Si se deja vacío no aparece nada.
- **Logo** — imagen personalizada del club

---

## Gestión de equipos

### Crear un equipo
Pantalla **Equipos** → **＋**. Configura nombre, categoría, entrenador/es, días y horarios, y color identificativo.

### Añadir jugadores
Dentro del equipo → sección **Plantilla** → **＋ Añadir**. Cada jugador tiene nombre, dorsal, posición y notas opcionales.

---

## Pase de lista

### Pasar lista hoy
Desde **Hoy** → **📋 Pasar lista** en el equipo correspondiente.

### Estados de asistencia
Toca el botón derecho de cada jugador para ciclar entre:
- ✓ **Presente** · ✗ **Ausente** · ⏱ **Tarde** · ◎ **Justificado**

Para justificados, pulsa `+ Motivo` para añadir la razón (enfermedad, lesión, examen, etc.).

### Funciones opcionales (activar en ⚙️ Ajustes)
- ⭐ Valoración colectiva del entrenamiento (1–10)
- 👤 Valoración individual por jugador
- 📋 Campo de ejercicios del día
- 📷 Foto de la sesión

---

## Estadísticas

### Vista tabla
Muestra el % de asistencia de cada jugador con semáforo:
- 🟢 ≥90% · 🟡 ≥umbral FEB · 🔴 <umbral (riesgo)

El umbral FEB es configurable en ⚙️ Ajustes (por defecto 75%).

También detecta **rachas de ausencias consecutivas** y **valoración media** si está activada.

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

### Prórroga manual
Si el partido termina en empate y no usaste el seguimiento en vivo, pulsa **＋ Añadir prórroga** debajo de la cuadrícula. Se añade la columna OT. Si necesitas OT2 o OT3, vuelve a pulsarlo. Para quitar una OT añadida por error, pulsa la **✕** que aparece en la esquina de la última OT.

**Etiquetas:**
- 1 prórroga → `OT`
- 2 prórrogas → `OT1`, `OT2`
- 3 prórrogas → `OT1`, `OT2`, `OT3`

### Convocatoria
En el detalle del partido → sección **👥 Convocatoria** → **✏️ Editar** para seleccionar convocados, titulares y capitán. Máximo 12 convocados (FIBA).

**Compartir convocatoria:** botón **📤 Lista** junto a la sección de convocatoria.

### Compartir resultado
Botón **📤** junto al marcador. Genera un mensaje con resultado, marcador, diferencia (+/− pts) y desglose por cuartos.

---

## Marcador en vivo

### Iniciar seguimiento
Equipo → Partidos → partido → **▶ Empezar partido** (o **🔴 Continuar partido** si ya había empezado).

### Registrar acciones
1. **Toca un jugador** en la cuadrícula "En Pista"
2. Pulsa la acción: +2, +3, +1 TL, fallos, rebotes, asistencias, robos, tapones, faltas...

### Marcador del rival
Si no tienes estadísticas del rival activadas, usa los botones **+** y **−** bajo el marcador rival.

### Reloj
El reloj cuenta hacia atrás (tiempo que queda). Toca el tiempo para editarlo manualmente. Botón **▶/⏸** para iniciar/pausar, **↺** para resetear.

### Tiempo muerto
Pulsa el botón **T.M** (esquina superior derecha del reloj) y selecciona qué equipo lo pide. Al confirmar:
- El **reloj se detiene automáticamente**
- Aparece un **contador de 60 segundos** en la parte inferior con el nombre del equipo
- Pulsa **▶ Reanudar** para terminar el tiempo muerto antes de que acabe el minuto
- Al llegar a 0 se cierra solo con un aviso "¡Fin del T.M.! Reanudamos"
- El overlay es visible incluso desde la pantalla completa de estadísticas

Los puntos del contador en el marcador muestran cuántos T.M. ha usado cada equipo en esa mitad (máximo 2 en la primera, 3 en la segunda).

### Prórroga automática
Al llegar a 0 el reloj del último cuarto **en empate**, aparece automáticamente:

```
🤝 ¡EMPATE!
Fin del Q4  ·  47 — 47
¿Se juega prórroga?
[ 🏀 Jugar OT ]  [ 🏁 Finalizar partido ]
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
⚙️ Ajustes → **Exportar** → descarga un archivo `.json` con todos los datos.

### Importar datos
⚙️ Ajustes → **Importar** → selecciona el archivo. **Sobreescribe todos los datos actuales.**

### Autobackup
La app guarda automáticamente en cada cambio. Restaurable desde ⚙️ Ajustes → **Restaurar último autobackup**.

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
⚙️ Ajustes → **Estadísticas y exportación** → selecciona el umbral (60–85%). El estándar FEB es 75%.

**¿Puedo tener varios equipos?**
Sí, sin límite. Cada equipo tiene su plantilla, historial y configuración independientes.

---

*Kortline v1.4.0 · Mario Nadal Ara · github.com/MarioNadal*
