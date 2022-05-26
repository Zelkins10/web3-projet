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