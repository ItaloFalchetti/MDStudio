# Mahany Dote Studio — Rediseño Editorial

**Fecha:** 2026-06-29  
**Estado:** Aprobado

## Contexto

Sitio web de estudio de belleza (manicura y lifting de pestañas) en React + Tailwind + Vite. El sitio existente tiene la estructura visual correcta pero carece de funcionalidad de conversión, navegación operativa y secciones clave para generar confianza.

**Objetivo principal:** Convertir visitas en reservas vía WhatsApp (con migración futura a formulario propio).  
**Dirección estética:** Editorial de lujo — tipografía grande, espacio en blanco, fotografía dominante, estética de revista de moda.

## Decisiones de diseño

### Navegación — Header

**Qué cambia:** El menú hamburguesa actualmente no hace nada. El ícono de usuario genera confusión (no hay sistema de login).

- El ícono hamburguesa abre un **drawer (panel lateral) deslizante** con los links: Servicios, Galería, Bioseguridad, Testimonios, Contacto.
- El **ícono de usuario se elimina**.
- En su lugar, aparece un pequeño botón **"Agendar"** a la derecha del logo que abre WhatsApp directamente.
- El drawer incluye overlay semitransparente detrás y se cierra al hacer click fuera o en la X.

### Hero — Rediseño

**Qué cambia:** El hero actual tiene gradiente claro desde abajo y texto centrado. Poco impacto editorial.

- La imagen ocupa **100vh** (pantalla completa).
- Overlay oscuro degradado **de abajo hacia arriba** (`from-black/70 via-black/20 to-transparent`).
- El contenido se posiciona en la **parte inferior izquierda** (no centrado):
  - Eyebrow pequeño: `"Estudio de Estética"` en uppercase, opacidad 70%
  - H1 grande en blanco: `"Tu belleza, nuestra ciencia."` — tipografía Playfair Display, ~64-72px desktop
  - CTA: `"Agendar por WhatsApp →"` — botón outline claro
  - Indicador de scroll animado debajo del CTA
- El botón CTA abre: `https://wa.me/549XXXXXXXXXX?text=Hola!%20Quiero%20agendar%20una%20cita%20en%20Mahany%20Dote%20Studio.`  
  ⚠️ **Pendiente:** reemplazar `XXXXXXXXXX` con el número real del estudio.

### Servicios — Mejora

**Qué cambia:** Los links "Descubrir más" no van a ningún lado. Hay mezcla de español/inglés en las descripciones.

- Los links `"Descubrir más →"` se convierten en links de WhatsApp con mensaje pre-cargado para cada servicio:
  - Manicura: `?text=Hola!%20Me%20interesa%20la%20Manicura%20Integral.`
  - Lifting: `?text=Hola!%20Me%20interesa%20el%20Lifting%20de%20Pestañas.`
- Se corrige la descripción de Manicura ("Focus on lasting elegance." → texto en español).

### Galería — Mejora

**Qué cambia:** El carrusel horizontal no tiene señal visual de que se puede deslizar. Las imágenes del grid no tienen feedback de click.

- Se agregan **flechas de navegación** (izquierda/derecha) al carrusel, visibles siempre en desktop.
- Se agregan **puntos indicadores** (dots) debajo del carrusel mostrando posición actual.
- El click en cualquier imagen del grid abre un **lightbox**: overlay oscuro con la imagen ampliada, botón X para cerrar, navegación con flechas o teclas.

### Testimonios — Sección nueva

**Dónde:** Entre Galería y Contacto.

- Fondo crema (`bg-surface-container-low`, igual que Bioseguridad).
- Encabezado: label en terracota `"Lo que dicen nuestras clientas"` + H2 en Playfair Display.
- Lista de 3 testimonios separados por líneas (`border-t border-outline-variant`):
  - Estrellas en terracota (★★★★★)
  - Texto de la reseña en cursiva
  - Nombre en uppercase + servicio en terracota
- Datos de ejemplo incluidos — se reemplazan con testimonios reales.

```
Ejemplo:
★★★★★
"Mis uñas quedaron perfectas y duran semanas. El nivel de higiene es impresionante."
VALENTINA R. · Manicura Softgel
```

### Ubicación y Contacto — Sección nueva

**Dónde:** Después de Testimonios, antes de Instagram.

- Layout de dos columnas en desktop, una columna en mobile.
- **Columna izquierda:** datos de contacto
  - Dirección del estudio
  - Horario de atención
  - Link de WhatsApp
  - Link de Instagram
  - Botón CTA secundario: `"Agendar por WhatsApp →"`
- **Columna derecha:** embed de Google Maps con la ubicación del estudio.
- ⚠️ **Pendiente:** dirección real, horario real, y URL del embed de Google Maps.

### Botón WhatsApp Flotante — Global

- Posición: **esquina inferior derecha**, fixed, z-index alto.
- Apariencia: círculo terracota (`bg-secondary`) con ícono de WhatsApp en blanco.
- Comportamiento:
  - Aparece con fade-in **2 segundos** después de cargar la página.
  - Se **oculta** mientras el usuario está en el Hero (para no competir con el CTA principal). Se detecta con IntersectionObserver.
  - En mobile incluye label `"Agendar"` junto al ícono.
- Abre el mismo link de WhatsApp que los demás CTAs.

### Footer — Corrección

**Qué cambia:** Links en inglés, sin links funcionales, sin redes sociales.

- Links traducidos al español: Services → Servicios, Portfolio → Galería, Biosecurity → Bioseguridad, Location → Contacto.
- Todos los links usan `href="#servicios"`, `href="#galeria"`, etc. con smooth scroll.
- Se agregan links a Instagram y WhatsApp.
- Copyright actualizado a 2026.

## Estructura final de la página

```
① Header (drawer lateral funcional)
② Hero (pantalla completa, oscuro, texto abajo-izquierda)
③ Servicios (links a WhatsApp, texto en español)
④ Bioseguridad (sin cambios)
⑤ Galería (carrusel con controles + lightbox)
⑥ Testimonios [NUEVO]
⑦ Ubicación y Contacto [NUEVO]
⑧ Instagram (sin cambios)
⑨ Footer (corregido)
⊕ Botón flotante WhatsApp [NUEVO, global]
```

## Componentes nuevos a crear

| Componente | Descripción |
|---|---|
| `NavDrawer.tsx` | Panel lateral con overlay, links de navegación, botón X |
| `Testimonials.tsx` | Lista de reseñas sobre fondo crema |
| `Contact.tsx` | Datos de contacto + embed de Google Maps |
| `WhatsAppFAB.tsx` | Botón flotante con IntersectionObserver para el Hero |
| `Lightbox.tsx` | Modal de imagen ampliada con navegación |

## Datos pendientes del cliente

Antes de la implementación se necesitan:

1. **Número de WhatsApp** con código de país (ej: `+5491123456789`)
2. **Dirección** del estudio
3. **Horario** de atención
4. **URL del embed** de Google Maps
5. **Testimonios reales** de clientes (3 mínimo)

## Fuera de alcance

- Sistema de reservas propio (se planifica para una segunda fase)
- Páginas internas por servicio
- Blog o contenido editorial
- Dark mode
