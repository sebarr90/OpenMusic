<template>
  <div id="app">
    <NavBar />
    <!-- Incluye el componente de navegación -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"; // Asegúrate de que la ruta sea correcta

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
/* Puedes agregar estilos globales aquí */
</style>
