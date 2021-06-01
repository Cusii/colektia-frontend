<template>
  <div class="container bg-light shadow p-3 mb-5 bg-body rounded">
    <h3 class="text-center">Peliculas</h3>
    <hr />
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4"
          v-for="pelicula in peliculas"
          :key="pelicula.id_pelicula"
        >
          <Card
            :name="pelicula.nombre"
            :desc="pelicula.descripcion"
            :foto="pelicula.foto"
            :id="pelicula.id_pelicula"
            :genero="pelicula.genero.genero"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import Card from "../components/Card";
export default {
  data() {
    return {
      peliculas: null,
      generos: null,
    };
  },
  components: {
    Card,
  },
  mounted() {
    this.getPeliculas();
  },
  methods: {
    async getPeliculas() {
      const res = await fetch("http://localhost:3000/peliculas");
      const data = await res.json();
      this.peliculas = data.peliculas;
      console.log(data);
      //this.genero= data.peliculas[0].genero.genero
      //console.log(data.peliculas.genero.genero)
    },
  },
};
</script>
