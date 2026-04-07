# Kortline — Manual de Usuario
**Versión 1.1.0**  
*De la Pista al Dato*

---

## Instalación

Kortline no requiere instalación desde ninguna tienda de aplicaciones. Abre el enlace en tu navegador y ya puedes usarla.

**Para instalarla como app en el móvil (recomendado):**

- **iPhone (Safari):** Pulsa el botón de compartir ↑ → "Añadir a pantalla de inicio"
- **Android (Chrome):** Pulsa los 3 puntos ⋮ → "Añadir a pantalla de inicio" o "Instalar aplicación"

Una vez instalada aparecerá como cualquier otra app y se abrirá en pantalla completa.

---

## Primeros pasos

### Crear un equipo

1. Ve a **Equipos** (icono 👥 en la barra inferior)
2. Pulsa **+ Nuevo equipo**
3. Escribe el nombre del equipo
4. Marca los días de entrenamiento y la hora de cada día
5. Pulsa **Guardar**

### Añadir jugadores

1. Entra en el equipo que acabas de crear
2. Pulsa **+ Jugador**
3. Escribe el nombre y pulsa **Guardar**
4. Repite para cada jugador

---

## Pasar lista

1. Desde **Hoy** (pantalla de inicio) pulsa **📋 Pasar lista** en el equipo correspondiente
2. Pulsa el nombre de cada jugador para marcar su estado:
   - ⬜ Sin marcar → ✅ Presente → ❌ Ausente → ↩️ vuelve a sin marcar
3. Para marcar una ausencia justificada: pulsa el icono de nota junto al jugador ausente, selecciona el motivo y añade una nota si quieres
4. Una vez terminada la lista pulsa **Guardar**

**Opciones adicionales al pasar lista:**
- 📷 **Foto** — adjunta una foto de la sesión
- ⭐ **Valoración colectiva** — puntúa del 1 al 10 cómo ha entrenado el equipo
- 👤 **Valoración individual** — puntúa a cada jugador presente

---

## Compartir resumen por WhatsApp

Después de pasar lista, pulsa el botón verde 📤 junto al equipo en la pantalla **Hoy**, o entra en la sesión desde el **Historial**.

Hay dos formatos de resumen:
- **Versión padres** — quién ha venido y quién no, sin más detalle
- **Versión interna** — datos completos con notas, valoraciones y estadísticas

---

## Estadísticas

Entra en un equipo y pulsa **📊 Estadísticas**.

Puedes ver los datos en dos vistas:
- **Tabla** — todos los jugadores con su % de asistencia, partidos jugados, rachas y estado de riesgo FEB
- **Gráficas** — evolución de la asistencia en el tiempo

**Riesgo FEB:** los jugadores por debajo del umbral configurado (por defecto 75%) aparecen marcados en rojo. La FEB exige un mínimo del 75% de asistencia para poder competir.

---

## Historial

Muestra todas las sesiones registradas ordenadas por fecha. Puedes filtrar por mes.

Desde cada sesión puedes:
- Ver el detalle completo de quién estuvo
- Editar la lista si cometiste un error
- Compartir el resumen por WhatsApp

---

## Partidos

Desde la pantalla de un equipo pulsa **🏟️ Partidos**.

- **Añadir partido** — fecha, rival, localización y hora
- **Empezar partido** — abre el marcador en vivo
- **Ver detalle** — resultado y datos del partido

### Marcador en vivo

El marcador incluye:
- Reloj de juego con control de períodos
- Marcador para ambos equipos
- Registro de tiempos muertos

---

## Exportación de datos

Desde la pantalla de un equipo puedes exportar los datos a:
- **PDF** — informe de asistencia listo para imprimir o enviar
- **Excel** — hoja de cálculo con todos los datos del equipo

---

## Copia de seguridad

> ⚠️ Los datos de Kortline se guardan en el navegador de tu dispositivo. Si cambias de móvil, limpias el navegador o desinstalar la app, los datos se pierden. El backup es tu única protección.

### Exportar backup manual

1. Ve a ⚙️ **Configuración** (icono en la esquina superior)
2. Entra en **💾 Copia de seguridad**
3. Pulsa **⬇️ Exportar**
4. El archivo se descarga en tu carpeta de Descargas
5. Se abre un menú para compartirlo además a WhatsApp, iCloud, Google Drive, email, etc.

El archivo se llama `kortline-backup-YYYY-MM-DD.json` con la fecha del día.

### Importar backup

1. Ve a ⚙️ **Configuración** → **💾 Copia de seguridad**
2. Pulsa **⬆️ Importar**
3. Selecciona el archivo `.json` de tu backup
4. Confirma — se restaurarán todos los datos

> ⚠️ Importar sobreescribe todos los datos actuales.

### Recordatorio automático

Si llevan más de 7 días sin exportar un backup, la app te avisará con un banner al abrirla. No ignores este aviso.

**Recomendación:** exporta el backup y guárdalo en iCloud o Google Drive una vez a la semana.

---

## Configuración del club

Pulsa el icono ⚙️ en la esquina superior de la pantalla principal.

Desde aquí puedes:
- Cambiar el **nombre del club**
- Subir el **logo del club** (se mostrará en la app y en los PDFs)
- Activar o desactivar funciones: valoración colectiva, valoración individual, ejercicios de sesión, foto del entrenamiento
- Ajustar el **umbral de riesgo FEB** (60%–85%)

---

## Preguntas frecuentes

**¿Los datos se sincronizan entre dispositivos?**  
No. Cada dispositivo tiene sus propios datos. Para pasar los datos de un móvil a otro, exporta el backup en el móvil antiguo e impórtalo en el nuevo.

**¿Funciona sin internet?**  
Sí, una vez cargada la app funciona completamente sin conexión.

**¿Puedo tener varios equipos?**  
Sí, sin límite de equipos ni de jugadores.

**¿Qué pasa si desinstalo la app?**  
En Android e iOS, desinstalar la PWA puede borrar los datos. Asegúrate de tener un backup antes de desinstalar.

**¿Dónde se guarda el archivo de backup?**  
En la carpeta **Descargas** de tu dispositivo. Desde ahí puedes moverlo a donde quieras.

---

*Kortline v1.1.0 — Desarrollada por Mario Nadal Ara*  
*De la Pista al Dato*
