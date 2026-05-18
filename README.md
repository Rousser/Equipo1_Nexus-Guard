# 🏢 Nexus Guard — Sistema de Control de Acceso a Oficinas

### Descripción:

**Sistema de Gestión de Citas y Control de Acceso a Oficinas**

* Diseñado como una aplicación web escalable para administrar de manera eficiente el flujo de personas (proveedores, clientes y visitantes).

---

## 1. Introducción Descripción general:

* **Nexus Guard** surge de la necesidad de solucionar problemáticas administrativas relacionadas con el registro manual y desordenado de visitas en oficinas. Es una plataforma accesible desde navegadores modernos que permite la programación de citas en tiempo real.
* **El sistema busca mejorar la seguridad,** la trazabilidad y la transparencia en las entradas y salidas de la empresa, reemplazando los registros en papel por una interfaz digital intuitiva.
* **Audiencia:** Visitantes externos (proveedores, clientes), empleados internos (recepción, sistemas), personal de vigilancia (caseta) y administradores del sistema.Cobertura o alcance:
* **Autenticación restringida:** Acceso controlado mediante Control de Acceso Basado en Roles (RBAC) para empleados, administradores y vigilantes.
* **Gestión de citas:** Creación, modificación, consulta y cancelación de visitas con vinculación de motivos y fechas.Control de Acceso: Validación de identidad en caseta y registro de bitácora de entradas/salidas en tiempo real.
* **Notificaciones:** Alertas automáticas para empleados sobre nuevas citas, cambios, inasistencias o recordatorios 24 horas antes.
* **Solicitud externa:** Formulario público para que visitantes externos soliciten citas, generando un folio único (ej. SGC-8472).

---

## 2. Resumen del Sistema Objetivo general:

* **Automatizar y optimizar la gestión de citas** y el registro de visitas externas para reforzar los procesos de seguridad y administración de la empresa (capacidad inicial de 5 a 50 empleados).
* **Características o funcionalidades principales:**
  * Registro y cancelación de citas programadas vía web.
  * Dashboard con estadísticas del día, mes y citas pendientes de aprobación.
  * Interfaz simplificada para vigilantes (registro de entradas/salidas en máximo 3 clics).
  * Notificaciones y alertas en tiempo real.
  * Trazabilidad completa y generación de reportes detallados sobre la duración, motivo y personal que atendió cada visita.
  * Módulo CRUD completo de administración con buscador en tiempo real.
  * Arquitectura general del diseño: El sistema implementa una arquitectura en capas con segmentación de seguridad mediante firewall, distribuyendo componentes entre un entorno público y privado:
    * Capa de presentación (Frontend): HTML5, CSS3, JavaScript puro. Accesible vía HTTPS.Capa de aplicación (Backend): Node.js + Express.js (API REST), protegido por Firewall interno.
    * Capa de datos: MySQL / PostgreSQL (Relacional).[Espacio para insertar: Diagrama de arquitectura de Nexus Guard]

---

## 3. Requisitos Funcionales:

* **Gestión de Usuarios:** Registro, edición y eliminación de empleados, administradores y usuarios externos (proveedores, clientes).
* **Gestión de Citas:** Programación web de citas (sujetas a disponibilidad), cancelación, y edición con límite de 24 horas previas.
* **Control de Acceso:** Corroboración de identidad en caseta mediante identificación personal y número de folio.
* **Registro de hora exacta de entrada/salida.**
* **Gestión de visitas no programadas:** Autorización inmediata requerida por el empleado a visitar si alguien llega sin cita.
* **Notificaciones:** El sistema notificará al personal vinculado al crear, editar, cancelar o finalizar una cita.
* **Bitácora y Seguridad:** Registro de todos los movimientos (ABC) en el sistema, vinculados al usuario que ejecutó la acción.

---

## 4. No funcionales:

* **Usabilidad:** Interfaz responsiva (Mobile/Desktop), mensajes de error claros, y diseño intuitivo con colores agradables.
* **Rendimiento:** Tiempo de respuesta menor a 2 segundos en validaciones de caseta.
* **Soporte mínimo para 50 usuarios concurrentes sin degradación.**
* **Generación de reportes en menos de 10 segundos.**
* **Seguridad:** Encriptación de contraseñas con algoritmos estándar (SHA-256 / bcrypt).
* **Respaldos automáticos de BD diarios a las 23:00 hrs.**
* **Cierre de sesión automático tras 15 minutos de inactividad.**
* **Compatibilidad:** Funcionamiento en navegadores modernos (Chrome, Firefox, Edge) y despliegue en servidores Linux o Windows.Técnicos:
* **Frontend:**
  * HTML5, CSS3, JavaScript.
* **Backend:**
  * Node.js
  * Express.js.
* **Autenticación:**
  * JWT (JSON Web Tokens)
  * bcryptjs.
* **Base de Datos:**
  * MySQL / PostgreSQL.
* **Herramientas:**
  * Figma (diseño)
  * Git/GitHub (control de versiones).

---

## 5. Instalación Requisitos de software y hardware:

* **Visual Studio Code**
* **Node.js** (v18 o superior).
* Base de datos **MySQL** o **PostgreSQL** instalada localmente o en servidor.
* Navegador web moderno.
  * **Google Chrome**
  * **Mozilla Firefox**
* Sistema opeerativo Windows o MacOS.
* **4GB RAM** mínimo y **1GB** de espacio libre en disco.

