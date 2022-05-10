<template>
  <div class="character-card">
    <div>
      <h2 class="name">{{name}}</h2>
      <p class="species">{{species}}</p>
      <p class="birthYear">born in {{birthYear}}</p>
    </div>  
  </div>
</template>

<script>



export default {
  name: 'characterCard',
	props: {
		name: {type: String, required: true},
    species: String,
    birthYear: String,
  },
  created: function() {
    //console.log('je suis créé')
  }
}
</script>