<template>
  <header class="bg-primary p-4">
    <h1 class="text-center text-white">CRUD Peliculas</h1>
    <div class="container">
      <router-link
        class="btn btn-outline-warning text-center text-white m-2"
        to="/"
        >Listar peliculas</router-link
      >
      <router-link
        class="btn btn-outline-warning text-center text-white m-2"
        to="/crear-pelicula"
        >Cargar nueva pelicula
      </router-link>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: String,
  },
};
</script>