---

## 6. Pasos detallados para instalación:

1. Clona el repositorio de GitHub:

* Bash:
  - git clone https://github.com/Rousser/Equipo1_Nexus-Guard
  - cd nexus-guard

2. Instala las dependencias del backend:

* Bash:
  - cd backend
  - npm install

3. Instalar extencion Live Server en Visual Studio Code

* Ir a las extenciones de Visual Studio Code
* En la barra de busqueda, escribir:
  - Live Server
  - Instalar extencion.

4. Crea el archivo de configuración .env basándote en un .env.example y configura tus variables (Puerto, URI de BD, Secret JWT).
5. Configura la base de datos ejecutando el script SQL incluido en el proyecto (database/schema.sql).

## 6. Pasos detallados para inicializar el sistema:

1. Inicializa los usuarios base:

* Bash:
  - **node setup.js**

2. Inicia el servidor de **Node.js**:

* Bash:
  - **npm start**

3. Abre la aplicación en tu navegador web mediante el archivo:

* index.html
  - click derecho: **open with live server**.

8. Estructura de carpetas:

## 📁 Estructura del Proyecto

```text
nexus-guard/
├── backend/
│   ├── data/                 # Archivos/JSON de respaldo temporal
│   ├── routes/               # Rutas de la API REST (auth, accesos)
│   ├── server.js             # Configuración principal del servidor
│   └── setup.js              # Script de inicialización de empleados
├── frontend/
│   ├── assets/               # Logo y recursos gráficos
│   ├── css/                  # styles.css con variables globales
│   ├── js/                   # Lógica CRUD (accesos.js) y UI
│   ├── index.html            # Dashboard principal
│   ├── login.html            # Inicio de sesión
│   ├── recuperar.html        # Recuperación de contraseña
│   ├── accesos.html          # Gestión de Citas (CRUD)
│   └── cita.html             # Solicitud de cita externa
├── imgs/                     # Imágenes para la documentación del README
└── README.md                 # Documentación del proyecto
```
---

# 🏢 Nexus Guard — Sistema de Control de Acceso a Oficinas

## 👥 Integrantes del Equipo

> Ordenados alfabéticamente por apellido


| Apellido, Nombre                   | Rol                             |
| ------------------------------------ | --------------------------------- |
| _(Sanz Hernandez Ignacio)_         | Desarrollador Frontend          |
| _(Claudia Guadalupe Romero)_       | Desarrollador de Autenticación |
| _(Jesus Ramón Camarillo Núñez)_ | Desarrollador de Lógica CRUD   |
| _(Jesus Enrique Felix Olea)_       | Administrador de Base de Datos  |
| _(Marco Gerardo Ceballos Valdez)_  | Arquitecto de Software          |
| _(José Luis Toscano Sosa)_        | Líder de Proyecto              |

---

# 1. Sistema Nexus Guard

### Propósito

El sistema permite gestionar y registrar el acceso de visitantes externos a las instalaciones de una organización, facilitando el control, seguimiento y aprobación de citas entre visitantes y empleados internos.

### Alcance

El sistema cubre los siguientes procesos:

- **Autenticación restringida:** Solo los 6 empleados autorizados pueden iniciar sesión en el sistema. El acceso está controlado por una lista de correos autorizados con contraseñas encriptadas.
- **Gestión de citas:** Creación, consulta, actualización y eliminación de registros de visitas con información del vigilante, visitante, empleado a visitar, fecha, hora y estado.
- **Solicitud externa:** Formulario público que permite a visitantes externos solicitar una cita sin necesidad de cuenta, generando un folio único de seguimiento.
- **Panel de control:** Dashboard con estadísticas del día, mes y citas pendientes de aprobación, con acciones de aprobar o rechazar directamente desde la interfaz.

### Usuarios del Sistema


| Tipo de Usuario         | Descripción                                                                         |
| ------------------------- | -------------------------------------------------------------------------------------- |
| **Empleado Autorizado** | Uno de los 6 empleados registrados que inicia sesión para gestionar y aprobar citas |
| **Visitante Externo**   | Persona ajena a la organización que solicita una cita sin necesidad de cuenta       |

### Empleados Autorizados


| Nombre                         | Correo                                         |
| -------------------------------- | ------------------------------------------------ |
| Jesus Ramón Camarillo Núñez | jcamarillo@nexusguard.com, password: Nexus2024 |
| Marco Gerardo Ceballos Valdez  | mceballos@nexusguard.com, password: Nexus2024  |
| Jesus Enrique Felix Olea       | jfelix@nexusguard.com, password: Nexus2024     |
| Claudia Guadalupe Romero       | cromero@nexusguard.com, password: Nexus2024    |
| Ignacio Sanz Hernandez         | isanz@nexusguard.com, password: Nexus2024      |
| José Luis Toscano Sosa        | jltoscano@nexusguard.com, password: Nexus2024  |

### Tecnologías Utilizadas


| Capa                 | Tecnología                     |
| ---------------------- | --------------------------------- |
| Frontend             | HTML5, CSS3, JavaScript         |
| Backend              | Node.js, Express.js             |
| Almacenamiento       | Archivos JSON                   |
| Autenticación       | JWT (JSON Web Tokens), bcryptjs |
| Control de versiones | Git, GitHub                     |
| Diseño              | Figma                           |

---

# 2. Resumen del Sistema

