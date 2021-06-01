<template>
<div id="nav">
    <Header />
    
<!--    <Container/>
   
   <Carga />  -->
   <router-view/>
   <Footer/>
</div>
 
</template>
 <script>
 import Header from './components/Header'
 import Footer from './components/Footer' 
//import Container from './components/Container'
//import Carga from './views/CrearPelicula'
export default{
  components:{
    Header,
    Footer,
    //Container,
    //Carga,
  },

} 
</script> 
