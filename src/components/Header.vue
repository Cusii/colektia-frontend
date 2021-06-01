<template>
  <header class="bg-primary p-4 ">
    <h1 class="  text-center text-white">CRUD Peliculas</h1>
    <router-link class="btn  text-center text-white" to="/">Listar peliculas</router-link>
    <router-link class="btn text-center text-white" to="/crear-pelicula">Cargar nueva pelicula </router-link>
    
  </header>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