Nexus Guard es una aplicación web cliente-servidor que permite a organizaciones llevar un registro digital y organizado del acceso de personas a sus oficinas. El sistema reemplaza los registros manuales en papel por una interfaz digital intuitiva que facilita la administración de visitas en tiempo real.

### Flujo General del Sistema

```
Visitante Externo                    Empleado Autorizado
       │                                    │
       ▼                                    ▼
  Solicita cita               Inicia sesión con correo
  (sin cuenta)                 autorizado y contraseña
       │                                    │
       ▼                                    ▼
  Llena formulario              Accede al Dashboard
  con sus datos                 con estadísticas
       │                                    │
       ▼                                    ▼
  Recibe folio              Aprueba o Rechaza citas
  de confirmación            Gestiona todos los registros
```

### Módulos del Sistema

**Módulo 1 — Autenticación**
Gestiona el acceso seguro al sistema. Solo los 6 empleados preregistrados pueden iniciar sesión. Incluye inicio de sesión con token JWT de 8 horas, recuperación de contraseña por código de 4 dígitos, y protección de rutas que redirige al login si no hay sesión activa.

**Módulo 2 — Dashboard**
Panel principal con estadísticas en tiempo real: citas del día, del mes, pendientes de aprobación y lista de próximas citas con acciones rápidas de aprobar o rechazar.

**Módulo 3 — Gestión de Citas (CRUD)**
Módulo completo de administración con tabla de registros, buscador en tiempo real, formulario emergente para crear y editar, y notificaciones visuales de éxito o error.

**Módulo 4 — Solicitud Externa**
Formulario público para visitantes externos con generación automática de folio de confirmación en formato SGC-XXXX.

### Endpoints de la API


| Método | Ruta                         | Descripción                    |
| --------- | ------------------------------ | --------------------------------- |
| POST    | `/api/auth/login`            | Iniciar sesión                 |
| POST    | `/api/auth/verificar-correo` | Enviar código de recuperación |
| POST    | `/api/auth/cambiar-password` | Cambiar contraseña             |
| GET     | `/api/accesos`               | Obtener todas las citas         |
| GET     | `/api/accesos/:id`           | Obtener una cita por ID         |
| POST    | `/api/accesos`               | Crear nueva cita                |
| PUT     | `/api/accesos/:id`           | Actualizar cita                 |
| DELETE  | `/api/accesos/:id`           | Eliminar cita                   |

---

# 3. Requisitos funcionales y no funcionales

### 📋 Especificación de Requisitos de Software

### 1. Requisitos Funcionales (RF)

*Acciones específicas que el sistema realiza para el usuario.*

#### Módulo de Autenticación y Seguridad

* **RF01:** El sistema debe restringir el registro de cuentas nuevas únicamente a correos institucionales presentes en una "Lista Blanca" de personal autorizado.
* **RF02:** El sistema debe permitir el inicio de sesión seguro validando correo y contraseña.
* **RF03:** El sistema debe permitir el cierre de sesión, destruyendo el acceso administrativo en el cliente.
* **RF04:** El sistema debe ofrecer un flujo de recuperación de cuenta: verificación de existencia, validación por código de 4 dígitos generado en tiempo real y actualización de contraseña.
* **RF05:** El sistema debe proteger las rutas administrativas, bloqueando el acceso a usuarios no autenticados.
* **RF06:** El sistema debe mostrar el nombre del usuario logueado en la barra superior para confirmación de identidad.

#### Módulo de Solicitud de Citas (Portal Público)

* **RF07:** El sistema debe proporcionar un formulario web público para solicitudes externas.
* **RF08:** El sistema debe permitir al visitante seleccionar al empleado destino desde un menú desplegable dinámico.
* **RF09:** El sistema debe capturar datos del visitante: nombre, empresa de procedencia y correo electrónico.
* **RF10:** El sistema debe permitir la selección de fecha y hora específica para la visita.
* **RF11:** El sistema debe exigir una descripción obligatoria del motivo de la visita.
* **RF12:** El sistema debe generar automáticamente un Folio alfanumérico único por cada solicitud.
* **RF13:** El sistema debe mostrar una pantalla de confirmación con el folio generado tras el registro exitoso.

#### Módulo de Gestión Administrativa

* **RF14:** El sistema debe permitir al personal interno crear registros de acceso manuales (entradas sin cita previa).
* **RF15:** El sistema debe mostrar todas las citas en una tabla organizada con ID, Vigilante, Empleado, Visitante, Empresa, Fecha/Hora y Estado.
* **RF16:** El sistema debe permitir la edición completa de registros existentes a través de un formulario dinámico.
* **RF17:** El sistema debe permitir la eliminación de registros de la base de datos previa confirmación del usuario.
* **RF18:** El sistema debe permitir el cambio de estado rápido (Aprobado/Rechazado) con un solo clic.
* **RF19:** El sistema debe integrar un buscador en tiempo real que filtre los datos de la tabla por cualquier campo de texto.

#### Módulo de Monitoreo (Dashboard)

* **RF20:** El sistema debe calcular y mostrar el conteo de citas programadas para el día actual.
* **RF21:** El sistema debe calcular y mostrar el total de citas registradas en el mes en curso.
* **RF22:** El sistema debe identificar y mostrar el conteo de solicitudes en estado "Pendiente".
* **RF23:** El sistema debe listar los últimos 5 movimientos registrados para un monitoreo rápido de actividad.

