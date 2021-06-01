<template>
  <div id="app">
    <h3 class="text-center">Cargar nueva pelicula</h3>
    <hr />

    <form class="container" method="POST" enctype="multipart/form-data" @submit.prevent="uploadPelicula">
      <div class="mb-3">
        <label for="" class="form-label">Nombre de la pelicula</label>
        <input type="text" class="form-control" id="" v-model="pelicula.nombre">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Descripcion de la pelicula</label>
        <input type="text" class="form-control" id="" v-model="pelicula.descripcion">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Foto -</label>
        <input type="file"  id="file-input">
        <div v-if="selectedFile !== null">
          <img :src="urlFile" height="500px" />
        </div>
      </div>
      
<div class="mb-3">
        <label for="" class="form-label">genero</label>
        <input type="text" class="form-control" id="" v-model="pelicula.id_genero">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>


    
  </div>
  {{pelicula}}
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      selectedFile: null,
      pelicula:{
        nombre: "",
        descripcion:"",
        id_genero:"",
      }
    }
  },
  computed: {
    urlFile: function() {
      return URL.createObjectURL(this.selectedFile);
    }
  },
  methods: {
 /*    async generos() {
      const res = await fetch("http://localhost:3000/peliculas");
      const data = await res.json();
      this.genero= data.peliculas[0].genero.genero
      console.log(data.peliculas.genero.genero)     
    }, */

    uploadPelicula(){
    let data = new FormData();
    //let file = event.target.files[0];
    let elemento = document.getElementById('file-input');

    //data.append('name', 'my-file')
    data.append('file', elemento.files[0])
    data.append('nombre', this.pelicula.nombre)
    data.append('descripcion', this.pelicula.descripcion)
    data.append('id_genero', this.pelicula.id_genero)

    let config = {
      header : {
       'Content-Type' : 'multipart/form-data'
     }
    }
    let  pelicula= this.pelicula

    axios.post('http://localhost:3000/peliculas/crear', data, config, pelicula)
    .then(
      response => {
        console.log(response)
      }
    )
    
  },
   /*  async uploadPelicula() {
     await fetch("http://localhost:3000/peliculas/crear",{
       method:'POST',
       pelicula:this.pelicula
     });
     console.log(this.pelicula)
    },
 */
  }
};
</script>

