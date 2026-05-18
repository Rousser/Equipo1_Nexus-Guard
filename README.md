
## 📋 Especificación de Requisitos de Software

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

### 4. Requisitos de Arquitectura del Sistema (RA)
*Estructura y organización de los componentes del software.*

* **RA01 (Patrón de Diseño):** Arquitectura de Separación de Responsabilidades, dividiendo claramente el cliente (Frontend) del servidor (Backend API).
* **RA02 (Servicios):** Implementación de una API RESTful, utilizando métodos HTTP estándar (GET, POST, PUT, DELETE) para el manejo de recursos.
* **RA03 (Conectividad):** Uso de un Pool de conexiones (mysql2/promise) para gestionar eficientemente las peticiones a la base de datos MySQL.
* **RA04 (Ruteo):** Organización del servidor mediante Express Router, separando la lógica de autenticación (auth.js) de la lógica de negocio (accesos.js).
* **RA05 (Persistencia de Cliente):** Gestión de estado de sesión en el lado del cliente mediante localStorage.
* **RA06 (Middleware):** Uso de funciones intermedias para el parseo de cuerpos JSON (express.json) y la validación de seguridad antes de llegar a los controladores.

---

### Alcance y Restricciones
* **Alcance:** El sistema cubre desde la solicitud externa de la cita hasta la auditoría administrativa final en el Dashboard.
* **Restricciones:** 
	1. Solo correos @nexusguard.com autorizados pueden registrarse.
	2. Los tokens de sesión expiran tras 8 horas de actividad.
	3. Se requiere conexión constante a la base de datos MySQL para cualquier operación de lectura o escritura.