---

### 2. Requisitos No Funcionales (RNF)

*Atributos de calidad y restricciones de experiencia.*

* **RNF01 (Usabilidad):** La interfaz debe ser Responsive Design, adaptándose a dispositivos móviles mediante Media Queries de CSS.
* **RNF02 (Usabilidad):** El sistema debe proporcionar feedback inmediato mediante notificaciones tipo Toast para confirmar el éxito o error de las operaciones.
* **RNF03 (Rendimiento):** El tiempo de respuesta para la carga de datos del Dashboard no debe exceder los 2 segundos.
* **RNF04 (Disponibilidad):** La interfaz debe incluir indicadores visuales de carga (Spinners) para evitar la incertidumbre del usuario durante peticiones asíncronas.
* **RNF05 (Localización):** El sistema debe manejar formatos de fecha y hora locales (México) y mensajes de interfaz exclusivamente en español.
* **RNF06 (Escalabilidad):** El sistema debe ser capaz de soportar hasta 50 usuarios concurrentes sin pérdida de rendimiento.

---

### 3. Requisitos Técnicos (RT)

*Tecnologías y herramientas específicas que sostienen el software.*

* **RT01 (Backend):** Desarrollo basado en Node.js utilizando el framework Express.
* **RT02 (Frontend):** Interfaz construida con HTML5, CSS3 y JavaScript Vanilla (sin frameworks pesados para mayor velocidad).
* **RT03 (Seguridad de Datos):** Encriptación de contraseñas mediante bcryptjs con un factor de costo (salt) de 10.
* **RT04 (Sesiones):** Autenticación basada en JSON Web Tokens (JWT) con firma de clave secreta.
* **RT05 (Base de Datos):** Almacenamiento persistente en MySQL para la gestión relacional de usuarios y accesos.
* **RT06 (Entorno):** Gestión de configuración sensible (claves de DB, secretos de JWT) mediante variables de entorno en archivos .env.
* **RT07 (Comunicación):** Implementación de políticas CORS para permitir el intercambio de recursos entre el frontend y la API.

---

# 4. Requisitos de Arquitectura del Sistema (RA)

*Estructura y organización de los componentes del software.*

* **RA01 (Patrón de Diseño):** Arquitectura de Separación de Responsabilidades, dividiendo claramente el cliente (Frontend) del servidor (Backend API).
* **RA02 (Servicios):** Implementación de una API RESTful, utilizando métodos HTTP estándar (GET, POST, PUT, DELETE) para el manejo de recursos.
* **RA03 (Conectividad):** Uso de un Pool de conexiones (mysql2/promise) para gestionar eficientemente las peticiones a la base de datos MySQL.
* **RA04 (Ruteo):** Organización del servidor mediante Express Router, separando la lógica de autenticación (auth.js) de la lógica de negocio (accesos.js).
* **RA05 (Persistencia de Cliente):** Gestión de estado de sesión en el lado del cliente mediante localStorage.
* **RA06 (Middleware):** Uso de funciones intermedias para el parseo de cuerpos JSON (express.json) y la validación de seguridad antes de llegar a los controladores.
![Arquitectura](/imgs/arquitectura.png)

---

### Alcance y Restricciones

* **Alcance:** El sistema cubre desde la solicitud externa de la cita hasta la auditoría administrativa final en el Dashboard.
* **Restricciones:**
  1. Solo correos @nexusguard.com autorizados pueden registrarse.
  2. Los tokens de sesión expiran tras 8 horas de actividad.
  3. Se requiere conexión constante a la base de datos MySQL para cualquier operación de lectura o escritura.

---

# 5. Uso del Sistema

### 🖥️ Páginas del Sistema


| Página               | Archivo          | Descripción                                 |
| ----------------------- | ------------------ | ---------------------------------------------- |
| Login                 | `login.html`     | Inicio de sesión para empleados autorizados |
| Recuperar Contraseña | `recuperar.html` | Restablecer contraseña olvidada             |
| Dashboard             | `index.html`     | Panel principal con estadísticas            |
| Gestión de Citas     | `accesos.html`   | CRUD completo de citas                       |
| Solicitud de Cita     | `cita.html`      | Formulario para visitantes externos          |

---

### 🔐 Inicio de Sesión

1. Abrir `login.html` en el navegador.
2. Escribir el **correo autorizado** y **contraseña**.
3. Activar **"Recordarme"** si se desea mantener la sesión.
4. Hacer clic en **"Iniciar sesión"**.
5. El sistema redirigirá automáticamente al Dashboard.

> ⚠️ Solo los 6 empleados autorizados pueden iniciar sesión. Cualquier otro correo será rechazado.

---

### 🔑 Recuperar Contraseña

**Paso 1:** Ingresar el correo autorizado y hacer clic en **"Enviar Código"**.
**Paso 2:** Escribir el código de 4 dígitos generado y hacer clic en **"Verificar Código"**.
**Paso 3:** Ingresar la nueva contraseña, confirmarla y hacer clic en **"Cambiar Contraseña"**.

---

### 📊 Panel Principal (Dashboard)


| Elemento              | Descripción                                  |
| ----------------------- | ----------------------------------------------- |
| **Citas de Hoy**      | Total de citas registradas en el día actual  |
| **Citas del Mes**     | Total de citas del mes en curso               |
| **Aprobación Pdte.** | Citas en estado Pendiente                     |
| **Gestión de Citas** | Acceso directo al módulo CRUD                |
| **Próximas Citas**   | Últimas citas con botones Aprobar / Rechazar |

