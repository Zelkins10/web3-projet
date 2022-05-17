<template>
	<div class="characters-gallery">
		<div class="gallery-options">
				<input type="text" v-model="search" placeholder="Chercher un personnage">
				<label for="character-sort"> Sort by: </label>
				<select v-model="dogsSortType" id="dog-sort">
					<option value="AZName">Noms de A à Z</option>
					<option value="ZAName">Noms de Z à A</option>
					<option value="AZBreed">Espèces de A à Z</option>
					<option value="ZABreed">Espèces de Z à A</option>
				</select>
			<characterCard 
				v-for="character in sortCharacters"
				:key="character.name" 
				:name="character.name"
				:species="character.species"
				:birthYear="character.birth_year"
				/>
		</div>
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
			search: "",
			charactersSortType: "AZName",
			searchedCharacs: [],
		}
  },

	computed: {
		sortCharacters: function() {
			return this.improvedCharac.filter(searchCharacter => {
				return searchCharacter.name.toLowerCase().includes(this.search.toLowerCase())
			})
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

			async searchCharacter(search){
				let searchedCharacs = [];
				for(let i=0; i<this.improvedCharac.length; i++){
					if(this.improvedCharac[i].name.search(search) != -1){
						searchedCharacs.push(this.improvedCharac[i])
					}
				}
				return searchedCharacs
			}
	},
	components: {
		characterCard
	}

}
</script>