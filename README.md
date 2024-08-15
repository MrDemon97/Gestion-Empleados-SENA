# Proyecto de Gestión de Empleados

## Descripción

Este proyecto es una aplicación de gestión de empleados desarrollada en la etapa de aprendizaje del programa Técnico en Programación del Servicio Nacional de Aprendizaje (SENA). La aplicación está construida con Angular en el frontend y Node.js con Express en el backend.

## Tecnologías

- **Frontend**: Angular
- **Backend**: Node.js, Express, morgan, cors, nodemon, mongoose
- **Base de Datos**: MongoDB

## Estructura del Proyecto

- **frontend/**: Contiene la aplicación Angular.
- **backend/**: Contiene el servidor Node.js y la API RESTful.

## Instalación

### Requisitos

- Node.js
- NPM (Node Package Manager)
- MongoDB (para la base de datos)
- Base de datos previamente creada con la estructura dada.

### Configuración del Backend

1. Navega a la carpeta principal:
   ```bash
   cd GESTION-EMPLEADOS
Instala las dependencias y herramientas:

bash
Copiar código
npm install express morgan cors mongoose
bash
Copiar código
npm install --save-dev nodemon
Configura la URL de la base de datos en backend/database.js.

Inicia el servidor:

bash
Copiar código
npm run dev
Configuración del Frontend
Navega a la carpeta frontend/:

bash
Copiar código
cd frontend
Instala las dependencias:

bash
Copiar código
npm install -g @angular/cli
Inicia la aplicación Angular:

bash
Copiar código
ng serve
Abre tu navegador y navega a http://localhost:4200 para ver la aplicación.

Documentación de la API
La documentación de la API se encuentra en el archivo apiTests.md dentro de la carpeta backend. Este archivo contiene detalles sobre las rutas disponibles, los métodos HTTP soportados, y ejemplos de cómo interactuar con la API.

Uso de la Página
Esta sección proporciona una guía paso a paso sobre cómo utilizar la aplicación de gestión de empleados. A continuación, se describen las funcionalidades principales de la aplicación junto con capturas de pantalla para ilustrar cada paso.

Página de Inicio
En la página de inicio, encontrarás dos secciones principales: el formulario para crear o editar empleados y la lista de empleados.

Formulario para Crear o Editar Empleado
Descripción: Este formulario permite ingresar los datos de un nuevo empleado o actualizar la información de un empleado existente.
Campos:
Nombre: Campo para ingresar el nombre del empleado.
Cargo: Campo para especificar el cargo del empleado.
Lugar de Trabajo: Campo para indicar el lugar donde el empleado trabaja.
Salario: Campo para ingresar el salario del empleado.
Botones:
Limpiar: Borra los datos ingresados en el formulario.
Guardar: Envía los datos al servidor para crear o actualizar el empleado.
Espacio para pantallazo del formulario:


Lista de Empleados
Descripción: Muestra una tabla con la lista de todos los empleados registrados. Puedes ordenar la tabla por nombre, cargo, oficina y salario.
Acciones:
Editar: Permite seleccionar un empleado para actualizar su información.
Eliminar: Permite eliminar un empleado de la lista.
Espacio para pantallazo de la lista de empleados:


Interacción con la Aplicación
Agregar un Empleado
Rellena los campos del formulario con la información del nuevo empleado.
Haz clic en el botón "Guardar" para añadir el empleado a la lista.
El nuevo empleado aparecerá en la tabla de la lista de empleados.
Espacio para pantallazo del proceso de agregar empleado:


Editar un Empleado
Haz clic en el icono de "editar" al lado del empleado que deseas modificar.
El formulario se llenará automáticamente con los datos del empleado seleccionado.
Modifica la información según sea necesario.
Haz clic en el botón "Guardar" para actualizar la información del empleado.
Espacio para pantallazo del proceso de editar empleado:


Eliminar un Empleado
Haz clic en el icono de "eliminar" al lado del empleado que deseas borrar.
Confirma la acción si es necesario.
El empleado se eliminará de la lista.
Espacio para pantallazo del proceso de eliminar empleado:


Ordenar la Tabla de Empleados
Descripción: La tabla de empleados permite ordenar los datos por columnas específicas: Nombre, Cargo, Oficina y Salario.
Cómo Funciona:
Ordenar por Nombre: Haz clic en el encabezado de la columna "Nombre" para ordenar la tabla alfabéticamente por el nombre de los empleados.
Ordenar por Cargo: Haz clic en el encabezado de la columna "Cargo" para ordenar la tabla por el cargo de los empleados.
Ordenar por Oficina: Haz clic en el encabezado de la columna "Oficina" para ordenar la tabla por la oficina en la que trabaja el empleado.
Ordenar por Salario: Haz clic en el encabezado de la columna "Salario" para ordenar la tabla por el salario de los empleados.
Indicador de Ordenación: Un icono de flecha ascendente o descendente puede indicar el tipo de ordenación actual (ascendente o descendente).
Espacio para pantallazo del proceso de ordenar empleados:


Autor
Jari Coral

css
Copiar código

Este formato incluye la sección sobre cómo usar la página y las oportunidades de mejora en 