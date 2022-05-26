<template>

  <div id="app">
    <SWHeader/>
    <p>Welcome to this Star Wars data website!</p>
    <charactersGallery/>
    <SWFooter/>
  </div>

</template>

<script>
import SWHeader from './components/Header.vue'
import charactersGallery from './components/CharactersGallery.vue'
import SWFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    SWHeader,
    charactersGallery,
    SWFooter
  }
}
</script>

<style>
#app {
  background-color: rgb(26, 27, 26);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(191, 201, 205);
  padding-top: 60px;
}

body {
  margin: 0;
  padding: 0;
}
</style>