/*
// Racine de l'API
const getSWData = async function() {
    const response = await fetch("https://swapi-deno.azurewebsites.net/api") // ancienne API qui semble être down : https://swapi.dev/api
    if(response.status == 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }
}
*/

// Characters
export const getSWCharacterData = async function() {
    const response = await fetch("https://swapi-deno.azurewebsites.net/api/people")
    if(response.status == 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }
}

// Species
export const getSWSpeciesData = async function() {
    const response = await fetch("https://swapi-deno.azurewebsites.net/api/species")
    if(response.status == 200){
        return response.json()
    }
    else{
        new Error(response.statusText)
    }
}

//export {getSWCharacterData, getSWSpeciesData}  // avant : export { getSWData }

// @ dans chemin dans swAPI équivaut à mettre le dossier src