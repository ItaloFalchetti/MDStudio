# Cómo obtener el token de Instagram para el feed dinámico

## Requisitos previos
- La cuenta **@mahanystudio** debe estar en modo **Profesional** (Creator o Business)
- Tener una **Página de Facebook** vinculada a esa cuenta de Instagram

---

## Pasos

### 1. Crear una App de Facebook
1. Ir a [developers.facebook.com](https://developers.facebook.com)
2. Crear una nueva App → tipo **"Business"**
3. En el panel de la app, ir a **"Add Product"** → agregar **Instagram Graph API**

### 2. Obtener el token de corta duración
1. Ir al [Graph API Explorer](https://developers.facebook.com/tools/explorer/)
2. Seleccionar tu app en el desplegable
3. En permisos, agregar: `instagram_basic`, `instagram_content_publish`, `pages_show_list`
4. Hacer click en **"Generate Access Token"** e iniciar sesión con Facebook
5. Copiar el token generado (dura 1 hora)

### 3. Convertirlo a token de larga duración (60 días)
Hacer esta llamada sustituyendo los valores:

```
GET https://graph.facebook.com/v19.0/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id={APP_ID}
  &client_secret={APP_SECRET}
  &fb_exchange_token={TOKEN_CORTO}
```

El token de respuesta dura **60 días**.

### 4. Agregar al proyecto
Crear el archivo `.env` en la raíz del proyecto:

```
VITE_INSTAGRAM_TOKEN=EAAxxxxxxxxxxxxxxxx...
```

El sitio detectará el token automáticamente y mostrará las últimas 4 publicaciones de imágenes.

---

## Renovación del token
El token expira cada 60 días. Para renovarlo:

```
GET https://graph.instagram.com/refresh_access_token
  ?grant_type=ig_refresh_token
  &access_token={TOKEN_ACTUAL}
```

Se puede automatizar con un cron job o renovar manualmente cada ~50 días.

---

## Sin token
Si no hay token configurado, el sitio muestra imágenes de ejemplo estáticas. El botón "Seguir en Instagram" siempre redirige correctamente a **@mahanystudio**.
