# Contexto del Proyecto para Gemini

## 1. Resumen del Proyecto

Este es un sitio web donde los usuarios pueden visualizar datos de películas (título, descripción, etc. ), añadirlas a favoritos, buscar la que deseen.

## 2. Stack Tecnológico Principal (Vue 2)

Este proyecto utiliza **Vue 2**. Todo el código generado debe ser compatible con **Vue 2.x** (específicamente Vue 2.6+).

- **Framework:** Vue 2 (Options API).
- **Gestión de Estado:** Vuex 3 (usando la estructura modular: `store/modules/`).
- **Routing:** Vue Router 3 (usando `router/index.js`).
- **Cliente HTTP:** Axios (con una instancia centralizada en `src/plugins/axios.js`).
- **UI Framework:** "CSS/SCSS personalizado".
- **Build Tool:** Vue CLI (Webpack).

## 3. Estándares de Código y Patrones

- **API de Componentes:** Usamos **Options API** (`data`, `methods`, `computed`, `watch`, `created`, `mounted`). **NO usar** `<script setup>` ni Composition API de Vue 3.
- **Estilos:** Usamos `<style scoped>` en todos los componentes. El pre-procesador es **SCSS**.
- **Linting:** Seguimos las reglas de ESLint (Ej: "configuración de Airbnb") + Prettier.
- **Nomenclatura:**
  - Componentes "Base" (reutilizables) se prefijan con `Base` (Ej: `BaseButton.vue`).
  - Componentes de "Vistas" (páginas) están en `src/views`.
- **Gestión de Estado (Vuex):**
  - Los módulos de Vuex están **namespaced** (`namespaced: true`).
  - Preferimos `mapState`, `mapGetters`, `mapActions`, `mapMutations` en los componentes.
  - Las llamadas a API se gestionan en las **Actions** de Vuex.

## 4. Estructura de Ficheros Clave

- `@`: Alias de Webpack para `src/`.
- `@/components`: Componentes globales y reutilizables.
- `@/views`: Componentes de página (gestionados por Vue Router).
- `@/store`: Raíz de Vuex (`index.js` y `modules/`).
- `@/router`: Configuración de Vue Router.
- `@/services`: Lógica de negocio desacoplada, (Ej: `apiService.js`).
- `@/assets`: Recursos estáticos.
- `@/mixins`: Mixins reutilizables (si los usas).

## 5. Objetivos y Tareas Comunes

- "Ayúdame a refactorizar componentes grandes de Options API."
- "Genera módulos de Vuex (state, getters, actions, mutations) para nuevos endpoints."
- "Optimiza el rendimiento (ej: `v-if` vs `v-show`, uso de `computed`)."
- "Responde siempre en Español"
- Tienes permiso para acceder a todos los ficheros de este proyecto