---

### 🚪 Gestión de Citas (CRUD)


| Acción      | Cómo realizarla                                        |
| -------------- | --------------------------------------------------------- |
| **Crear**    | Clic en "+ Nuevo Registro", llenar formulario y guardar |
| **Buscar**   | Escribir en el buscador para filtrar en tiempo real     |
| **Editar**   | Clic en "✏️ Editar", modificar campos y guardar       |
| **Eliminar** | Clic en "🗑️ Eliminar" y confirmar en el diálogo      |

---

### 📅 Solicitud de Cita Externa

1. Acceder desde el Login → **"¿Eres externo? Solicita una cita aquí"**.
2. Llenar el formulario con nombre, empresa, correo, empleado a visitar, fecha, hora y motivo.
3. Hacer clic en **"Solicitar Cita"**.
4. El sistema mostrará un folio de confirmación (ej. SGC-8472).

---

### 🔓 Cerrar Sesión

Hacer clic en **"🔓 Cerrar Sesión"** en el menú lateral. El sistema elimina la sesión y redirige al Login.

> ⚠️ Si se intenta acceder al Dashboard o Gestión de Citas sin sesión activa, el sistema redirige automáticamente al Login.

---

# 6. Base de Datos (Modelado)

## 6.1 CREACIÓN DE LA BASE DE DATOS

Se diseñó  y creó una base de datos relacional llamada *sistema_acceso*, enfocado en la administración de accesos, registro de citas y control de usuarios dentro del sistema. La estructura  fue implementada en SQL utilizando sentencias CREATE DATABASE, CREATE TABLE y relaciones mediante FOREING KEY para garantizar integridad referencial.

La base de datos está compuesta por las siguientes tablas principales:

+ **rol:** almacena los tipos de roles del sistema (Administrador, Recepcionista, Seguridad).
+ **usuario:** guarda información de acceso de los usuarios internos.
+ **empleado:** registra empleados relacionados con usuarios internos.
+ **bitacora:** almacena eventos importantes como inicio de sesión, registros y autorizaciones.
+ **persona externa:** registra visitantes, clientes y proveedores.
+ **visitante:** extensión de persona externa para clientes.
+ **proveedor:** extensión de persona externa para visitantes.
+ **cita:** administra citas programadas.
+ **acceso:** controla entradas y salidas registradas dentro del sistema.

---

## 6.2 Configuración de la base de datos.

La configuración fue realizada considerando que:

### Llaves primaras

Cada tabla cuenta con un identificador único **PRIMARY KEY**
Ejemplos:

+ id_rol
+ id_usuario
+ id_empleado
+ id_persona
+ id_cita
+ id_acceso

### Llaves foráneas

Se implementaron **FOREIGN KEY** para conectar las tablas relacionadas, por ejemplo:

+ usuario.id_rol → rol.id_rol
+ empleado.id_usuario → usuarioid_usuario
+ cliente.id_persona → persona_externa.id_persona
+ cita.id_persona → persona_externaid_persona
+ acceso.id_cita → cita.id_cita

Esto permite mantener consistencia en la información almacenada.

### Restricciones de integridad

Se utilizaron restricciones como:

+ NOT NULL → campos obligatorios
+ UNIQUE → evita duplicados, por ejemplo en correos electrónicos
+ DEFAULT → valores automáticos como fecha de creación o estado activo
+ ENUM → controla valores válidos en campos como:
  - tipo_persona → cliente/visitante/proveedor
  - estado_cita → pendiente/confirmada/finalizada

### Eliminación en cascada

Se configuró **ON DELETE CASCADE** para eliminar automáticamente registros relacionados cuando el registro principal se ha eliminado, enviando datos huérfanos. También se usó **ON DELETE SET NULL** en algunos casos para conservar historial sin romper relaciones.

---

## 6.3 Presistencia de los datos de CRUD y Login

Para asegurar la persistencia de datos del sistema se implementó almacenamiento permanente en la base de datos, permitiendo conservar la información incluso depués de cerrar la aplicación o reiniciar el servidor.

**CRUD**
El sistema permite:
**Create (Crear)**

+ registrar usuarios
+ registrar empleados
+ registrar proveedores
+ registrar personas externas
+ registrar accesos
+ crear citas

**Read (Leer)**

+ consultar usuarios
+ ver historial de accesos
+ consultar bitácora
+ ver vitas programadas

**Update (Actualizar)**

+ modificar los datos del usuario
+ cambiar estado de la cita
+ actualiazar la información de proveedores/clientes

**Delete (Borrar/Eliminar)**

+ eliminar registros obsoletos
+ eliminar a los usuarios inactivos
+ cancelar citas

**Login**
El sistema de autenticación utiliza la tabla **usuario**, donde se almacena la siguiente información:

+ nombres
+ apellidos
+ correos
+ contraseñas
+ teléfonos
+ roles
+ estados de cuenta
  Con ello se valida el acceso según los priviliegios que esta tenga:
+ administrador → control total
+ recepcionista → gestión de citas y accesos
+ seguridad → control de entradas y salidas
  Además, cada acción importante queda registrada en la bitácora, permitiendo auditorías del sistema.

---

## 6.4 Documentación técnica de la base de datos

ROLL
USUARIO
EMPLEADO
CITA
ACCESO

