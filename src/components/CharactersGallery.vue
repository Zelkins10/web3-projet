<!-- obsolète --> 
<!--
    <div class="characters-gallery">
		<characterCard :firstname="swData[1].name" :species="swData[1].species"/>
		<characterCard :firstname="swData[0].name" :species="swData[0].species"/>
  </div>
  -->

<template>
	<div class="characters-gallery">
			<characterCard 
				v-for="character in swCharacterData"
				:key="character.name" 
				:name="character.name"
				:species="character.species"/>
	</div>
</template>

<script>
import getSWCharacterData from '@/services/api/swCharacterAPI.js'

import characterCard from '@/components/CharacterCard.vue'

export default {
	name: 'charactersGallery',
  
  data(){
    return{
      swCharacterData: []
    }
  },

	created: function() {
		this.retrieveSWData()
	},

	methods: {
			async retrieveSWData(){
				this.swCharacterData = await getSWCharacterData()
			}
	},
	components: {
		characterCard
	}

}
</script>