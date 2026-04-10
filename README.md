# Driveline — CB Jaca
PWA single-file de gestión de asistencia y estadísticas de partido.  
Desarrollada por **Mario Nadal Ara** · Stack: HTML + CSS + Vanilla JS · Datos en `localStorage`

---

## Historial de versiones

### v1.5.0 — Reloj y descansos FEB *(actual)*

**Nuevas funciones**

- **Aviso de 10 segundos** — alerta visual "🔴 ¡10 segundos!" al llegar a 0:10 en el reloj de partido, complementando los avisos existentes de 2 min, 1 min y 30 s.
- **Overlay de fin de cuarto con acciones pendientes** — cuando el reloj llega a 0:00, ya no arranca el descanso de forma inmediata. Aparece un modal con el marcador del momento y botones de acción rápida del último segundo: +2, +3, +1 TL, Falta, +2 Rival, +3 Rival. El entrenador registra lo que haya pasado en la bocina y pulsa "Iniciar descanso" cuando esté listo.
- **Tiempos de descanso reglamentarios FEB** — los tiempos ya son correctos por reglamento:
  - Q1 → Q2: **1 minuto** (reglamento FBM amateur)
  - Q2 → Q3 (medio tiempo): **10 minutos**
  - Q3 → Q4: **1 minuto** (reglamento FBM amateur)
  - *Nota: el reglamento FIBA internacional establece 2 min entre cuartos, pero las competiciones regionales FBM usan 1 min*
  - La pantalla de descanso etiqueta el medio tiempo como "⏸ Medio tiempo" de forma diferenciada.
- **Overlay de descanso rediseñado** — sustituyó la pildorita inferior (que en iOS con safe area quedaba tapada por el navbar) por un modal centrado de pantalla completa con la cuenta atrás en formato `mm:ss` y botón "▶ Iniciar Qx".

**Bugs resueltos**

| ID | Descripción | Versión |
|----|-------------|---------|
| B-06 | Overlay de descanso oculto tras navbar en iOS (z-index + bottom insuficientes) | v1.5.0 |
| B-07 | Descanso entre cuartos siempre de 60 s (1 min), correcto para FBM amateur pero sin distinguir medio tiempo | v1.5.0 |
| B-08 | Sin aviso visual a 10 segundos | v1.5.0 |
| B-09 | Descanso arrancaba automáticamente sin permitir registrar acciones del último segundo | v1.5.0 |

---

### v1.4.0

**Nuevas funciones**

- Tiempo muerto con cuenta atrás (overlay 60 s, botón Reanudar)
- Historial de acciones agrupado por cuartos (desplegables, badge "EN CURSO", resumen de parciales)
- Pantalla completa de stats en landscape rediseñada: fila de totales en ambas tablas, header con marcador grande y diferencia, pills de parciales por cuarto, safe-area insets iOS

**Bugs resueltos**

| ID | Descripción | Versión |
|----|-------------|---------|
| B-01 | T.M. no paraba reloj ni mostraba countdown | v1.3.1 |
| B-02 | "Nuestro equipo" hardcodeado en toggle de stats | v1.3.1 |
| B-03 | Overlay T.M. tapado por landscape stats (z-index igual) | v1.3.1 |
| B-04 | Sin fila de totales en pantalla completa de stats | v1.4.0 |
| B-05 | Totales rival usaban reductor del equipo local | v1.4.0 |

---

### v1.3.1

- Fix tiempo muerto: para reloj y muestra cuenta atrás
- Fix nombre equipo en toggle de stats del live game
- Fix z-index overlay TM vs landscape stats

### v1.3.0

- Convocatoria wizard (nuestro equipo + rival, titulares, capitán)
- Stats del rival por jugador (activable por partido)
- Sustituciones del rival
- Pantalla completa landscape de stats

### v1.2.0

- Marcador en vivo: reloj, cuartos, QScores
- Acciones individuales por jugador (puntos, rebotes, asistencias, faltas…)
- Undo de última acción
- Descalificación automática a 5 faltas

### v1.0.0 — v1.1.0

- Pase de lista diario
- Gestión de equipos y jugadores
- Calendario de partidos con marcador manual
- Compartir resultado y convocatoria por WhatsApp
- Estadísticas de asistencia con umbral de riesgo FEB
- Exportar/importar backup JSON

---

## Archivos

```
index.html          App completa (single-file)
manifest.json       PWA manifest
sw.js               Service worker (offline)
assets/logos/
  logo-icon.svg     Icono 512×512
  logo-full.svg     Logo horizontal 880×240
README.md           Este archivo
MANUAL_USUARIO_KORTLINE.md  Manual de usuario
```
