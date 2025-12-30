# Checklist de Pruebas Funcionales - Proyecto BeKind

Este documento detalla las 12 pruebas funcionales para asegurar la integridad del flujo de usuario.

> Pruebas funcionales basadas en las técnicas de `tablas de decisión` y `partición de equivalencias`

## 1. Flujo de Autenticación (Login)
- **Test-01: Login exitoso:** Usuario y credenciales válidas. 
  - *Resultado esperado:* El sistema redirecciona al usuario a la página actions (dashboard) y almacena su token.
- **Test-02: Manejo de credenciales incorrectas:** Ingresar correo válido o contraseña errónea.
  - *Resultado esperado:* El sistema muestra una notificación de error (Toast) indicando `Nombre de usuario o contraseña incorrecta`.
- **Test-03: Validación de Campos Vacíos:** No ingresa email o password.
  - *Resultado esperado:* Botón deshabilitado y mensajes de error de Zod visibles (El correo es requerido - La contraseña debe tener un mínimo de 6 caracteres).

## 2. Flujo de Listado y Visualización
- **Test-04: Carga de datos en formato tabla:** Acceder al listado de acciones con sesión iniciada.
  - *Resultado esperado:* Se visualiza la tabla con los datos obtenidos de la API.
- **Test-05: Estado de carga (loading):** Verificar que se muestra el spinner mientras de validan los datos de logueo.
  - *Resultado esperado:* El sistema muestra un spinner sobre todo el contenido indicando que se está realizando la petición.
- **Test-06: Redirección:** Intento de acceso sin credenciales (no token).
  - *Resultado esperado:* El sistema redirecciona al login.

## 3. Paginación
- **Test-07: Cambio de página:** Hacer clic en el botón `>` para ir de la página 1 a la página 2.
  - *Resultado esperado:* Se realiza una llamada a la API con `pageNumber=2` y se actualización de los datos de la tabla.
- **Test-08: Cambio de tamaño de página en la tabla:** Cambiar el select de '10 elementos' a '5 elementos'.
  - *Resultado esperado:* La tabla se refresca mostrando exactamente 5 filas por página y la nueva cuenta de páginas.

## 4. Gestión de Acciones (Crear Accion)
- **Test-09: Creación exitosa con refresh:** Llenar el formulario con datos correctos y guardar una nueva acción.
  - *Resultado esperado:* Se cierra el modal del formulario, se muestra un mensaje de éxito y la nueva acción aparece en la tabla automáticamente.
- **Test-10: Nombre demasiado corto:** No ingresa nombre o ingresa nombre menor a 3 caracteres. Ingresa descripción y color válidos.
  - *Resultado esperado:* El input de `nombre` indica un error al usuario (El nombre debe tener al menos 3 caracteres) en la parte inferior del mismo.
- **Test-11: Descripción demasiado corta:** Ingresa nombre válido. Ingresa descripción que sobrepasa el límite y ingresa color válido.
  - *Resultado esperado:* El input de `descripción` indica un error al usuario (La descripción debe tener a lo mucho 200 caracteres) en la parte inferior del mismo.
- **Test-12: Color en formato erróneo:** Ingresa nombre y descripción válidos. Ingresa color que no está en formato hexadecimal (ej: blue)
  - *Resultado esperado:* El input de `color` indica un error al usuario (Debe ser un formato hexadecimal válido (ej: #FF5733)) en la parte inferior del mismo.