PERSONA_EXTERNA
CLIENTE
VISITANTE
PROVEEDOR
CITA
ACCESO

**Seguridad implementada**
Se contemplaron:

+ control de roles
+ bitácora de movimientos
+ integridad referencial
+ validación de campos obligatorios
+ persistencia segura de registros

**Escalabilidad**
La estructura permite añadir fácilmente nuevos módulos como:

+ control biométrico
+ reportes administrativos
+ notificaciones automáticas
+ autenticación más robusta (hash de contraseñas)
+ panel web administativo

---

**Diagrama Entidad-Relacion**

![EntidadRelacion](/imgs/entidadRelacion.png)
---------------------------------------------

**Diagrama de Clases**
![DiagraamaClases](/imgs/diagramaClases.png)

---

# 7. 📌 Desarrollo del Frontend

### Descripción General

El desarrollo del frontend consistió en construir todas las interfaces visuales del sistema utilizando **HTML5, CSS3 y JavaScript puro**, tomando como base el diseño elaborado en **Figma**. Se implementaron 5 páginas funcionales que cubren la experiencia completa del usuario, desde el inicio de sesión hasta la gestión de citas.

### Estructura de Archivos

```
control-acceso-oficinas/
├── assets/
│   └── logo.svg          → Logo oficial de Nexus Guard
├── css/
│   └── styles.css        → Hoja de estilos global con variables CSS
├── js/
│   └── accesos.js        → Lógica del CRUD y notificaciones
├── accesos.html          → Gestión de Citas (CRUD)
├── cita.html             → Solicitud de cita para visitantes externos
├── index.html            → Dashboard principal
├── login.html            → Inicio de sesión
└── recuperar.html        → Recuperación de contraseña
```

### Paleta de Colores

Se definió mediante variables CSS para mantener consistencia en toda la aplicación:


| Variable             | Color     | Uso                             |
| ---------------------- | ----------- | --------------------------------- |
| `--color-primario`   | `#1A1A2E` | Fondo del sidebar               |
| `--color-secundario` | `#00C48C` | Botones principales y acentos   |
| `--color-acento`     | `#6C63FF` | Botón "Nuevo Registro"         |
| `--color-danger`     | `#E74C3C` | Botones de eliminar y alertas   |
| `--color-azul`       | `#3498DB` | Títulos y encabezados          |
| `--color-fondo`      | `#F4F6F9` | Fondo general de la aplicación |

### Páginas Desarrolladas

**1. login.html — Inicio de Sesión**

Página de acceso con diseño centrado.

* Incluye campos de correo y contraseña con íconos, opción "Recordarme", enlace a recuperación de contraseña, enlace a solicitud de cita externa, íconos de redes sociales con Font Awesome, y botón para mostrar u ocultar la contraseña. El registro de nuevos usuarios fue eliminado ya que solo los 6 empleados autorizados pueden acceder al sistema.

![login](/imgs/login.png)

**2. recuperar.html — Recuperación de Contraseña**

Página de 4 pasos progresivos:

* ingreso del correo, verificación del código de 4 dígitos, ingreso de nueva contraseña y pantalla de confirmación. Cada paso se muestra u oculta dinámicamente con JavaScript sin recargar la página.

![recuperar](/imgs/recuperar.png)

**3. index.html — Dashboard**

Panel principal que consume la API del backend para mostrar estadísticas en tiempo real.

* Muestra tarjetas de resumen, lista de próximas citas con botones de aprobación y rechazo, fechas en formato DD/MM/YYYY, y spinner de carga mientras se obtienen los datos.

![index](/imgs/index.png)

**4. accesos.html — Gestión de Citas**

Página central del CRUD con tabla de registros

* buscador en tiempo real que filtra por cualquier campo, formulario emergente para crear o editar citas, menú desplegable con los 6 empleados disponibles, badges de colores para los estados, notificaciones visuales de éxito o error, y spinner de carga.

![accesos](/imgs/accesos.png)

**5. cita.html — Solicitud Externa**

Formulario público sin inicio de sesión.

* Genera automáticamente un folio único en formato SGC-XXXX y muestra pantalla de confirmación al enviar. Configurado para que Live Server no recargue la página cuando se guardan datos.

![cita](/imgs/cita.png)

### Funcionalidades Implementadas

**Notificaciones Visuales**
Se reemplazaron los `alert()` del navegador por notificaciones personalizadas que aparecen en la esquina superior derecha de la pantalla. Se desaparecen automáticamente en 3 segundos o al hacer clic sobre ellas.

```javascript
function mostrarNotif(mensaje, tipo = 'success') {
  const container = document.getElementById('notif-container');
  const iconos = { success: '✅', error: '❌', info: 'ℹ️' };
  const notif = document.createElement('div');
  notif.className = `notif notif-${tipo}`;
  notif.innerHTML = `<span>${iconos[tipo]}</span><span>${mensaje}</span>`;
  container.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
}
```

**Buscador en Tiempo Real**
Filtra los registros de la tabla mientras el usuario escribe, sin necesidad de hacer peticiones adicionales al servidor.

```javascript
document.getElementById('buscador').addEventListener('input', function() {
  const texto = this.value.toLowerCase();
  const filas = document.querySelectorAll('#tabla-citas tr');
  filas.forEach(fila => {
    fila.style.display = fila.textContent.toLowerCase().includes(texto) ? '' : 'none';
  });
});
```

