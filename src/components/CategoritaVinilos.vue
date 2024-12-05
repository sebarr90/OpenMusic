<template>
  <div>
    <h1>{{ categoria.toUpperCase() }}</h1>
    <div v-if="vinilos.length">
      <div v-for="vinilo in vinilos" :key="vinilo.id" class="card">
        <img :src="vinilo.image" alt="Carátula de álbum" />
        <h3>{{ vinilo.artist }}</h3>
        <p>{{ vinilo.album }}</p>
      </div>
    </div>
    <p v-else>No hay vinilos disponibles en esta categoría</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      categoria: "", // Variable local para almacenar la categoría
    };
  },
  computed: {
    ...mapGetters(["obtenerCategoria"]),
    vinilos() {
      return this.obtenerCategoria(this.categoria);
    },
  },
  created() {
    this.categoria = this.$route.params.categoria;
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
img {
  max-width: 100px;
  margin-bottom: 10px;
}
</style>
