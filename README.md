# Proyecto NYSL (cuarta evaluacion)

## Descripción General

El **Proyecto NYSL** es una aplicación web desarrollada como parte del curso de **Programación Front-End - Talento Digital (2023)** siendo la continuacion de una serie de mejoras. Esta aplicación está diseñada para proporcionar información sobre los partidos y detalles de la liga de fútbol juvenil de Chicago. Su objetivo principal es apoyar a los jóvenes atletas de los vecindarios del lado norte de Chicago, brindándoles oportunidades para aprender y practicar habilidades relacionadas con el fútbol, como la cooperación en equipo y el buen espíritu deportivo.

Esta versión incluye mejoras solicitadas por usuarios, específicamente padres de jugadores, para hacer que la experiencia sea más intuitiva y eficiente.

---

## Cambios y Mejoras Implementadas

En esta iteración del proyecto, se realizaron las siguientes actualizaciones en base a las solicitudes de los usuarios:

1. **Mapa para la Dirección de los Juegos**:  
   Ahora, al seleccionar un partido para ver los detalles, se incluye un mapa interactivo que muestra la ubicación exacta del juego junto con la dirección detallada.

2. **Vista Dividida en Modo Horizontal**:  
   Al girar el teléfono al modo horizontal, la aplicación muestra una vista dividida con:
   - Una lista de juegos en la parte izquierda.
   - Detalles del juego seleccionado en la parte derecha.  
   Esto permite a los usuarios alternar entre juegos rápidamente sin recargar toda la página.

3. **Mejor Rendimiento de la Navegación**:  
   La funcionalidad de actualización entre las páginas de detalles del juego ahora es más rápida y fluida, lo que reduce significativamente el tiempo de espera.

## NOTA
**considerar que esta orientado solo para su uso en moviles, en esta fase solo de manera vertical**
---

## Diagrama de Flujo de Navegación

El siguiente diagrama ilustra la navegación dentro de la aplicación web, destacando las rutas principales para la lista de partidos y la página de detalles:

*(Imagen del diagrama de flujo 1 aquí: diagrama_navegacion.png)*

### Diagrama de Flujo de Interacción en Modo Horizontal

Este diagrama muestra cómo funciona la vista dividida en modo horizontal, permitiendo que los usuarios alternen entre los detalles de los partidos rápidamente:

*(Imagen del diagrama de flujo 2 aquí: diagrama_horizontal.png)*

---

## Capturas de Pantalla

A continuación, se presentan algunas capturas de pantalla de la aplicación:

Página de Inicio Muestra el contenido principal y la navegación inicial para los usuarios: <img src="src/assets/readme_img/screen_1.png" alt="captura de la pagina principal y la navegación inicial para los usuarios" width="300">

Lista de Partidos Tabla con todos los partidos disponibles, incluyendo detalles como equipos, fechas y ubicaciones: <img src="src/assets/readme_img/screen_2.png" alt="captura de la pagina partidos disponibles, incluyendo detalles como equipos, fechas y ubicaciones" width="300">

Vista de detalles Página de detalles de partido: <img src="src/assets/readme_img/screen_3.png" alt="captura de la pagina principal y la navegación inicial para los usuarios" width="300">

---

## Tecnologías Utilizadas

El proyecto sigue utilizando las siguientes tecnologías modernas para su desarrollo y funcionamiento:

- **Vue.js**: Framework progresivo de JavaScript para construir interfaces de usuario y aplicaciones de una sola página (SPA).
- **Vue Router**: Biblioteca oficial de Vue.js para el enrutamiento, que permite la navegación fluida entre diferentes vistas.
- **Sass**: Preprocesador de CSS que facilita la escritura de estilos organizados y eficientes.
- **Bootstrap**: Framework de CSS para diseño de interfaces web responsivas y modernas.
- **Font Awesome**: Biblioteca de iconos escalables y personalizables mediante CSS.
- **Firebase Hosting**: Servicio de alojamiento web rápido y seguro proporcionado por Firebase.
- **Node.js** y **npm**: Entorno de ejecución de JavaScript del lado del servidor y su gestor de paquetes para manejar dependencias y scripts del proyecto.

---

## Instalación y Uso

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio:  
   git clone https://github.com/[usuario]/nysl-project.git

2. Navega al directorio del proyecto:  
   cd nysl-project

3. Instala las dependencias:  
   npm install

4. Ejecuta la aplicación en modo desarrollo:  
   npm run serve  
   Luego abre [http://localhost:8080](http://localhost:8080) en tu navegador para ver la aplicación.

5. Compila y minifica para producción:  
   npm run build

6. Ejecuta el linter y corrige archivos:  
   npm run lint

---

## Contribuir

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.  
2. Crea una nueva rama:  
   git checkout -b feature/nueva-funcionalidad

3. Realiza tus cambios y haz commit:  
   git commit -m "Descripción de los cambios"

4. Sube tus cambios:  
   git push origin feature/nueva-funcionalidad

5. Abre un Pull Request explicando los cambios realizados.

---

## Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el archivo LICENSE para más detalles.

---

## Contacto

Para consultas o sugerencias relacionadas con este proyecto, puedes contactar a:

- **Nombre del Autor:** [Tu Nombre]  
- **Correo Electrónico:** [tuemail@ejemplo.com]  
- **Curso:** Programación Front-End - Talento Digital (2023)  