**Spinner de Carga**
Se muestra un indicador animado mientras se obtienen los datos del servidor, mejorando la experiencia de usuario.

**Formato de Fecha DD/MM/YYYY**
Las fechas almacenadas en formato `YYYY-MM-DD` se convierten al formato local para mostrarse en la tabla y el dashboard.

```javascript
function formatearFecha(fecha) {
  const [anio, mes, dia] = fecha.split('-');
  return `${dia}/${mes}/${anio}`;
}
```

**Protección de Rutas**
Cada página protegida verifica si existe un token JWT en `localStorage` antes de mostrar el contenido. Si no existe, redirige al login automáticamente.

```javascript
if (!localStorage.getItem('token')) {
  window.location.href = 'login.html';
}
```

### Decisiones de Diseño

- **Variables CSS:** Permiten cambios globales de colores desde un solo lugar.
- **Sidebar fijo:** El menú lateral permanece visible mientras el usuario hace scroll.
- **Formularios emergentes:** Los formularios del CRUD se muestran u ocultan sin cambiar de página.
- **Live Server configurado:** Se agregó `.vscode/settings.json` para que Live Server ignore la carpeta `backend/data/` y no recargue la página al guardar datos.
- **Font Awesome CDN:** Se utilizó para los íconos de redes sociales en el login.

### Comunicación con el Backend

El frontend se comunica con la API REST usando `fetch()` de JavaScript en formato JSON:

```javascript
const res = await fetch('http://localhost:3000/api/accesos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(datos)
});
const data = await res.json();
```

---

# 8.📌 Desarrollo de Autenticación

### Descripción General

El módulo de autenticación se desarrolló en **Node.js con Express.js**. Se implementó un sistema de acceso restringido donde únicamente los 6 empleados preregistrados pueden iniciar sesión. La seguridad se garantiza con **bcryptjs** para cifrado de contraseñas y **JWT** para gestión de sesiones.

### Dependencias Utilizadas


| Paquete        | Función                                              |
| ---------------- | ------------------------------------------------------- |
| `express`      | Framework del servidor web                            |
| `bcryptjs`     | Cifrado de contraseñas                               |
| `jsonwebtoken` | Generación y verificación de tokens JWT             |
| `cors`         | Permite peticiones desde el frontend                  |
| `nodemon`      | Reinicio automático del servidor al detectar cambios |

### Estructura del Módulo

```
backend/
├── data/
│   ├── usuarios.json     → 6 empleados preregistrados con contraseñas cifradas
│   └── accesos.json      → Registros de citas
├── routes/
│   └── auth.js           → Rutas y lógica de autenticación
├── server.js             → Configuración principal del servidor
└── setup.js              → Script de inicialización de empleados
```

### Script de Inicialización (setup.js)

Se creó un script que precarga los 6 empleados autorizados en el sistema con contraseñas cifradas. Este script se ejecuta una sola vez para inicializar el sistema:

```javascript
const bcrypt = require('bcryptjs');
const password = await bcrypt.hash('Nexus2024', 10);

const empleados = [
  { id: '1', nombre: 'Jesus Ramón Camarillo Núñez',  email: 'jcamarillo@nexusguard.com', password },
  { id: '2', nombre: 'Marco Gerardo Ceballos Valdez', email: 'mceballos@nexusguard.com',  password },
  // ... demás empleados
];
```

Para ejecutarlo: `node setup.js`

### Endpoints Implementados

#### POST `/api/auth/login`

Verifica las credenciales del empleado y genera un token JWT. Solo acepta los correos de los 6 empleados registrados.

```
Entrada:  { email, password }
Salida:   { token, nombre, email }
```

Proceso:

1. Buscar el correo en `usuarios.json`.
2. Si no existe, responder con error 401.
3. Comparar la contraseña ingresada con el hash usando `bcrypt.compare()`.
4. Si es válida, generar token JWT con expiración de 8 horas.
5. Retornar el token y datos del empleado.

#### POST `/api/auth/verificar-correo`

Verifica que el correo esté registrado y genera un código de recuperación de 4 dígitos. El código se guarda en **memoria** (no en archivo) para evitar que Live Server recargue la página durante el desarrollo.

```
Entrada:  { email }
Salida:   { codigo, mensaje }
```

#### POST `/api/auth/cambiar-password`

Actualiza la contraseña del empleado tras la verificación del código. La nueva contraseña se cifra antes de guardarse.

```
Entrada:  { email, password }
Salida:   { mensaje: "Contraseña actualizada exitosamente" }
```

### Seguridad Implementada

**Cifrado de contraseñas con bcryptjs**
Las contraseñas nunca se almacenan en texto plano. Se usa `bcrypt.hash()` con 10 rondas de salt generando un hash único e irreversible. La verificación se realiza con `bcrypt.compare()`.

**Gestión de sesiones con JWT**Al iniciar sesión, el servidor genera un token JWT firmado con una clave secreta que:

- Se almacena en el `localStorage` del navegador.
- Expira automáticamente en 8 horas.
- Contiene el ID, nombre y correo del empleado.

**Acceso restringido a 6 empleados**
El sistema no permite registro de nuevos usuarios. Los 6 empleados fueron preregistrados mediante el script `setup.js` con contraseña inicial `Nexus2024`. Cada empleado puede cambiar su contraseña usando la función de recuperación.

