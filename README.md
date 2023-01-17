## Electron Mongodb CRUD

aplicación de Electron que utiliza MongoDB como base de datos para realizar operaciones CRUD en tareas. El proyecto utiliza las siguientes tecnologías:

Electron: para crear una aplicación de escritorio
MongoDB: como base de datos para almacenar las tareas
Mongoose: como ORM (Mapeo Objeto-Relacional) para interactuar con MongoDB
EJS (Templating JavaScript Incorporado): como motor de plantillas para renderizar las vistas
Bootstrap: para el estilo
El proceso principal de la aplicación está en el archivo main.js y crea una ventana y carga el archivo index.html en ella. El proceso principal también se comunica con el proceso de renderizado a través de IPC (Comunicación entre Procesos) para realizar operaciones CRUD en tareas.

El proceso de renderizado está en el archivo public/js/index.js y escucha los eventos enviados por el proceso principal y actualiza la vista en consecuencia. También envía eventos al proceso principal para crear, leer, actualizar y eliminar tareas.

El archivo models/Task.js define el modelo Tarea que se utiliza para interactuar con MongoDB. Utiliza Mongoose para definir el esquema de la Tarea y también exporta métodos para realizar operaciones CRUD en tareas.

La carpeta views contiene plantillas EJS que son renderizadas por el servidor y se muestran en la ventana.

En resumen, este proyecto es un ejemplo simple de cómo crear una aplicación de escritorio utilizando Electron y MongoDB para realizar operaciones CRUD en tareas.

![](./screenshot.png)

### Requeriments

- Nodejs
- Mongodb (local or remote installation using mongodb online / atlas free plan)

### Environment variables

```
MONGODB_URI
```

## Installation

```bash
npm i
npm start
```
