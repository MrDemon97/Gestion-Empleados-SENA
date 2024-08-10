# Pruebas para el API REST

Este documento anexa las pruebas realizadas para el API. Estas pruebas se han hecho usando la extensión de POSTMAN en VSC.

---

**API REST:** Estilo de arquitectura que utiliza recursos, métodos HTTP y ausencia de estado para diseñar interfaces de programación de aplicaciones escalables y flexibles.

La presente API se encarga de realizar operaciones CRUD y utiliza una base de datos no relacional MongoDB.

Definiremos inicialmente la ruta de nuestro servidor, el cual corre de manera local:
**Nuestro endpoint será:**  
`http://localhost:3000/api/empleados`

## PRUEBAS PARA GET

El API se diseña con dos operaciones GET: una para la obtención de todos los empleados y otra para la obtención de un único empleado por su ID.

### GET /empleados

**Petición:**
GET http://localhost:3000/api/empleados

**Descripción:** Mediante una petición GET a este endpoint obtendremos todos los empleados de la base de datos. En caso de que haya un error, por ejemplo, si no se puede conectar a la base de datos, se devolverá un mensaje de error.

**Ejemplo de respuesta exitosa:**

```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "name": "Juan Pérez",
    "position": "Desarrollador",
    "office": "Oficina Central",
    "salary": 50000
  },
  {
    "_id": "60d21b4667d0d8992e610c86",
    "name": "Ana Gómez",
    "position": "Diseñadora",
    "office": "Oficina Norte",
    "salary": 45000
  }
]
```

**Ejemplo de respuesta de error:**

```json
{
  "error": "Error del servidor al obtener empleados"
}
```

### GET /empleados/:id

**Petición:**
GET http://localhost:3000/api/empleados/:id

**Ejemplo Petición:**
GET http://localhost:3000/api/empleados/60d21b4667d0d8992e610c85

**Descripción:** Mediante una petición GET a este endpoint obtendremos los detalles de un único empleado, identificado por su ID. Si el empleado no existe, se devolverá un mensaje de error.

**Ejemplo de respuesta exitosa:**

```json
    {
        "\_id": "60d21b4667d0d8992e610c85",
        "name": "Juan Pérez",
        "position": "Desarrollador",
        "office": "Oficina Central",
        "salary": 50000
    }
```
**Ejemplo de respuesta de error:**

```json
    {
        "error": "Empleado no encontrado"
    }
```

## PRUEBAS PARA POST

### POST /empleados

**Petición:**

POST http://localhost:3000/api/empleados

***Cuerpo de la solicitud:***

```json
{
    "name": "Carlos Fernández",
    "position": "Analista",
    "office": "Oficina Sur",
    "salary": 47000
}
```
**Descripción:** Mediante una petición POST a este endpoint se creará un nuevo empleado. Si ya existe un empleado con los mismos datos, se devolverá un mensaje de error.

**Ejemplo de respuesta exitosa:**

```json
{
    "status": "Empleado creado con éxito"
}
```

**Ejemplo de respuesta de error:**

```json
{
"error": "Empleado con los mismos datos ya existe"
}
```

## PRUEBAS PARA PUT

### PUT /empleados/

**Petición:**

PUT http://localhost:3000/api/empleados/:id

**Ejemplo de la solicitud:**
http://localhost:3000/api/empleados/60d21b4667d0d8992e610c85

***Cuerpo de la solicitud***:

```json
{
    "name": "Juan Pérez",
    "position": "Senior Desarrollador",
    "office": "Oficina Central",
    "salary": 60000
}
```
**Descripción:** Mediante una petición PUT a este endpoint se actualizará la información de un empleado existente. Si el empleado no existe, se devolverá un mensaje de error.

**Ejemplo de respuesta exitosa:**

```json
{
    "status": "Empleado actualizado con éxito",
    "empleado": 
    {
        "\_id": "60d21b4667d0d8992e610c85",
        "name": "Juan Pérez",
        "position": "Senior Desarrollador",
        "office": "Oficina Central",
        "salary": 60000
    }
}
```

**Ejemplo de respuesta de error:**

```json
{
"error": "Empleado con los mismos datos ya existe"
}
```
## PRUEBAS PARA DELETE

### DELETE /empleados/

**Petición:**
DELETE http://localhost:3000/api/empleados/:id

**Ejmeplo de Petición:**
DELETE http://localhost:3000/api/empleados/60d21b4667d0d8992e610c85

**Descripción:** Mediante una petición DELETE a este endpoint se eliminará un empleado por su ID. Si el empleado no existe, se devolverá un mensaje de error.

**Ejemplo de respuesta exitosa:**

```json
{
"status": "Empleado eliminado con éxito"
}
```

**Ejemplo de respuesta de error:**

```json
{
"error": "Empleado no encontrado"
}
```

Este documento cubre las pruebas básicas para el API REST. Puedes usar POSTMAN para enviar estas peticiones y verificar que la API responde correctamente a cada tipo de solicitud.