**Protección de rutas en el frontend**
Las páginas Dashboard y Gestión de Citas verifican el token antes de mostrar el contenido:

```javascript
if (!localStorage.getItem('token')) {
  window.location.href = 'login.html';
}
```

**Cierre de sesión seguro**
Al cerrar sesión se eliminan el token y los datos del usuario del `localStorage`:

```javascript
function cerrarSesion() {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  window.location.href = 'login.html';
}
```

**CORS habilitado**
Se configuró el middleware `cors` para permitir la comunicación entre el frontend (puerto 5500) y el backend (puerto 3000).

**Códigos de recuperación en memoria**
Para evitar que Live Server recargue la página al modificar archivos JSON, los códigos de recuperación se guardan en un objeto en memoria del servidor en lugar de en el archivo de usuarios.

---

# **9. Uso del Sistema (Manual de usuario)**

El flujo de uso de Nexus Guard se divide según los perfiles de usuario.

### **Guía para Visitante Externo**

1. Acceder desde la pantalla de Login y hacer clic en **"¿Eres externo? Solicita una cita aquí"**.
2. Llenar el formulario con nombre, empresa, correo, empleado a visitar, fecha, hora y motivo. *(El sistema usa un menú desplegable interactivo para seleccionar al empleado).*
3. Hacer clic en **"Solicitar Cita"**.
4. El sistema mostrará una pantalla de confirmación con un **folio único** (ej. SGC-8472).
5. Esperar el correo de confirmación con la aprobación o rechazo de la cita.

### **Guía para Empleado / Administrador**

![LOGIN](/imgs/login.png)

1. Abrir `login.html` e iniciar sesión con **correo autorizado** y **contraseña**.
2. **Dashboard (Panel Principal):** - Visualiza tarjetas de resumen: "Citas de Hoy", "Citas del Mes", "Aprobación Pdte".
   - Las próximas citas aparecen en lista. Puedes hacer clic en **Aprobar** o **Rechazar** directamente desde aquí sin cambiar de pantalla.
     ![LOGIN](/imgs/index.png)
3. **Gestión de Citas (CRUD):** - Navega a `accesos.html`.
   - **Crear:** Clic en "+ Nuevo Registro".
   - **Buscar:** Escribe en la barra para filtrar registros en tiempo real.
   - **Editar/Eliminar:** Usa los botones en cada fila de la tabla para modificar fechas o cancelar la visita.
4. Cerrar sesión desde el menú lateral para proteger la cuenta.
   ![ACCESO](/imgs/accesos.png)

### **Guía para Vigilante (Control de Acceso en Caseta)**

1. Iniciar sesión y acceder a la pestaña de registro de accesos.
2. **Visitante con cita:** Solicitar identificación y número de folio. Ingresar el folio en el buscador para validar identidad. Clic en "Registrar Entrada" para autorizar el acceso y cambiar el estado de la cita a "En curso".
   ![ACCESO](/imgs/editarCita.png)
3. **Visitante sin cita:** Llenar datos básicos y seleccionar "Solicitar Acceso" para enviar una alerta inmediata al empleado. Esperar autorización en pantalla.
   ![ACCESO](/imgs/accesos.png)
4. Al salir la persona, registrar la salida para actualizar la bitácora y notificar al empleado de la finalización de la visita.
   ![LOGIN](/imgs/login.png)

---

# **10. Seguridad**

La seguridad técnica y operativa es un pilar crítico de Nexus Guard debido al manejo de datos personales y control perimetral físico.

* **Autenticación Fuerte:** Ninguna contraseña se guarda en texto plano (`bcryptjs`).
* **Tokens Seguros:** Implementación de JWT para la comunicación entre el frontend y el backend API.
* **Desconexión Automática:** Implementación de timeout para cerrar la sesión tras 15 minutos de inactividad, evitando accesos no autorizados en terminales compartidas (ej. caseta de vigilancia).
* **Validación de Entradas:** Protección contra inyecciones SQL/NoSQL en los formularios de captura.
* **Trazabilidad Continua (Bitácora):** Cada evento de inicio de sesión, autorización de entrada y registro de cita es auditado y escrito en la tabla inmutable `bitacora`.

---

# **11. Mantenimiento y Actualizaciones**

El sistema cuenta con un modelo de escalabilidad y mantenimiento estructurado:

* **Respaldos Automáticos:** Programación de *backups* completos de la base de datos diariamente a las 23:00 horas para garantizar la integridad histórica.
* **Mantenimiento Preventivo:** Refactorización modular de controladores y actualización periódica de paquetes NPM para parchar vulnerabilidades.
* **Escalabilidad:** Gracias a la separación total entre frontend estático y backend RESTful, el sistema está listo para integrarse a futuro con hardware biométrico, lectores de códigos QR para visitantes o pasarelas de SMS para notificaciones.

---

# **12. Referencias y Recursos**

* [Node.js](https://nodejs.org/) – Entorno de ejecución de backend.
* [Express.js](https://expressjs.com/) – Framework web ligero.
* [MySQL](https://www.mysql.com/) / [PostgreSQL](https://www.postgresql.org/) – Motores de bases de datos relacionales.
* [JWT (JSON Web Tokens)](https://jwt.io/) – Estándar de seguridad para sesiones.
* [Figma](https://www.figma.com/) – Herramienta de prototipado de UI/UX.
* [Font Awesome](https://fontawesome.com/) – Iconografía del sitio.
