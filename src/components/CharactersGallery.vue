<template>
	<div class="characters-gallery">
			<characterCard 
				v-for="character in improvedCharac"
				:key="character.name" 
				:name="character.name"
				:species="character.species"
				:birthYear="character.birth_year"
				/>
	</div>
</template>

<script>

import {getSWCharacterData} from '@/services/api/swAPI.js'
import {getSWSpeciesData} from '@/services/api/swAPI.js'

import characterCard from '@/components/CharacterCard.vue'

export default {
	name: 'charactersGallery',
  
	data(){
		return{
			swCharacterData: [],
			swSpeciesData: [],
			improvedCharac: [],
		}
  },

	created: function() {
		this.retrieveSWData()
	},

	methods: {
			async retrieveSWData(){
				this.swCharacterData = await getSWCharacterData()
				this.swSpeciesData = await getSWSpeciesData()

				let charac = await getSWCharacterData();
				let spec = await getSWSpeciesData();
				
				this.improvedCharac = this.enrichCharactersWithSpecies(await charac, await spec);
			},

			enrichCharactersWithSpecies(charac, spec){
				let newCharac = [ ...charac];
				for(let i=0; i<newCharac.length; i++){
					if(newCharac[i].species.length == 0){
						newCharac[i].species = spec[0].name;
					}
					else{
						newCharac[i].species = spec[newCharac[i].species[0] - 1].name; // vrai indice de Spec : newCharac[i].url - 1
					}
				}
				return newCharac;
			},
	},
	components: {
		characterCard
	}

}
</script>