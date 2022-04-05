<template>

<!-- à retirer -->
  <div id="app">
    <img alt="Star Wars logo" src="./assets/Star-Wars-Logo.png"
    width= 25%
    height= auto>
    <p> Welcome to this Star Wars data website!<p/>
    <charactersGallery/>
  </div>


</template>

<script>
import charactersGallery from './components/CharactersGallery.vue'

export default {
  name: 'App',
  components: {
    charactersGallery
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
