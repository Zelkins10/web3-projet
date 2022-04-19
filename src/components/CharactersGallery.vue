<template>
	<div class="characters-gallery">
			<characterCard 
				v-for="character in swCharacterData"
				:key="character.name" 
				:name="character.name"
				:species="character.species"
				/>
	</div>
</template>

<script>

/* Backup: v-for="url in swSpeciesData"
				v-if="" 
				:species="swSpeciesData.name[character.species]"
*/

import getSWCharacterData from '@/services/api/swAPI.js'
import getSWSpeciesData from '@/services/api/swAPI.js'

import characterCard from '@/components/CharacterCard.vue'

export default {
	name: 'charactersGallery',
  
  data(){
    return{
		swCharacterData: [],
		swSpeciesData: []
    }
  },
	/*
	computed: {
		charactersWithSpeciesData: function(){// mettre ici données avec chiffre d'espèce remplacé par nom espèce
			let characData = this.swCharacterData
			let SpecData = this.swSpeciesData
			characData[species] = SpecData[]
		}
	}
	*/

	created: function() {
		this.retrieveSWData()
	},

	methods: {
			async retrieveSWData(){
				//this.swCharacterData = await getSWCharacterData()
				//this.swSpeciesData = await getSWSpeciesData()

				let Charac = await getSWCharacterData();
				let Spec = await getSWSpeciesData();
				
				this.computeData(await Charac, await Spec);
			},

			computeData(Charac, Spec){
				let NewCharac = Charac.copy();

				for(let i=0; i<NewCharac.length; i++){
					let computedCharac = {};
					computedCharac.species = NewCharac[i].species;
					if(NewCharac[i].species == []){
						computedCharac.species = 1;
					}
					NewCharac[i].species = Spec[i].name;
					NewCharac
				}
			}
	},
	components: {
		characterCard
	}

}
</script>