
# Film-Search 🎬

![Vue.js](https://img.shields.io/badge/Vue.js-2.x-4FC08D?style=for-the-badge&logo=vue.js)
![Vuex](https://img.shields.io/badge/Vuex-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![Vue Router](https://img.shields.io/badge/Vue_Router-3.x-4FC08D?style=for-the-badge&logo=vue.js)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass)

> Una aplicación web para buscar información sobre películas, ver detalles y guardar tus favoritas.

Este proyecto fue creado con el objetivo de demostrar habilidades en el desarrollo frontend con Vue.js, enfocado en el consumo de APIs externas, la gestión de estado centralizado y la persistencia de datos en el navegador.

---

### ✨ Demo en Vivo

*¡Próximamente! Este proyecto será desplegado pronto.*

**(Nota para ti, Jose: Cuando lo despliegues en Netlify o Vercel, ¡no olvides poner el enlace aquí!)**

---

## 🚀 Características Principales

*   **Búsqueda de Películas**: Busca películas por título de forma dinámica.
*   **Detalles de Película**: Accede a una vista detallada con información como sinopsis, puntuación, año de lanzamiento y más.
*   **Sistema de Favoritos**: Marca tus películas favoritas y consúltalas en una sección dedicada. Los favoritos se guardan localmente en tu navegador.
*   **Paginación**: Navega fácilmente a través de los resultados de búsqueda.
*   **Modo Oscuro**: Cambia entre un tema claro y oscuro para una mejor experiencia visual.

## 🛠️ Stack Tecnológico y Conceptos Aplicados

Este proyecto está construido con **Vue 2 (Options API)** y utiliza las siguientes tecnologías y conceptos clave:

*   **Framework**: [Vue.js 2](https://v2.vuejs.org/)
*   **Gestión de Estado**: [Vuex 3](https://v3.vuex.vuejs.org/) para un manejo de estado centralizado y predecible, especialmente para los favoritos y el tema de la UI.
*   **Routing**: [Vue Router 3](https://v3.router.vuejs.org/) para la navegación entre las diferentes vistas de la aplicación.
*   **Cliente HTTP**: [Axios](https://axios-http.com/) para realizar peticiones a la API de TMDb.
*   **Estilos**: **SCSS** con la metodología `scoped styles` para mantener los estilos de los componentes encapsulados.
*   **Persistencia de Datos**: Uso de `localStorage` para guardar los favoritos del usuario entre sesiones.
*   **Consumo de API REST**: Integración con la API de [The Movie Database (TMDb)](https://www.themoviedb.org/documentation/api) como fuente de datos.

## ⚙️ Cómo Empezar (Instalación Local)

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

**1. Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/film-search.git
cd film-search
```

**2. Instala las dependencias**
```bash
npm install
```

**3. Configura tus variables de entorno**

   Necesitarás una API Key de The Movie Database (TMDb). Si no tienes una, puedes solicitarla gratuitamente en [su sitio web](https://www.themoviedb.org/signup).

   Crea un fichero llamado `.env.local` en la raíz del proyecto y añade tu clave:

   ```
   VUE_APP_TMDB_API_KEY=aquí_va_tu_api_key
   ```

**4. Ejecuta la aplicación**

   Una vez configurado, puedes iniciar el servidor de desarrollo:
```bash
npm run serve
```
La aplicación estará disponible en `http://localhost:8080`.


## 📸 Screenshots

*(Aquí puedes añadir capturas de pantalla de tu aplicación. Por ejemplo: de la página principal, de la búsqueda, de los detalles de una película y de la sección de favoritos).*
