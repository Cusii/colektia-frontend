<template>
  <div id="app">
    <h3 class="text-center">Editar pelicula</h3>
    <hr />
    <div class="container border border-5 mb-5 shadow ">
      <div class="row mt-3">
        <div class=" mx-auto col-12 col-md-8 col-lg-6 ">
          <form
      class=""
      method="POST"
      enctype="multipart/form-data"
      @submit.prevent="uploadPelicula"
    >
      <div class="mb-3">
        <label for="" class="form-label">Nombre de la pelicula</label>
        <input
          type="text"
          class="form-control"
          id=""
          v-model="pelicula.nombre"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Descripcion de la pelicula</label>
        <input
          type="text"
          class="form-control"
          id=""
          v-model="pelicula.descripcion"
        />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Foto -</label>
        <input type="file" id="file-input" />
        <div v-if="selectedFile !== null">
          <img :src="urlFile" height="500px" />
        </div>
      </div>

      <div class="mb-3">
              <label for="" class="form-label">Genero</label>
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="pelicula.id_genero"
              >
                <option value="1">Comedia</option>
                <option value="2">Terror</option>
                <option value="3">Musical</option>
                <option value="4">Accion</option>
                <option value="5">Infantil</option>
              </select>
            </div>
      <button type="submit" class="btn btn-primary mb-4">Submit</button>
    </form>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedFile: null,
      pelicula: {
        nombre: "",
        descripcion: "",
        id_genero: "",
      },
    };
  },
  computed: {
    urlFile: function () {
      return URL.createObjectURL(this.selectedFile);
    },
  },
  methods: {
    /*    async generos() {
      const res = await fetch("http://localhost:3000/peliculas");
      const data = await res.json();
      this.genero= data.peliculas[0].genero.genero
      console.log(data.peliculas.genero.genero)     
    }, */

    uploadPelicula() {
      let data = new FormData();
      let elemento = document.getElementById("file-input");
      data.append("file", elemento.files[0]);
      data.append("nombre", this.pelicula.nombre);
      data.append("descripcion", this.pelicula.descripcion);
      data.append("id_genero", this.pelicula.id_genero);
      let config = {
        header: {
          "Content-Type": "multipart/form-data",
        },
      };
      let pelicula = this.pelicula;

      axios
        .put("http://localhost:3000/peliculas/editar/2", data, config, pelicula)
        .then((response) => {
          console.log(response);
        },
        this.pelicula.nombre = "",
        this.pelicula.descripcion = "",
        this.pelicula.id_genero = "",
        
        );
    },
  },
};
</script>

