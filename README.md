# Prueba técnica de React

## Stack tecnológico
Herramientas y librerías:

* React 18 (Vite)
* TypeScript (Tipado básico)
* React Hook Form + Zod (Validación de formularios)
* Context API (Gestión de estado global)
* CSS
* React Toastify (Notificaciones de error y éxito)

## Características principales (Features)

* **Autenticación:** Login con validación básica y manejo de tokens.
* **Gestión de actions:** Listado con paginación dinámica de acciones registradas en el sistema.
* **Creación con actions:** Formulario para crear acciones. Campos seleccionados:
  * `name`: nombre de la nueva acción
  * `description`: descripción de la nueva acción
  * `color`: color de la nueva acción.
> Por defecto se envía el estado en 1 y una imagen preseleccionada.
* Loading y erres: Manejo de estados de carga (spinner) y errores por medio de toast.
* Redirección por falta de inicio de Sesión

## Instalación y configuración

### Clonar el repositorio

```bash
git clone https://github.com/DiegoFChC/prueba-tecnica-react.git
cd prueba-tecnica-react
```

### Instalación de dependencias

```bash
bun install
// ó
npm install
```

### Configurar variables de entorno

Crea un archivo `.env` en la carpeta raíz con los siguientes valores:

```bash
VITE_API_URL_LOGIN=<dominio_para_loguin>
VITE_API_URL_LIST_CREATE=<dominio_para_list_y_create>
```

> **Importante:** No coloques query params en estas API_URL, sólo URL específica. Internamente al app hace el llamado a admin-add y admin-list.

### Ejecuta la aplicación

```bash
bun run dev
// ó
npm run dev
```

## Estructura del proyecto

```bash
src/
├── 📁 components/        # Componentes
│
├── 📁 context/           # Estado global de la aplicación
│   └── 📄 AppContext.tsx # Manejo de Loaders, Modales y loguin
│
├── 📁 hooks/             # Lógica de negocio reutilizable (Custom Hooks)
│   ├── 📄 useAuth.ts     # Lógica de login y persistencia de token
│   └── 📄 useAction.ts   # Lógica de fetching, paginación y creación
│
├── 📁 pages/             # Componentes de vista (pantallas completas)
│   ├── 📄 Login.tsx      # Vista de acceso
│   ├── 📄 Home.tsx       # Vista para pruebas de sidebar
│   ├── 📄 Profiel.tsx    # Vista para pruebas de sidebar
│   └── 📄 Actions.tsx    # Vista de listado y gestión de acciones (página principal)
│
├── 📁 routes/            # Configuración de navegación
│   └── 📄 AppRoutes.tsx  # Rutas protegidas y públicas (React Router)
│
├── 📁 schemas/            # Validaciones de datos (Zod)
│   ├── 📄 loginSchema.ts  # Reglas para el formulario de acceso
│   └── 📄 actionSchema.ts # Reglas para creación de acciones
│
├── 📁 services/          # Llamadas directas a la API (Fetch)
│   ├── 📄 auth.ts        # Endpoint de loguin
│   └── 📄 actions.ts     # Endpoints de list y create de acciones
│
├── 📁 types/             # Definiciones de TypeScript e Interfaces
│   └── 📄 actionsType.ts # Tipado básico de las respuestas de la API
│
└── 📁 utils/             # Funciones auxiliares y constantes
    └── 📄 formatters.ts  # Formateo de fechas o manejo de archivos (Blob)
```

## Mapa de Rutas (Routing)
La aplicación utiliza `react-router-dom` para el manejo de navegación, implementando rutas protegidas y un sistema de layouts anidados.

| Ruta     | Acceso    | Componente | Descripción                                    |
|----------|-----------|------------|------------------------------------------------|
| /login   | Públiico  | Login      | Formulario de acceso y obtención de Token.     |
| /home    | Protegido | Dashboard  | Página para prueba de navegación               |
| /actions | Protegido | Actions    | Página paara listado y creación de actions     |
| /profile | Protegido | Profile    | Página para prueba de navegación               |
| *        | Público   | NotFound   | Captura de errores 404 para rutas inexistentes |

## QA Checklist

Se adjunta el archivo `QA_CHECKLIST.md` que detallan algunos casos de prueba funcionales para validar el flujo completo de la aplicación (Login, Listado, Paginación y Creación).

## Decisiones técnicas

* Usar Zod con React-Hook-Form para la validación independiente de formularios, evitando condicionales que harían ruido en algún componente.
* Separar en **custom hooks** y pequeños **servicios** la lógica de negocio. Si queremos cambiar la forma en que hacermos los llamados a las APIs, ya sea con axios u React Query, basta sólo con cambiar un servicio, o actualizar el hook, y la aplicación seguirá corriendo correctamente.
* Uso de rutas anidadas por medio de **react-router-dom** y `<Outlet />` para evitar el renderizado de rutas en casos en los que el usuario no está autorizado.
* Usar TypeScript. Facilita el trabajo con los datos de las APIs, y en generar da mas robustes a la aplicación. Esta vez su uso fué básico, hay mucho por mejorar pero en lo poco que se usó, ayudó mucho para detección de errores y prevención de los mismos.

## Supuestos

* Para el listado de **acciones** se tomó el `color` como si fuera la representación de la acción. Por esto se renderiza el color y no se muestra el texto del color.
* En el listado no era necesario agregar filtros o opciones de organizacion
* Mostrar mensajes de error -> Se toman como notificaciones y se muestra directamente el mensaje dado por el backend.

## Por mejorar

* Refactorizar la página `Actions` ya que está muy cargada.
* Implementar debounse (o AbortController) para evitar errores en los cambios de paginación rápida.
* Simplificar el loader para que no sea global sino epecífico de cada funcionalidad.
* Buscar una mejor forma de guardar el token del usuario y asegurar persistencia de logueo al refrescar a página. (Podría llamarce a una API de autenticación vara validar token).
* Es necesario mejorar el tema responsive, más precisamente el la página de acciones, ya que el sidebar no se oculta.
* Mejora se SEO. Al cambiar de página actualizar titulo y descripción.
* Algunos errores recibidos desde el back son extraños, por lo que hay que detectarlos bien y reescribirlos para dar un buen feedback al usuario. Ej: Email válido y contraseña incorrecta en el login.